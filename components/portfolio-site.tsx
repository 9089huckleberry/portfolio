"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  education,
  experience,
  navItems,
  profile,
  projects,
  resumeMeta,
  skillGroups,
} from "@/lib/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10 grid gap-3 border-b border-border pb-5 sm:grid-cols-[8rem_1fr] sm:items-end">
      <p className="eyebrow">{number}</p>
      <h2 className="serif-display text-4xl leading-none sm:text-6xl">{title}</h2>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="link-arrow text-sm"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight className="size-4" />
    </a>
  );
}

export function PortfolioSite() {
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4, 0.8] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const motionProps = reducedMotion
    ? { initial: false }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: reveal,
      };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-shell relative z-20 border-b border-border py-5 sm:py-7">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="focus-ring flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-9 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
              D/
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">
              {profile.name}
            </span>
          </a>
          <nav
            aria-label="Primary navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[4.6rem] flex-col border border-border bg-card p-3 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}
          >
            {navItems.map(({ href, label }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`focus-ring px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-opacity ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="focus-ring hidden font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground sm:inline"
              href={`mailto:${profile.email}`}
            >
              Let&apos;s talk
            </a>
            <Button
              variant="outline"
              size="icon"
              className="rounded-none md:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <div id="top" className="site-shell">
        <section className="grid gap-12 border-b border-border py-16 sm:py-24 lg:grid-cols-[1fr_20rem] lg:items-end lg:py-32">
          <motion.div
            {...motionProps}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <p className="eyebrow mb-7">
              {profile.title} / {profile.location}
            </p>
            <h1 className="serif-display text-[4.5rem] leading-[0.82] sm:text-8xl lg:text-[9.25rem]">
              Dev Pratap
              <br />
              <span className="text-muted-foreground">Singh.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<a href="#projects" />}
                nativeButton={false}
                className="rounded-none px-5"
              >
                Selected projects <ArrowDownRight />
              </Button>
              <Button
                render={<a href={resumeMeta.href} download />}
                nativeButton={false}
                variant="outline"
                className="rounded-none px-5"
              >
                Download resume <Download />
              </Button>
            </div>
          </motion.div>
          <motion.figure
            {...motionProps}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/5] w-full max-w-[20rem] justify-self-end overflow-hidden border border-border bg-card grayscale"
          >
            <Image
              src="/dev-pratap-singh.jpg"
              alt="Portrait of Dev Pratap Singh"
              fill
              priority
              sizes="(min-width: 1024px) 320px, 90vw"
              className="object-cover object-top"
            />
            <figcaption className="absolute bottom-0 left-0 border-t border-white/40 bg-black/70 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white">
              Portrait / 01
            </figcaption>
          </motion.figure>
        </section>

        <section id="about" className="border-b border-border py-16 sm:py-24">
          <SectionHeading number="01 / About" title="Clear systems. Useful software." />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              I&apos;m a software engineer based in India, studying Computer
              Science at NIT Tiruchirappalli. My work sits between reliable
              infrastructure, data, and interfaces that make technical work
              easier to use.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-l-2 border-primary pl-5">
                <p className="eyebrow">Approach</p>
                <p className="mt-3 text-xl leading-8">
                  Start with fundamentals, make the behavior observable, then
                  remove needless complexity.
                </p>
              </div>
              <div className="border-l border-border pl-5">
                <p className="eyebrow">Focus</p>
                <p className="mt-3 text-xl leading-8">
                  Data systems, networked applications, operating systems, and
                  practical product engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-b border-border py-16 sm:py-24">
          <SectionHeading number="02 / Experience" title="Learning in the work." />
          <div className="divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <motion.article
                key={item.company}
                {...motionProps}
                transition={{ duration: 0.45 }}
                className="grid gap-4 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <p className="eyebrow pt-1">{item.period}</p>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-2xl tracking-tight">{item.role}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                    {item.details}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 grid gap-4 border-t border-border pt-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <p className="eyebrow">Education</p>
            <div>
              <h3 className="text-2xl tracking-tight">{education.qualification}</h3>
              <p className="mt-2 text-muted-foreground">
                {education.institution} · {education.period}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{education.focus}</p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-border py-16 sm:py-24">
          <SectionHeading number="03 / Projects" title="Selected, not overstated." />
          <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                {...motionProps}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex min-h-[19rem] flex-col bg-background p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="serif-display mt-12 text-4xl leading-none">{project.title}</h3>
                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5">
                  {project.stack.map((item) => (
                    <span key={item} className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            More work and source links are available on{" "}
            <a className="underline underline-offset-4 hover:text-foreground" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </section>

        <section className="border-b border-border py-16 sm:py-24">
          <SectionHeading number="04 / Skills" title="The working vocabulary." />
          <div className="divide-y divide-border border-y border-border">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid gap-4 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <p className="eyebrow">{group.label}</p>
                <p className="text-lg leading-8">{group.items.join("  /  ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="eyebrow">05 / Contact</p>
            <h2 className="serif-display mt-5 max-w-3xl text-6xl leading-[0.86] sm:text-8xl">
              Let&apos;s build something clear.
            </h2>
            <a
              className="link-arrow mt-8 text-lg"
              href={`mailto:${profile.email}`}
            >
              {profile.email} <Mail className="size-4" />
            </a>
          </div>
          <div className="border-t border-border pt-6 lg:mt-auto">
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-5 flex flex-col gap-4">
              <ExternalLink href={profile.github}><Github /> GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}><Linkedin /> LinkedIn</ExternalLink>
              <a className="link-arrow text-sm" href={resumeMeta.href} download>
                <Download /> Resume <span className="text-muted-foreground">({resumeMeta.pages})</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-border">
        <div className="site-shell flex flex-col gap-3 py-6 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Next.js / Motion / Base UI</p>
        </div>
      </footer>
    </main>
  );
}
