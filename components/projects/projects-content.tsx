"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Zap, Globe, Cpu, BarChart2 } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

const filters: { key: Project["category"] | "all"; label: string; icon: typeof Zap }[] = [
  { key: "all", label: "All", icon: Globe },
  { key: "ai", label: "AI & ML", icon: Zap },
  { key: "systems", label: "Systems", icon: Cpu },
  { key: "web", label: "Web", icon: Globe },
  { key: "data", label: "Data", icon: BarChart2 },
];

const categoryConfig: Record<Project["category"], { color: string; bg: string }> = {
  ai: { color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/30" },
  systems: { color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30" },
  web: { color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30" },
  data: { color: "text-green-400", bg: "bg-green-500/10 border-green-500/30" },
};

export function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState<Project["category"] | "all">("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-3 font-mono text-sm text-brand-400">{"// portfolio_work"}</p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of things I&apos;ve built — ranging from real-time AI applications to
              low-level systems software and data-driven platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {filters.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`flex flex-shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === key
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                    : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.map((project, i) => {
                const cfg = categoryConfig[project.category];
                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:border-brand-500/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-brand-500/5"
                  >
                    {/* Top gradient line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Category + Links */}
                      <div className="mb-4 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.bg} ${cfg.color}`}
                        >
                          {project.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {project.demo_url && (
                            <a
                              href={project.demo_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {project.featured && (
                        <div className="mb-2 inline-flex items-center gap-1 text-xs text-brand-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                          Featured
                        </div>
                      )}

                      <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech_stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
