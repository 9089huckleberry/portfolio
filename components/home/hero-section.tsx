"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter";

const techBadges = [
  { label: "React", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30" },
  { label: "Node.js", color: "from-green-500/20 to-emerald-500/20 border-green-500/30" },
  { label: "Python", color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30" },
  { label: "C++", color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30" },
  { label: "GCP", color: "from-red-500/20 to-orange-500/20 border-red-500/30" },
  { label: "SQL", color: "from-purple-500/20 to-violet-500/20 border-purple-500/30" },
  { label: "TypeScript", color: "from-blue-500/20 to-sky-500/20 border-blue-500/30" },
  { label: "MongoDB", color: "from-green-500/20 to-teal-500/20 border-green-500/30" },
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "GitHub Repos", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Lines of Code", value: "50k+" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-16">
      {/* Premium Bluish Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-500/10" />
        <div className="absolute -right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[120px] dark:bg-violet-500/10" />
        <div className="absolute bottom-[10%] left-[20%] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-white/60"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Available for opportunities · Chennai, India
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-5xl font-black leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Dev Pratap</span>
              <br />
              <span className="gradient-text">Singh</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl"
            >
              <TypewriterText />
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              B.Tech CSE @ NIT Trichy. I build{" "}
              <span className="font-semibold text-foreground">scalable systems</span>,{" "}
              <span className="font-semibold text-foreground">intelligent applications</span>, and{" "}
              <span className="font-semibold text-foreground">modern web experiences</span> that make an impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-105 hover:shadow-brand-500/40"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <a
                href="https://github.com/9089huckleberry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-pratap-singh-a694b6366/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Tech Badges Cloud */}
          <div className="relative hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-brand-500/15 blur-3xl" />
              </div>

              {/* Avatar Circle */}
              <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border-2 border-brand-500/30 bg-gradient-to-br from-brand-500/20 to-violet-500/20 backdrop-blur-sm">
                <span className="text-7xl select-none">👨‍💻</span>
              </div>

              {/* Orbiting Tech Badges */}
              {techBadges.map((badge, i) => {
                const angle = (i / techBadges.length) * 2 * Math.PI;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className={`absolute inline-flex items-center rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold text-foreground ${badge.color}`}
                    style={{
                      left: `calc(50% + ${x}px - 30px)`,
                      top: `calc(50% + ${y}px - 12px)`,
                      animation: `float ${5 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                    }}
                  >
                    {badge.label}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-mono">scroll down</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-muted-foreground/60"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
    </section>
  );
}
