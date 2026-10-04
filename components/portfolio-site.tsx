"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Sparkles,
  X,
} from "lucide-react";
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const navItems = [
  ["about", "About"],
  ["work", "Work"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

function SectionHeading({ number, title, copy }: { number: string; title: string; copy?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">
        {number} / {title}
      </p>
      <h2 className="display-font text-4xl leading-tight sm:text-5xl">{title}</h2>
      {copy && <p className="mt-4 max-w-xl text-base leading-7 text-[#647089]">{copy}</p>}
    </div>
  );
}

export function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e3e7ef]/80 bg-[#f7f8fb]/90 backdrop-blur-xl">
        <div className="section-shell flex h-[72px] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172033] text-sm font-bold text-white transition-transform group-hover:rotate-6">
              D
            </span>
            <span className="hidden text-sm font-bold tracking-tight sm:block">{profile.name}</span>
          </a>
          <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col gap-1 border-b border-[#e3e7ef] bg-[#f7f8fb] p-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            {navItems.map(([href, label]) => (
              <a key={href} href={`#${href}`} onClick={closeMenu} className="rounded-md px-2 py-2 text-sm font-semibold text-[#647089] transition-colors hover:text-[#2756e8]">
                {label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#2756e8] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#2756e8]/20 transition hover:-translate-y-0.5 hover:bg-[#1d46ca] md:mt-0">
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
          <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 md:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <section id="top" className="grid-paper relative flex min-h-[720px] items-center pt-28">
        <div className="pointer-events-none absolute -right-48 top-24 h-[520px] w-[520px] rounded-full bg-[#2756e8]/10 blur-3xl" />
        <div className="section-shell relative grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="mb-6 flex items-center gap-2 text-sm font-bold text-[#ec7b45]">
              <span className="h-2 w-2 rounded-full bg-[#ec7b45] shadow-[0_0_0_5px_rgba(236,123,69,0.12)]" />
              Available for thoughtful opportunities
            </p>
            <h1 className="display-font max-w-3xl text-6xl leading-[0.95] tracking-[-0.04em] sm:text-8xl">
              {profile.name.split(" ")[0]} builds <span className="text-[#2756e8]">with intent.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#647089]">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[#2756e8] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#2756e8]/20 transition hover:-translate-y-1 hover:bg-[#1d46ca]">
                Explore my work <ArrowDown className="h-4 w-4" />
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-[#cfd6e3] bg-white px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 hover:border-[#2756e8] hover:text-[#2756e8]">
                Download resume <Download className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-[#647089]">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#2756e8]" />{profile.location}</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold hover:text-[#2756e8]"><Github className="h-4 w-4" /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold hover:text-[#2756e8]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-[#2756e8]/15" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#172033] p-8 text-white shadow-2xl shadow-[#172033]/20">
              <div className="mb-16 flex items-center justify-between text-xs text-white/50"><span>DEV / 2024</span><Code2 className="h-5 w-5 text-[#71a0ff]" /></div>
              <p className="font-mono text-sm leading-7 text-[#aab9d7]">&lt;building /&gt;</p>
              <p className="mt-2 text-3xl font-bold leading-tight">Systems that are<br /><span className="text-[#71a0ff]">clear, useful,</span><br />and built to last.</p>
              <div className="mt-16 flex items-end justify-between"><span className="text-xs text-white/50">scroll to explore</span><MousePointer2 className="h-5 w-5 animate-bounce text-[#ec7b45]" /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-shell grid gap-12 py-24 sm:py-32 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading number="01" title="A little about me." copy="Curious by default, deliberate by practice." />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="space-y-6 text-lg leading-8 text-[#647089]">
          <p>I’m a computer science undergraduate at <strong className="text-[#172033]">NIT Tiruchirappalli</strong>, interested in the space where product thinking meets engineering depth.</p>
          <p>Whether I’m shaping a clean interface, building a concurrent server, or making a data workflow more dependable, I care about the details that make technology feel effortless for the people using it.</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#2756e8] hover:gap-3 transition-all">Let&apos;s build something meaningful <ChevronRight className="h-4 w-4" /></a>
        </motion.div>
      </section>

      <section id="work" className="bg-white py-24 sm:py-32">
        <div className="section-shell">
          <SectionHeading number="02" title="Selected work." copy="A few projects that show how I think, build, and learn." />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...(fadeUp.visible.transition as { duration?: number }), delay: index * 0.08 } } }} className="group flex flex-col rounded-2xl border border-[#e3e7ef] bg-[#f7f8fb] p-6 transition-all hover:-translate-y-2 hover:border-[#2756e8]/30 hover:shadow-xl hover:shadow-[#172033]/5">
                <div className={`mb-12 flex h-40 items-end justify-between rounded-xl p-5 ${project.accent === "blue" ? "bg-[#dfe8ff]" : project.accent === "orange" ? "bg-[#ffeadf]" : "bg-[#dfe3eb]"}`}>
                  <span className="text-xs font-black tracking-[0.18em] text-[#172033]/60">{project.label}</span>
                  <span className="display-font text-6xl text-[#172033]/15">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#647089]">{project.description}</p>
                <p className="mt-5 flex items-start gap-2 text-sm font-bold text-[#172033]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2756e8]" />{project.outcome}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#647089]">{item}</span>)}</div>
                <div className="mt-7 flex gap-4 border-t border-[#e3e7ef] pt-5 text-sm font-bold">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#2756e8]"><Github className="h-4 w-4" /> Repository</a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#2756e8]"><ArrowUpRight className="h-4 w-4" /> Live demo</a>}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell py-24 sm:py-32">
        <SectionHeading number="03" title="The toolkit." copy="Technologies I use to turn an idea into a dependable result." />
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div key={group.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl border border-[#e3e7ef] bg-white p-7">
              <p className="mb-6 flex items-center gap-3 text-sm font-bold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0ff] text-xs text-[#2756e8]">0{index + 1}</span>{group.label}</p>
              <div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-lg border border-[#e3e7ef] px-3 py-2 text-sm font-semibold text-[#647089] transition hover:border-[#2756e8] hover:text-[#2756e8]">{item}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-[#172033] py-24 text-white sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow !text-[#71a0ff] before:!bg-[#71a0ff]">04 / experience</p><h2 className="display-font text-4xl sm:text-5xl">Where I&apos;ve<br /><span className="text-[#71a0ff]">made an impact.</span></h2></div>
          <div className="space-y-12">
            {experience.map((item) => <div key={item.role} className="border-l border-white/20 pl-6"><p className="mb-2 text-sm font-bold text-[#71a0ff]">{item.period}</p><h3 className="text-2xl font-bold">{item.role}</h3><p className="mt-1 text-[#aab9d7]">{item.company}</p><ul className="mt-6 space-y-3 text-sm leading-6 text-[#c6cee0]">{item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ec7b45]" />{point}</li>)}</ul></div>)}
            <div className="border-l border-white/20 pl-6"><p className="mb-2 text-sm font-bold text-[#71a0ff]">{education.period}</p><h3 className="text-2xl font-bold">{education.degree}</h3><p className="mt-1 text-[#aab9d7]">{education.school}</p><p className="mt-5 text-sm leading-6 text-[#c6cee0]">{education.details}</p></div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div><SectionHeading number="05" title="Proof points." copy="The outcomes and interests I bring into a team." /><div className="grid grid-cols-3 gap-3">{achievements.map((item) => <div key={item.value} className="border-t-2 border-[#2756e8] pt-4"><p className="text-2xl font-black sm:text-3xl">{item.value}</p><p className="mt-2 text-xs leading-5 text-[#647089]">{item.label}</p></div>)}</div></div>
          <div className="rounded-2xl bg-[#eaf0ff] p-7 sm:p-9"><div className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-[#2756e8]" /><h3 className="text-lg font-bold">Certifications & achievements</h3></div><ul className="mt-7 space-y-4">{certifications.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#405070]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#2756e8]" />{item}</li>)}</ul></div>
        </div>
      </section>

      <section id="contact" className="bg-[#ec7b45] py-24 sm:py-32">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-white/70">06 / contact</p><h2 className="display-font max-w-2xl text-5xl leading-tight text-white sm:text-7xl">Have a good problem?<br />Let&apos;s talk.</h2><p className="mt-6 max-w-lg text-base leading-7 text-white/80">I&apos;m open to internships, full-time roles, and conversations about building better software.</p></div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 self-start rounded-full bg-white px-6 py-4 text-sm font-bold text-[#172033] transition hover:-translate-y-1 hover:shadow-xl lg:self-end"><Mail className="h-5 w-5 text-[#ec7b45]" /> {profile.email}</a>
        </div>
      </section>

      <footer className="bg-[#172033] py-8 text-white">
        <div className="section-shell flex flex-col gap-5 text-sm text-[#aab9d7] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with care.</p>
          <div className="flex items-center gap-5"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a><a href="#top" className="flex items-center gap-2 font-bold hover:text-white">Back to top <ArrowUpRight className="h-4 w-4" /></a></div>
        </div>
      </footer>
    </main>
  );
}
