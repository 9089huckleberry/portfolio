import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { assets, profile } from "@/data/portfolio";

export const btn =
  "inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-card";

export function Hero({ hasResume, hasPhoto }: { hasResume: boolean; hasPhoto: boolean }) {
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <section id="top" className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-12">
      <Reveal className="md:col-span-8">
        <p className="eyebrow mb-4">{profile.title}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">{profile.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className={`${btn} border-accent bg-accent text-accent-foreground hover:bg-accent`} href="#projects">
            View projects <ArrowDown className="size-4" />
          </a>
          {hasResume && (
            <a className={btn} href={assets.resume} download>
              <Download className="size-4" /> Resume
            </a>
          )}
          <a className={btn} href={profile.github} target="_blank" rel="noreferrer">
            <Github className="size-4" /> GitHub
          </a>
          <a className={btn} href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a className={btn} href={`mailto:${profile.email}`}>
            <Mail className="size-4" /> Email
          </a>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="md:col-span-4">
        {hasPhoto ? (
          <Image
            src={assets.photo}
            alt={`Portrait of ${profile.name}`}
            width={320}
            height={400}
            priority
            sizes="(min-width: 768px) 320px, 176px"
            className="aspect-[4/5] w-44 rounded-xl border border-border object-cover md:w-full md:max-w-xs md:justify-self-end"
          />
        ) : (
          <div
            aria-hidden
            className="flex aspect-[4/5] w-44 items-center justify-center rounded-xl border border-border bg-card text-5xl font-semibold text-muted md:w-full md:max-w-xs"
          >
            {initials}
          </div>
        )}
      </Reveal>
    </section>
  );
}
