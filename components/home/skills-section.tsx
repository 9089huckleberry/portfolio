"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import type { Skill } from "@/types";

const CATEGORIES: { key: Skill["category"]; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "web", label: "Web" },
  { key: "cloud", label: "Cloud & Data" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools" },
];

const categoryColors: Record<Skill["category"], string> = {
  languages: "from-brand-500 to-violet-500",
  web: "from-cyan-500 to-blue-500",
  cloud: "from-orange-500 to-red-500",
  databases: "from-green-500 to-emerald-500",
  tools: "from-purple-500 to-pink-500",
};

export function SkillsSection() {
  const [active, setActive] = useState<Skill["category"]>("languages");
  const filtered = skills.filter((s) => s.category === active);

  return (
    <section className="relative py-24 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm text-brand-400">{"// tech_stack"}</p>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? "bg-gradient-to-r text-white shadow-lg " + categoryColors[cat.key]
                  : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
