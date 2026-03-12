"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about        → Who is Dev Pratap?",
    "  skills       → Tech stack and expertise",
    "  projects     → Featured projects",
    "  experience   → Work and education",
    "  contact      → Get in touch",
    "  clear        → Clear terminal",
  ],
  about: [
    "Dev Pratap Singh",
    "─────────────────",
    "Role    : CS Undergrad | Full Stack Dev | Data Engineering",
    "College : NIT Tiruchirapalli (B.Tech CSE)",
    "Location: Chennai, India",
    "Email   : devpratap9089@gmail.com",
    "GitHub  : github.com/9089huckleberry",
    "",
    "I build scalable systems, intelligent applications,",
    "and modern web experiences.",
  ],
  skills: [
    ":: Languages ::",
    "  Python ████████████████████ 90%",
    "  C++    █████████████████░░░ 85%",
    "  SQL    █████████████████░░░ 85%",
    "  Bash   ███████████████░░░░░ 75%",
    "",
    ":: Web ::",
    "  React  ██████████████████░░ 88%",
    "  Node   █████████████████░░░ 85%",
    "  JS/TS  ██████████████████░░ 90%",
    "",
    ":: Cloud & Data ::",
    "  GCP    ████████████████░░░░ 80%",
    "  BigQuery ███████████████░░░ 78%",
  ],
  projects: [
    ":: Featured Projects ::",
    "",
    "[1] AI Voice Chatbot",
    "    → Web Speech API + Dialogflow + Socket.IO | 150ms latency",
    "",
    "[2] BookMate — Recommendation System",
    "    → Cosine Similarity + NumPy/Pandas | 10k+ interactions",
    "",
    "[3] TCP Chat Application",
    "    → C++ · Threaded Server · Mutex Sync · Real-time",
  ],
  experience: [
    ":: Work Experience ::",
    "",
    "▸ Data Analytics & Cloud Intern — PwC India (2024)",
    "  · GCP, BigQuery, Data Pipelines",
    "  · Business intelligence dashboards",
    "",
    ":: Education ::",
    "",
    "▸ B.Tech CSE — NIT Tiruchirapalli (2022 – Present)",
    "  · DSA, OS, Computer Networks, DBMS",
  ],
  contact: [
    ":: Contact Info ::",
    "",
    "📧 devpratap9089@gmail.com",
    "🐙 github.com/9089huckleberry",
    "💼 linkedin.com/in/dev-pratap-singh-a694b6366",
    "📍 Chennai, India",
    "",
    "I'm open to internships, full-time roles, and collaboration!",
  ],
};

interface Line {
  type: "input" | "output" | "error";
  content: string;
}

const INITIAL_LINES: Line[] = [
  { type: "output", content: "Dev Pratap Singh's Portfolio Terminal v1.0.0" },
  { type: "output", content: '─────────────────────────────────────────────' },
  { type: "output", content: 'Type "help" to see available commands.' },
  { type: "output", content: "" },
];

export function TerminalSection() {
  const [lines, setLines] = useState<Line[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ type: "input", content: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setLines(INITIAL_LINES);
      setInput("");
      return;
    }

    if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((l) => newLines.push({ type: "output", content: l }));
    } else if (trimmed === "") {
      // do nothing
    } else {
      newLines.push({
        type: "error",
        content: `Command not found: "${trimmed}". Type "help" for available commands.`,
      });
    }

    newLines.push({ type: "output", content: "" });
    setLines((prev) => [...prev, ...newLines]);
    setHistory((prev) => [cmd, ...prev.slice(0, 19)]);
    setHistoryIdx(-1);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(next);
      setInput(history[next] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : history[next]);
    }
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm text-brand-400">{"// interactive_terminal"}</p>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Explore My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Type commands in the terminal below. Try: <code className="text-brand-400">help</code>
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/15 bg-[#0d1117] shadow-2xl shadow-black/50"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title Bar */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex flex-1 items-center justify-center gap-1.5">
              <TerminalIcon className="h-3 w-3 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">
                dev@pratap:~
              </span>
            </div>
          </div>

          {/* Output */}
          <div className="h-80 overflow-y-auto p-4 font-mono text-sm">
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "input"
                    ? "text-green-400"
                    : line.type === "error"
                    ? "text-red-400"
                    : "text-gray-300"
                }
              >
                {line.content || "\u00A0"}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center text-green-400">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent text-green-400 outline-none caret-green-400 placeholder:text-muted-foreground/40"
                placeholder="type a command..."
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
