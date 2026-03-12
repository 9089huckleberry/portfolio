"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/lib/data";

export function ExperienceContent() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-brand-500/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-3 font-mono text-sm text-brand-400">{"// career_journey"}</p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              My <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From competitive programming to enterprise-scale cloud data engineering —
              each step building toward something bigger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-violet-500/30 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-8"
                >
                  {/* Icon badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 backdrop-blur-sm ${
                        exp.type === "work"
                          ? "border-brand-500/50 bg-brand-500/15"
                          : "border-violet-500/50 bg-violet-500/15"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <Briefcase className="h-7 w-7 text-brand-400" />
                      ) : (
                        <GraduationCap className="h-7 w-7 text-violet-400" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-brand-500/30 transition-colors">
                    {/* Type tag */}
                    <span
                      className={`mb-3 inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${
                        exp.type === "work"
                          ? "bg-brand-500/15 text-brand-400"
                          : "bg-violet-500/15 text-violet-400"
                      }`}
                    >
                      {exp.type === "work" ? "Work Experience" : "Education"}
                    </span>

                    <h2 className="text-xl font-black text-foreground">{exp.role}</h2>
                    <p className="gradient-text mb-1 font-semibold">{exp.company}</p>

                    <div className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500/70" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
