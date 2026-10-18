import { ArrowUpRight, Github } from "lucide-react";
import { Terminal } from "@/components/terminal/terminal";
import { Reveal } from "@/components/ui/reveal";
import { about, education, experience, profile, projects, skillGroups } from "@/data/portfolio";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-24">
      <Reveal>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

const li = "list-disc pl-1 marker:text-muted";
const chip = "rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted";

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal>
        <p className="max-w-2xl text-lg leading-8">{about}</p>
      </Reveal>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-card p-5">
              <h3 className="eyebrow mb-3">{g.label}</h3>
              <p className="text-sm leading-7">{g.items.join(" · ")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="rounded-xl border border-border bg-card p-6 transition duration-200 hover:-translate-y-0.5 hover:border-muted sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="max-w-2xl text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-muted">{p.period}</p>
              </div>
              <ul className="mt-4 grid gap-2 pl-4 text-sm leading-7">
                {p.bullets.map((b) => <li key={b} className={li}>{b}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tech.map((t) => <li key={t} className={chip}>{t}</li>)}
                </ul>
                <a className="group inline-flex min-h-11 items-center gap-1 text-sm underline-offset-4 hover:underline" href={p.github} target="_blank" rel="noreferrer">
                  <Github className="size-4" /> GitHub
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((e) => (
        <Reveal key={e.company}>
          <article className="grid gap-4 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="text-sm text-muted">{e.period}</p>
              <p className="mt-1 text-sm text-muted">{e.company}, {e.location}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-semibold">{e.role}</h3>
              <ul className="mt-4 grid gap-3 pl-4 text-sm leading-7">
                {e.bullets.map((b) => <li key={b} className={li}>{b}</li>)}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <Reveal>
        <article className="grid gap-4 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-sm text-muted">{education.period}</p>
            <p className="mt-1 text-sm text-muted">{education.location}</p>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.institution} · {education.cgpa}</p>
            <h4 className="eyebrow mb-2 mt-6">Certifications</h4>
            <ul className="grid gap-2 pl-4 text-sm leading-7">
              {education.certifications.map((c) => <li key={c} className={li}>{c}</li>)}
            </ul>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

export function TerminalSection({ hasResume }: { hasResume: boolean }) {
  return (
    <Section id="terminal" title="Terminal">
      <Reveal>
        <Terminal hasResume={hasResume} />
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const a = "w-fit underline underline-offset-4 hover:text-accent";
  return (
    <Section id="contact" title="Contact">
      <Reveal className="flex flex-col gap-1 text-lg">
        <a className={a} href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className={a} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className={a} href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </Reveal>
    </Section>
  );
}
