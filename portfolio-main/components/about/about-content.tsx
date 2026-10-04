"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Github, Linkedin, Code2, Cpu, Globe, Database, Wrench, Cloud } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter";

const techCategories = [
  {
    label: "Languages",
    icon: Code2,
    color: "from-brand-500/20 to-brand-600/10",
    border: "border-brand-500/30",
    items: ["C", "C++", "Python", "SQL", "Bash"],
  },
  {
    label: "Web",
    icon: Globe,
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/30",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  },
  {
    label: "Cloud & Data",
    icon: Cloud,
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/30",
    items: ["Google Cloud Platform", "BigQuery", "Data Pipelines"],
  },
  {
    label: "Databases",
    icon: Database,
    color: "from-green-500/20 to-green-600/10",
    border: "border-green-500/30",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "Systems",
    icon: Cpu,
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/30",
    items: ["TCP/IP Sockets", "Pthreads", "Mutex Sync", "Linux"],
  },
  {
    label: "Tools",
    icon: Wrench,
    color: "from-rose-500/20 to-rose-600/10",
    border: "border-rose-500/30",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vim"],
  },
];

const interests = [
  { emoji: "🏗️", label: "Systems Design" },
  { emoji: "🤖", label: "AI & ML" },
  { emoji: "☁️", label: "Cloud Engineering" },
  { emoji: "🌐", label: "Open Source" },
  { emoji: "📊", label: "Data Engineering" },
  { emoji: "🎯", label: "Competitive Programming" },
];

export function AboutContent() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-violet-500/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-3 font-mono text-sm text-brand-400">{"// about_me"}</p>
            <h1 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hey, I&apos;m{" "}
              <span className="gradient-text">Dev Pratap</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A Computer Science undergraduate at NIT Tiruchirapalli with a deep passion for
              building things that matter. From low-level systems programming in C++ to cloud data
              pipelines at PwC — I love exploring the full stack of technology.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand-400" />
                Chennai, India
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-brand-400" />
                NIT Tiruchirapalli
              </div>
              <a href="mailto:devpratap9089@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-brand-400">
                <Mail className="h-4 w-4 text-brand-400" />
                devpratap9089@gmail.com
              </a>
              <a href="https://github.com/9089huckleberry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-brand-400">
                <Github className="h-4 w-4 text-brand-400" />
                9089huckleberry
              </a>
              <a href="https://www.linkedin.com/in/dev-pratap-singh-a694b6366/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-brand-400">
                <Linkedin className="h-4 w-4 text-brand-400" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                My <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started coding with problem-solving — competitive programming in C and C++
                  taught me to think algorithmically and love the elegance of efficient solutions.
                  That foundation led me naturally toward systems programming and low-level computing.
                </p>
                <p>
                  As I grew, I discovered the joy of full-stack web development — building React
                  applications that users actually interact with, and Node.js backends that power
                  real services. There&apos;s something deeply satisfying about seeing an idea go from
                  concept to deployed product.
                </p>
                <p>
                  My internship at <strong className="text-foreground">PwC India</strong> opened
                  my eyes to enterprise-scale data engineering — working with Google Cloud Platform,
                  BigQuery, and production data pipelines showed me how technology drives business
                  decisions at scale.
                </p>
                <p>
                  Today, I&apos;m combining all these interests: building AI-powered applications,
                  designing scalable backend systems, and crafting modern web experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Education Card */}
              <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">B.Tech Computer Science & Engineering</h3>
                    <p className="text-sm text-muted-foreground">2022 – Present</p>
                  </div>
                </div>
                <p className="font-semibold gradient-text text-sm">
                  National Institute of Technology, Tiruchirapalli
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  NIT Trichy — one of India&apos;s premier technical institutes. Coursework spanning
                  Operating Systems, Computer Networks, DBMS, Algorithms, and more.
                </p>
              </div>

              {/* Interests */}
              <h3 className="mb-4 font-bold text-foreground">Interests & Passions</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {interests.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-muted-foreground"
                  >
                    <span>{item.emoji}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/5 to-violet-500/5 p-8 text-center"
          >
            <p className="font-mono text-sm text-brand-400 mb-3">{"// philosophy"}</p>
            <blockquote className="text-2xl font-bold text-foreground italic">
              &quot;First, solve the problem. Then, write the code.&quot;
            </blockquote>
            <p className="mt-4 text-muted-foreground">
              I believe great engineering starts with deep understanding of the problem space,
              not rushing to code. Clean, maintainable, and performant code is a craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-black tracking-tight text-foreground">
              Full Tech <span className="gradient-text">Stack</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl border bg-gradient-to-br p-5 ${cat.color} ${cat.border}`}
              >
                <div className="mb-4 flex items-center gap-2">
                  <cat.icon className="h-5 w-5 text-foreground" />
                  <h3 className="font-bold text-foreground">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-foreground border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
