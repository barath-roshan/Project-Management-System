# 🚀 ProManager: Fleet Identity & Project Management System

ProManager is a high-performance, industrial-grade project management engine designed for modern fleets and specialized squads. It features automated identity provisioning, role-based access control, and real-time operational analytics.

![ProManager Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070)

## 🎭 The Vision: Fleet Velocity
ProManager isn't just a todo list; it's a **Command & Control** hub. Built for Managers who need to recruit personnel rapidly, the system automates the friction of onboarding by generating secure, standardized credentials instantly upon enlistment.

---

## ✨ Key Features

### 📊 Fleet Intel (Dashboard)
- **Global Overview**: Real-time stats on Active Missions, Directives, Fleet Size, and Total Budget.
- **Mission Status Distribution**: Visual representation of project completion status using advanced charting.
- **Recent Activity Feed**: Stay updated with the latest operational changes across all theaters.

### 🛡️ Tactical Provisioning (Identity Management)
- **Automated Credentialing**: Logins (Username/Password) are automatically generated using the operative's name and date of birth.
- **Role-Based Access (RBAC)**: Strict separation between **Managers** (Command) and **Employees** (Operatives).
- **Enlistment Protocol**: Streamlined recruitment process with full identity audit trails.

### 🏗️ Mission Control (Project Management)
- **Operational Theaters**: Create, track, and manage complex projects with detailed status tracking (Active, On-Hold, Completed).
- **Budget Tracking**: Monitor financial resources allocated to each mission.
- **Squad Formation**: Organize operatives into specialized squads (Squads Alpha, Omega, etc.) for targeted execution.

### 📝 Directives (Task Management)
- **High-Precision Tracking**: Tasks with defined priority (High, Medium, Low) and specialized statuses (Todo, In Progress, Review, Done).
- **Resource Assignment**: Directives can be assigned to specific operatives in the fleet.
- **Field Intel**: Support for file uploads and internal comments on every task.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Authentication**: [Supabase Auth](https://supabase.com/auth) (Google & Credentials)
- **Database**: [Supabase PostgreSQL](https://supabase.com/) with Row Level Security (RLS)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Typography**: [Geist Sans/Mono](https://vercel.com/font)

---

## 🚦 Getting Started

### 1. Clone the Fleet Repository
```bash
git clone <your-repo-url>
cd project-management-system
```

### 2. Configure Intel (Environment Variables)
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Initialize Tactical Database
Execute the `supabase_schema.sql` script in your Supabase SQL Editor to provision the necessary tables:
- `projects`
- `teams`
- `team_members`
- `tasks`
- `task_assignments`
- `system_users` (Identity Management Table)

### 4. Deploy Local Hub
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to access the Command Center.

---

## 🔐 Security & RLS
ProManager implements **Row Level Security (RLS)** at the database level. 
- Operatives can only view projects and tasks they are assigned to.
- Managers have global visibility and destructive permissions (Delete/Update).
- Authentication via Google Auth ensures enterprise-grade security.

## 🤝 Contribution Protocol
Maintain tactical discipline. Follow the design system (Glassmorphism + Dark Mode) and ensure all new features align with the high-performance aesthetics of the fleet.

---
*Built for the next generation of operational excellence.*
