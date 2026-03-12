"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-brand-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm text-brand-400">{"// journey"}</p>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-violet-500/30 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex gap-6 md:gap-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500/50 bg-gradient-to-br from-brand-500/20 to-violet-500/20 backdrop-blur-sm">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-brand-400" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-violet-400" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 md:w-[calc(50%-3rem)] ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-brand-500/30 hover:bg-white/5">
                    <div className={`mb-1 flex items-center gap-2 text-xs text-muted-foreground ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <p className="mb-3 font-medium gradient-text text-sm">{exp.company}</p>
                    <ul className={`space-y-1 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((desc, j) => (
                        <li key={j} className="text-sm text-muted-foreground">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
