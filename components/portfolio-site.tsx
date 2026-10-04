"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Database,
  Download,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import {
  achievements,
  certifications,
  education,
  experience,
  navItems,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio";

const systemStatus = [
  { label: "status", value: "online" },
  { label: "focus", value: "systems software" },
  { label: "stack", value: "C++ · GCP · Linux" },
  { label: "location", value: "India" },
];

function SectionHeading({ number, title, copy }: { number: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow">{number} / {title}</p>
      <h2 className="font-mono text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{copy}</p>}
    </div>
  );
}

export function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bg-[#040b16] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
        <div className="shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 font-mono text-sm font-bold text-cyan-300">
              DPS
            </span>
            <div className="hidden sm:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">dev</div>
              <div className="text-sm font-semibold text-slate-100">{profile.name}</div>
            </div>
          </a>

          <nav
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[78px] flex-col gap-1 border-b border-slate-800 bg-slate-950/95 p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-md px-2 py-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 transition hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-500/15 md:ml-2"
            >
              Resume <Download className="h-3.5 w-3.5" />
            </a>
          </nav>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md border border-slate-700 p-2 text-slate-200 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_25%)]" />
        <div className="shell relative grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.15)]" />
              system initialized
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Dev Pratap Singh
            </h1>

            <div className="mt-4 flex items-center gap-3 font-mono text-sm text-slate-300">
              <Terminal className="h-4 w-4 text-cyan-300" />
              <span>Software Engineer</span>
            </div>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Building reliable systems for high-throughput data, concurrent services, and low-level performance-critical software.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300">
                View Projects <ArrowDown className="h-4 w-4" />
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">
                Download Resume <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-300">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-300">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-cyan-300">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/20 bg-cyan-500/5 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-950/20">
              <div className="mb-4 flex items-center justify-between border-b border-slate-800 px-2 pb-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">profile.ts</div>
              </div>

              <div className="grid gap-4 rounded-2xl border border-slate-800 bg-[#081420] p-4 sm:grid-cols-[120px_1fr]">
                <div className="flex items-center justify-center rounded-2xl border border-cyan-500/20 bg-[radial-gradient(circle_at_top,#1f3b65,#0a1524_58%)] p-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 text-3xl font-bold text-cyan-300">
                    DPS
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">engineer profile</div>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Systems software engineer</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Multithreading • networking • concurrency • distributed systems • high-performance software.
                  </p>

                  <div className="mt-5 grid gap-2 text-xs text-slate-300">
                    {systemStatus.map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
                        <span className="font-mono uppercase tracking-[0.18em] text-slate-400">{item.label}</span>
                        <span className="font-mono capitalize text-cyan-300">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="shell py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading number="01" title="About" copy="Systems software engineer focused on concurrency, networking, distributed systems, and performance-oriented engineering." />

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="space-y-6 rounded-[1.75rem] border border-slate-800 bg-slate-900/60 p-7 text-base leading-8 text-slate-300 sm:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">whoami</div>
            <p>
              I am a Computer Science and Engineering student at <span className="font-semibold text-white">NIT Tiruchirappalli</span>, with a strong interest in the systems layer where reliability, performance, and maintainability matter most.
            </p>
            <p>
              My work spans multithreading, object-oriented design, networking, service integration, and cloud-driven analytics. I care deeply about clean interfaces, predictable behavior, and engineering decisions that reduce complexity while preserving throughput.
            </p>
            <p>
              Through my internship at PwC India, I also developed practical experience in data engineering and cloud analytics, turning large operational datasets into usable, decision-friendly workflows.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-200"><Cpu className="h-3.5 w-3.5 text-cyan-300" /> systems</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-200"><Network className="h-3.5 w-3.5 text-cyan-300" /> networking</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-200"><Database className="h-3.5 w-3.5 text-cyan-300" /> data</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="bg-slate-950/80 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading number="02" title="Skills" copy="A focused stack built around systems thinking, performance, and reliable software engineering." />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[1.6rem] border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 font-mono text-[10px] text-cyan-300">
                    0{index + 1}
                  </span>
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-200">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="shell py-24 sm:py-28">
        <SectionHeading number="03" title="Experience" copy="Applying systems thinking to cloud analytics, data pipelines, and performance-sensitive software." />

        <div className="space-y-8">
          {experience.map((item) => (
            <motion.article key={item.role} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-800 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">{item.period}</div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-2 text-slate-300">{item.company}</p>
                </div>
                <div className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                  {item.title}
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-slate-950/80 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading number="04" title="Projects" copy="High-signal systems work with a strong emphasis on performance, observability, and engineering depth." />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="flex h-full flex-col rounded-[1.7rem] border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">{project.tag}</span>
                  <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                </div>

                <div className={`mb-6 rounded-2xl border p-4 ${project.accent === "cyan" ? "border-cyan-500/30 bg-cyan-500/10" : project.accent === "violet" ? "border-violet-500/30 bg-violet-500/10" : "border-amber-500/25 bg-amber-500/10"}`}>
                  <FolderGit2 className="mb-3 h-8 w-8 text-cyan-300" />
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">outcome</div>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{project.outcome}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[11px] text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2 text-sm text-slate-300">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300 transition hover:text-cyan-200">
                    View repository <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="shell py-24 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="rounded-[1.8rem] border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">{education.period}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-2 text-slate-300">{education.school}</p>
            <p className="mt-5 leading-7 text-slate-300">{education.details}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-[1.8rem] border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">
              <Sparkles className="h-4 w-4" />
              achievements
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="certifications" className="bg-slate-950/80 py-24 sm:py-28">
        <div className="shell">
          <SectionHeading number="05" title="Certifications" copy="Practical, industry-aligned experience in cloud analytics, systems engineering, and data-heavy software delivery." />
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="leading-7">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="shell py-24 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-cyan-500/30 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_32%),linear-gradient(135deg,#0b1729,#0f2136)] p-7 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">06 / contact</div>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Let&apos;s build the next reliable system.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-300">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/80 py-7">
        <div className="shell flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built for performance and clarity.</p>
          <div className="flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn</a>
            <a href="/resume.pdf" download className="hover:text-cyan-300">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}