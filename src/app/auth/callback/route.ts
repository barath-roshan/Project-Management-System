import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )
    
    const { data: { user }, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error && user) {
      // PROMANAGER INTEGRATION: Set manual tactical cookies for session sync
      const tacticalUsername = user.email?.split('@')[0] || 'commander';
      
      // Check if user exists in system_users (manual auth table)
      let { data: tacticalUser } = await supabase
        .from('system_users')
        .select('*')
        .eq('username', tacticalUsername)
        .single();
      
      if (!tacticalUser) {
        // Create new identity in system_users
        const { data: newUser, error: createError } = await supabase
          .from('system_users')
          .insert([{
             username: tacticalUsername,
             password: 'OAUTH_MANAGED', // Placeholder encryption key
             full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Unknown Operative',
             role: 'Employee'
          }])
          .select()
          .single();
        
        if (!createError) tacticalUser = newUser;
      }

      const redirectUrl = `${origin}${next}`
      const response = NextResponse.redirect(redirectUrl)
      
      if (tacticalUser) {
        // Sync cookies that the rest of the application depends on
        response.cookies.set('promanager_session', tacticalUser.id, { path: '/', maxAge: 86400, sameSite: 'lax' })
        response.cookies.set('promanager_role', tacticalUser.role, { path: '/', maxAge: 86400, sameSite: 'lax' })
        response.cookies.set('promanager_name', tacticalUser.full_name, { path: '/', maxAge: 86400, sameSite: 'lax' })
      }
      
      return response
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=auth-code-exchange-failed`)
}
