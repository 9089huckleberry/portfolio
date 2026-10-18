"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { assets, about, education, experience, profile, projects, skillGroups } from "@/data/portfolio";

const PROMPT = "guest@dev:~$";
const link = "text-sky-300 underline underline-offset-2 break-all";

const text = (items: string[]) => items.map((l, i) => <div key={i}>{l}</div>);

// Simulated terminal: commands only map to the static output below, nothing is executed.
export function Terminal({ hasResume }: { hasResume: boolean }) {
  const commands: Record<string, { desc: string; run: () => ReactNode }> = {
    help: {
      desc: "list commands",
      run: () => (
        <>
          {[...Object.entries(commands).map(([n, c]) => [n, c.desc]), ["clear", "clear the screen"]].map(([n, d]) => (
            <div key={n} className="flex gap-3">
              <span className="w-24 shrink-0 text-emerald-300">{n}</span>
              <span>{d}</span>
            </div>
          ))}
        </>
      ),
    },
    whoami: { desc: "who I am", run: () => text([`${profile.name} — ${profile.title}`, profile.subtitle]) },
    about: { desc: "short bio", run: () => text([about]) },
    skills: {
      desc: "technical skills",
      run: () => skillGroups.map((g) => <div key={g.label}><span className="text-emerald-300">{g.label}:</span> {g.items.join(", ")}</div>),
    },
    projects: {
      desc: "selected projects",
      run: () =>
        projects.map((p) => (
          <div key={p.title} className="mb-2">
            <div>• {p.title} <span className="opacity-70">({p.period})</span></div>
            <div className="pl-3 opacity-80">{p.tech.join(", ")}</div>
            <a className={`${link} pl-3`} href={p.github} target="_blank" rel="noreferrer">{p.github}</a>
          </div>
        )),
    },
    experience: {
      desc: "work experience",
      run: () =>
        experience.map((e) => (
          <div key={e.company}>
            <div>{e.role} — {e.company}, {e.location} ({e.period})</div>
            {e.bullets.map((b, i) => <div key={i} className="pl-3">- {b}</div>)}
          </div>
        )),
    },
    education: {
      desc: "education & certifications",
      run: () =>
        text([
          `${education.degree} — ${education.institution}`,
          `${education.period} | ${education.cgpa}`,
          ...education.certifications.map((c) => `Certification: ${c}`),
        ]),
    },
    resume: {
      desc: "download resume",
      run: () =>
        hasResume ? (
          <a className={link} href={assets.resume} download>Download resume (PDF)</a>
        ) : (
          "Resume is not available yet."
        ),
    },
    contact: {
      desc: "contact links",
      run: () => (
        <>
          <div>Email: <a className={link} href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div>GitHub: <a className={link} href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></div>
          <div>LinkedIn: <a className={link} href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></div>
        </>
      ),
    },
  };

  const [log, setLog] = useState<{ cmd: string; out: ReactNode }[]>([{ cmd: "help", out: commands.help.run() }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setCursor(-1);
    if (cmd === "clear") return setLog([]);
    const found = Object.hasOwn(commands, cmd) ? commands[cmd] : undefined;
    setLog((l) => [
      ...l,
      { cmd, out: found ? found.run() : `command not found: ${cmd}. Type "help" to list commands.` },
    ]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = cursor < 0 ? history.length - 1 : Math.max(0, cursor - 1);
      setCursor(i);
      setValue(history[i]);
    } else if (e.key === "ArrowDown" && cursor >= 0) {
      e.preventDefault();
      const i = cursor + 1;
      setCursor(i >= history.length ? -1 : i);
      setValue(i >= history.length ? "" : history[i]);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLog([]);
    }
  }

  const chips = [...Object.keys(commands), "clear"];

  // Always dark so it stays readable in both themes.
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-sm text-zinc-200 shadow-sm">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5 text-xs text-zinc-400">
        <span aria-hidden className="size-2.5 rounded-full bg-zinc-700" />
        <span aria-hidden className="size-2.5 rounded-full bg-zinc-700" />
        <span aria-hidden className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2">guest@dev — terminal</span>
      </div>
      <div
        ref={bodyRef}
        role="log"
        aria-live="polite"
        onClick={() => inputRef.current?.focus()}
        className="h-96 overflow-y-auto break-words p-4 leading-relaxed"
      >
        {log.map((entry, i) => (
          <div key={i} className="term-out mb-3">
            <div><span className="text-emerald-300">{PROMPT}</span> {entry.cmd}</div>
            <div className="text-zinc-300">{entry.out}</div>
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run(value);
            setValue("");
          }}
          className="flex items-center gap-2"
        >
          <label htmlFor="terminal-input" className="text-emerald-300">{PROMPT}</label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            // 16px on mobile prevents iOS zoom-on-focus.
            className="term-input min-w-0 flex-1 bg-transparent text-base outline-none sm:text-sm"
          />
        </form>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-zinc-800 p-3">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            className="min-h-11 rounded-md border border-zinc-700 px-3 text-xs hover:bg-zinc-800"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
