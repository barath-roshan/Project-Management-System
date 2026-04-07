"use client";

import React, { useState, useEffect } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  ChevronDown, 
  Calendar, 
  Zap, 
  Target, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const trendData = [
  { name: "Week 1", completed: 400, planned: 240 },
  { name: "Week 2", completed: 300, planned: 139 },
  { name: "Week 3", completed: 200, planned: 980 },
  { name: "Week 4", completed: 278, planned: 390 },
  { name: "Week 5", completed: 189, planned: 480 },
  { name: "Week 6", completed: 239, planned: 380 },
  { name: "Week 7", completed: 349, planned: 430 },
];

const performanceData = [
  { name: "Mon", score: 85 },
  { name: "Tue", score: 72 },
  { name: "Wed", score: 91 },
  { name: "Thu", score: 64 },
  { name: "Fri", score: 78 },
  { name: "Sat", score: 45 },
  { name: "Sun", score: 32 },
];

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2 font-medium">Visualizing cross-project performance and team velocity.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-4 py-3 bg-muted/30 border border-white/5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-muted/50 transition-colors">
              <Calendar className="w-4 h-4" />
              Last 30 Days <ChevronDown className="w-3 h-3" />
           </button>
           <button className="bg-primary text-black px-6 py-3 font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors rounded-xl shadow-lg ring-offset-background active:scale-95">
              Export Report
           </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-4 gap-6">
        <div className="glass-card p-8 group">
           <div className="flex justify-between items-center mb-6">
             <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform"><TrendingUp className="w-5 h-5 text-primary" /></div>
             <span className="text-primary text-[10px] font-black px-2 py-1 bg-primary/10 rounded-full flex items-center gap-1 uppercase"><ArrowUpRight className="w-3 h-3" /> 18.2%</span>
           </div>
           <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest block mb-1">Weekly Velocity</span>
           <h2 className="text-3xl font-black">2.4k Tasks</h2>
        </div>
        <div className="glass-card p-8 group">
           <div className="flex justify-between items-center mb-6">
             <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform"><Zap className="w-5 h-5 text-primary" /></div>
             <span className="text-red-500 text-[10px] font-black px-2 py-1 bg-red-500/10 rounded-full flex items-center gap-1 uppercase"><ArrowDownRight className="w-3 h-3" /> 5.4%</span>
           </div>
           <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest block mb-1">Average Burn</span>
           <h2 className="text-3xl font-black">1.1k / Hr</h2>
        </div>
        <div className="glass-card p-8 group">
           <div className="flex justify-between items-center mb-6">
             <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform"><Target className="w-5 h-5 text-primary" /></div>
             <span className="text-primary text-[10px] font-black px-2 py-1 bg-primary/10 rounded-full flex items-center gap-1 uppercase"><ArrowUpRight className="w-3 h-3" /> 12.1%</span>
           </div>
           <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest block mb-1">Completion Rate</span>
           <h2 className="text-3xl font-black">84.2%</h2>
        </div>
        <div className="glass-card p-8 group">
           <div className="flex justify-between items-center mb-6">
             <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform"><Activity className="w-5 h-5 text-primary" /></div>
             <span className="text-primary text-[10px] font-black px-2 py-1 bg-primary/10 rounded-full flex items-center gap-1 uppercase"><ArrowUpRight className="w-3 h-3" /> 3.2%</span>
           </div>
           <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest block mb-1">Team Efficiency</span>
           <h2 className="text-3xl font-black">92.5%</h2>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-12 gap-8 pb-10">
         <div className="col-span-8 glass-card p-10">
            <h3 className="text-xl font-bold mb-8">Planned vs Completed Comparison</h3>
            <div className="h-[400px] w-full">
               {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={trendData}>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} />
                     <Tooltip 
                       contentStyle={{background: '#121214', border: '1px solid #27272a', borderRadius: '12px'}}
                     />
                     <Bar dataKey="planned" fill="#313134" radius={[6, 6, 0, 0]} />
                     <Bar dataKey="completed" fill="#52bfad" radius={[6, 6, 0, 0]} />
                   </BarChart>
                 </ResponsiveContainer>
               )}
            </div>
         </div>

         <div className="col-span-4 glass-card p-10 flex flex-col">
            <h3 className="text-xl font-bold mb-8">Score History</h3>
            <div className="flex-1 w-full h-[300px]">
               {mounted && (
                 <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={performanceData}>
                     <Tooltip 
                       contentStyle={{background: '#121214', border: '1px solid #27272a', borderRadius: '12px'}}
                     />
                     <Line type="monotone" dataKey="score" stroke="#52bfad" strokeWidth={4} dot={{stroke: '#52bfad', r: 4, strokeWidth: 2}} />
                   </LineChart>
                 </ResponsiveContainer>
               )}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
               <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2 underline decoration-primary underline-offset-8">Peak Load</span>
                  <span className="text-xl font-black">91% (Wed)</span>
               </div>
               <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2 underline decoration-red-500 underline-offset-8">Min Load</span>
                  <span className="text-xl font-black">32% (Sun)</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
