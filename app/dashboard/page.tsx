"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FolderOpen, BookOpen, MessageSquare, Users } from "lucide-react";
import { projects } from "@/lib/data";

const stats = [
  { label: "Projects", icon: FolderOpen, value: projects.length, color: "from-brand-500 to-violet-500" },
  { label: "Blog Posts", icon: BookOpen, value: 4, color: "from-cyan-500 to-blue-500" },
  { label: "Messages", icon: MessageSquare, value: "–", color: "from-green-500 to-emerald-500" },
  { label: "Visitors", icon: Users, value: "–", color: "from-orange-500 to-red-500" },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-black text-foreground">Overview</h1>
        <p className="text-muted-foreground">
          Welcome back, Dev. Here&apos;s your portfolio at a glance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="h-5 w-5 text-white" />
            </div>
            <div className="text-3xl font-black text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
        <h2 className="mb-2 font-bold text-yellow-400">🔧 Setup Required</h2>
        <p className="text-sm text-muted-foreground">
          Connect your Supabase project to enable full CRUD for projects, blog posts, and messages.
          See the <code className="text-brand-400">.env.local.example</code> file for required environment variables.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="mb-4 font-bold text-foreground">Quick Actions</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { href: "/dashboard/projects", label: "Manage Projects", icon: FolderOpen },
            { href: "/dashboard/blog", label: "Write Blog Post", icon: BookOpen },
            { href: "/dashboard/messages", label: "View Messages", icon: MessageSquare },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <Icon className="h-4 w-4 text-brand-400" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
