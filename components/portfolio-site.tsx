"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  SunMedium,
  X,
} from "lucide-react";
import { experience, navItems, profile, projects, resumeMeta, skills } from "@/lib/portfolio";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: string }) {
  return <div className="soft-label mb-5 text-[#d7d0c8]">{children}</div>;
}

export function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#121212] text-[#f2eee7]">
      <div className="site-shell">
        <header className="pt-5 sm:pt-7">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2eee7] text-lg font-bold text-[#121212] serif-display">
                D
              </div>
              <div className="serif-display text-3xl leading-none text-[#f2eee7]">{profile.name}</div>
            </a>

            <nav
              className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[73px] flex-col gap-2 rounded-[28px] border border-white/10 bg-[#181818] p-3 shadow-2xl shadow-black/30 md:static md:flex md:flex-row md:items-center md:gap-3 md:rounded-full md:border-transparent md:bg-[#1d1d1d] md:p-2`}
            >
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium text-[#ede7df] transition hover:bg-white/5 ${href === "#home" ? "bg-white/10" : ""}`}
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-2 rounded-full bg-[#f2eee7] px-4 py-2.5 text-sm font-medium text-[#121212] transition hover:bg-white md:inline-flex"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#7bc9b3]" />
              Get in touch
            </a>

            <button
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1d1d1d] md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </header>

        <section id="home" className="pb-10 pt-8 sm:pt-14">
          <div className="mb-8 flex items-center gap-3 text-[#d7d0c8]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7bc9b3] shadow-[0_0_0_7px_rgba(123,201,179,0.12)]" />
            <span className="soft-label text-[0.66rem] text-[#d7d0c8]">Software engineer · India</span>
          </div>

          <div className="flex items-start justify-between gap-6">
            <motion.div initial="hidden" animate="show" variants={fadeIn} transition={{ duration: 0.45 }} className="max-w-5xl">
              <h1 className="serif-display text-[4.5rem] leading-[0.8] tracking-[-0.06em] text-[#f2eee7] sm:text-[6.2rem] lg:text-[7.2rem]">
                <span className="block">Dev</span>
                <span className="block text-[#f2eee7]">Pratap</span>
                <span className="block text-[#d96f48]">Singh.</span>
              </h1>
            </motion.div>

            <button
              aria-label="Theme toggle"
              className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#1d1d1d] text-[#f2eee7] md:flex"
            >
              <SunMedium className="h-5 w-5" />
            </button>
          </div>
        </section>

        <section id="about" className="py-10 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeIn} transition={{ duration: 0.45 }} className="overflow-hidden rounded-[30px] border border-white/8 bg-[#1b1b1d] p-4 shadow-[0_20px_35px_rgba(0,0,0,0.25)]">
              <div className="flex h-[420px] items-end rounded-[24px] bg-[radial-gradient(circle_at_30%_20%,rgba(217,111,72,0.22),transparent_28%),radial-gradient(circle_at_75%_15%,rgba(123,201,179,0.12),transparent_30%),linear-gradient(135deg,#1b1b1d,#0e0f10_52%,#17191a)] p-6">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#f2eee7]/15 bg-[#121212] text-4xl font-medium text-[#f2eee7] serif-display">
                  D
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} transition={{ duration: 0.45 }} className="rounded-[30px] border border-white/8 bg-[#1a1a1b] p-7 sm:p-8">
              <SectionLabel>About</SectionLabel>
              <p className="max-w-xl text-[1.08rem] leading-8 text-[#d7d0c8]">
                I am a Software Engineer based in India, building reliable systems and high-impact software with care for performance, clarity, and maintainability.
              </p>
              <p className="mt-5 max-w-xl text-[1.08rem] leading-8 text-[#d7d0c8]">
                My focus sits at the intersection of systems programming, networking, concurrency, distributed software, and cloud-enabled analytics, with a strong interest in solving problems at the infrastructure layer.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-[#121212] p-4">
                  <div className="soft-label text-[0.62rem] text-[#d7d0c8]">Education</div>
                  <div className="mt-3 text-lg font-medium text-[#f2eee7]">NIT Tiruchirappalli</div>
                  <div className="mt-2 text-sm text-[#d7d0c8]">B.Tech in Computer Science & Engineering</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-[#121212] p-4">
                  <div className="soft-label text-[0.62rem] text-[#d7d0c8]">Focus</div>
                  <div className="mt-3 text-lg font-medium text-[#f2eee7]">Systems & data</div>
                  <div className="mt-2 text-sm text-[#d7d0c8]">Concurrency, networking, performance, cloud analytics</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="py-10 sm:py-16">
          <SectionLabel>Experience</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-2">
            {experience.map((item, index) => (
              <motion.article key={item.role} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-[28px] border border-white/8 bg-[#1a1a1b] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <div className="soft-label text-[0.58rem] text-[#d7d0c8]">{item.period}</div>
                    <h3 className="mt-2 text-2xl font-medium text-[#f2eee7]">{item.role}</h3>
                  </div>
                  <MapPin className="h-4 w-4 text-[#d96f48]" />
                </div>
                <div className="mt-4 text-lg text-[#f2eee7]">{item.company}</div>
                <p className="mt-4 leading-7 text-[#d7d0c8]">{item.details}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-10 sm:py-16">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} transition={{ duration: 0.45, delay: index * 0.06 }} className="group rounded-[30px] border border-white/8 bg-[#1a1a1b] p-5">
                <div className={`rounded-[22px] border border-white/8 bg-gradient-to-br ${project.accent} p-4`}>
                  <div className="soft-label text-[0.58rem] text-[#d7d0c8]">{project.category}</div>
                  <h3 className="mt-5 text-3xl text-[#f2eee7] serif-display">{project.title}</h3>
                </div>

                <p className="mt-5 text-[0.98rem] leading-7 text-[#d7d0c8]">{project.description}</p>

                <div className="mt-5 rounded-2xl border border-white/8 bg-[#121212] p-3">
                  <div className="soft-label text-[0.56rem] text-[#d7d0c8]">Outcome</div>
                  <p className="mt-2 text-sm leading-6 text-[#f2eee7]">{project.outcome}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/8 bg-[#121212] px-2.5 py-1 text-[11px] text-[#d7d0c8]">
                      {item}
                    </span>
                  ))}
                </div>

                <a href={profile.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#f2eee7] transition group-hover:text-[#d96f48]">
                  View repository <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="uses" className="py-10 sm:py-16">
          <SectionLabel>Uses</SectionLabel>
          <div className="rounded-[28px] border border-white/8 bg-[#1a1a1b] p-6 sm:p-7">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/8 bg-[#121212] px-3 py-2 text-sm text-[#d7d0c8]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-white/8 bg-[#1a1a1b] p-6 sm:p-7">
              <div className="soft-label text-[0.58rem] text-[#d7d0c8]">Resume</div>
              <h3 className="mt-4 serif-display text-4xl text-[#f2eee7]">The long version, printable.</h3>
              <p className="mt-3 text-[#d7d0c8]">{resumeMeta.pages} · {resumeMeta.updated}</p>
              <a href="/resume.pdf" download className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f2eee7] px-4 py-2.5 text-sm font-medium text-[#121212] transition hover:bg-white">
                Download resume <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[30px] border border-[#d96f48]/25 bg-[#1b1b1d] p-6 sm:p-7">
              <div className="soft-label text-[0.58rem] text-[#d7d0c8]">Contact</div>
              <div className="mt-4 flex items-center gap-3 text-[#f2eee7]">
                <Mail className="h-5 w-5 text-[#d96f48]" />
                <a href={`mailto:${profile.email}`} className="text-lg hover:text-[#d96f48]">{profile.email}</a>
              </div>
              <div className="mt-5 flex items-center gap-3 text-[#f2eee7]">
                <Github className="h-5 w-5 text-[#d96f48]" />
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-lg hover:text-[#d96f48]">github.com/9089huckleberry</a>
              </div>
              <div className="mt-5 flex items-center gap-3 text-[#f2eee7]">
                <Linkedin className="h-5 w-5 text-[#d96f48]" />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-lg hover:text-[#d96f48]">linkedin.com/in/dev-pratap-singh</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/8 py-7">
        <div className="site-shell flex flex-col gap-4 text-sm text-[#d7d0c8] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[#d96f48]">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#d96f48]">LinkedIn</a>
            <a href="/resume.pdf" download className="hover:text-[#d96f48]">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}