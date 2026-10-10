"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmeringText } from "@/components/shimmering-text";
import { experience, navItems, profile, projects, resumeMeta, skills } from "@/lib/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="serif-display mt-3 max-w-xl text-4xl leading-none tracking-[-0.045em] text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      <div className="hidden h-px w-24 bg-border sm:block" />
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-arrow">
      {children}
      <ArrowUpRight className="size-3.5" />
    </a>
  );
}

export function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(217,111,72,0.12),transparent_28%),radial-gradient(circle_at_12%_35%,rgba(123,201,179,0.06),transparent_24%)]" />

      <header className="site-shell relative z-20 pt-5 sm:pt-8">
        <div className="flex items-center justify-between border-b border-border/70 pb-5">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary font-semibold text-primary-foreground transition-transform group-hover:rotate-6">
              D
            </span>
            <span className="text-sm font-semibold tracking-tight sm:text-base">{profile.name}</span>
          </a>

          <nav
            aria-label="Primary navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[76px] flex-col gap-1 rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-black/20 md:static md:flex md:flex-row md:items-center md:gap-1 md:rounded-full md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              render={<a href={`mailto:${profile.email}`} />}
              nativeButton={false}
              size="sm"
              className="hidden rounded-full px-4 sm:inline-flex"
            >
              Let&apos;s talk
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full md:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <div className="site-shell">
        <section id="home" className="relative border-b border-border/70 py-16 sm:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.44fr] lg:items-end">
            <motion.div initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.55 }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
                <ShimmeringText
                  text="Available for thoughtful software work"
                  duration={2.8}
                  className="[--color:var(--muted-foreground)] [--shimmering-color:var(--foreground)]"
                />
              </div>
              <p className="eyebrow mb-5">{profile.title} · {profile.location}</p>
              <h1 className="serif-display max-w-4xl text-[4.25rem] leading-[0.82] tracking-[-0.065em] sm:text-8xl lg:text-[9.5rem]">
                Building <span className="text-accent">systems</span>
                <br />
                that stay clear.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {profile.intro} I care about the quiet details: predictable behavior, useful abstractions, and software that earns trust.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button render={<a href="#projects" />} nativeButton={false} className="rounded-full px-5">
                  Explore selected work <MoveUpRight />
                </Button>
                <Button render={<a href="/resume.pdf" download />} nativeButton={false} variant="outline" className="rounded-full px-5">
                  Download resume <Download />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden aspect-square max-w-[300px] justify-self-end overflow-hidden rounded-[2rem] border border-border bg-card p-5 lg:flex"
            >
              <div className="absolute inset-5 rounded-[1.35rem] border border-border/80 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
              <div className="relative m-auto flex size-36 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                <span className="serif-display text-7xl text-accent">D</span>
              </div>
              <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">01 / 04</span>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-b border-border/70 py-16 sm:py-24">
          <SectionHeading eyebrow="01 — About" title="A systems mind with a product eye." />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              I&apos;m a software engineer based in India, studying Computer Science at NIT Tiruchirappalli and building at the intersection of infrastructure, data, and thoughtful interfaces.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-l border-accent pl-5">
                <p className="eyebrow">What I bring</p>
                <p className="mt-3 text-lg leading-7">Deep systems fundamentals, a bias for measurement, and an instinct for making complex work understandable.</p>
              </div>
              <div className="border-l border-border pl-5">
                <p className="eyebrow">Currently exploring</p>
                <p className="mt-3 text-lg leading-7">Concurrency, networking, distributed software, and cloud analytics that scale without losing clarity.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-border/70 py-16 sm:py-24">
          <SectionHeading eyebrow="02 — Experience" title="Where I&apos;ve been learning in public." />
          <div className="divide-y divide-border rounded-2xl border border-border bg-card/40">
            {experience.map((item, index) => (
              <motion.article
                key={item.role}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-4 p-5 sm:grid-cols-[0.28fr_0.72fr] sm:p-7"
              >
                <div className="eyebrow pt-1">{item.period}</div>
                <div>
                  <p className="text-sm font-medium text-accent">{item.company}</p>
                  <h3 className="mt-1 text-2xl tracking-tight">{item.role}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{item.details}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-b border-border/70 py-16 sm:py-24">
          <SectionHeading eyebrow="03 — Selected work" title="Projects with a point of view." />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/20"
              >
                <div className={`relative flex aspect-[1.18] items-end overflow-hidden rounded-xl border border-border/70 bg-gradient-to-br ${project.accent} p-5`}>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />
                  <div className="relative">
                    <p className="eyebrow">{project.category}</p>
                    <h3 className="serif-display mt-2 text-4xl tracking-[-0.04em]">{project.title}</h3>
                  </div>
                  <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-border bg-background/30 transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">Result</p>
                  <p className="mt-2 text-sm leading-6">{project.outcome}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">{item}</span>
                  ))}
                </div>
                <ExternalLink href={profile.github}>View repository</ExternalLink>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="uses" className="border-b border-border/70 py-16 sm:py-24">
          <SectionHeading eyebrow="04 — Toolkit" title="The tools behind the work." />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-border bg-card px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/70 hover:text-foreground">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-7 sm:p-10">
              <p className="eyebrow text-accent">05 — Next chapter</p>
              <h2 className="serif-display mt-5 max-w-xl text-5xl leading-[0.9] tracking-[-0.05em] sm:text-7xl">Let&apos;s make something durable.</h2>
              <p className="mt-6 max-w-lg leading-7 text-muted-foreground">Have a systems challenge, a product to shape, or simply a good problem to think through? I&apos;d like to hear about it.</p>
              <Button render={<a href={`mailto:${profile.email}`} />} nativeButton={false} className="mt-8 rounded-full px-5">
                Start a conversation <Mail />
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-10">
              <p className="eyebrow">Elsewhere</p>
              <div className="mt-6 space-y-4">
                <ExternalLink href={profile.github}><Github /> GitHub</ExternalLink>
                <ExternalLink href={profile.linkedin}><Linkedin /> LinkedIn</ExternalLink>
                <a href="/resume.pdf" download className="link-arrow"><Download /> Resume <span className="ml-auto text-xs text-muted-foreground">{resumeMeta.pages}</span></a>
              </div>
              <div className="mt-10 border-t border-border pt-5 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> Open to meaningful opportunities</p>
                <p className="mt-2">{profile.email}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border">
        <div className="site-shell flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Designed for clarity · Built with Next.js and Bklit UI</p>
        </div>
      </footer>
    </main>
  );
}
