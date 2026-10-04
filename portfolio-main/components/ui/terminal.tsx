"use client";

import React, { useState, useEffect, useRef } from "react";

interface TerminalProps {
  onClose?: () => void;
}

export const Terminal = ({ onClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: "welcome",
      output: (
        <div className="text-green-400">
          Welcome to the DevOS terminal! Type <span className="text-white font-bold">'help'</span> for a list of commands.
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <p className="mb-2">Available commands:</p>
            <div className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-1">
              <span className="text-green-400 font-bold">about</span><span>→ learn about Dev Pratap</span>
              <span className="text-green-400 font-bold">projects</span><span>→ list my projects</span>
              <span className="text-green-400 font-bold">skills</span><span>→ view technical skills</span>
              <span className="text-green-400 font-bold">experience</span><span>→ view work experience</span>
              <span className="text-green-400 font-bold">contact</span><span>→ get contact information</span>
              <span className="text-green-400 font-bold">resume</span><span>→ download my resume</span>
              <span className="text-green-400 font-bold">github</span><span>→ open GitHub profile</span>
              <span className="text-green-400 font-bold">linkedin</span><span>→ open LinkedIn</span>
              <span className="text-green-400 font-bold">clear</span><span>→ clear terminal</span>
              <span className="text-green-400 font-bold">whoami</span><span>→ identify current user</span>
            </div>
          </div>
        );
        break;
      case "about":
      case "cat about.txt":
        output = (
          <div className="space-y-4">
            <div>
              <p className="font-bold text-white">Dev Pratap Singh</p>
              <p className="text-white/80">Computer Science Undergraduate @ NIT Trichy</p>
            </div>
            <div>
              <p>Full-stack developer passionate about:</p>
              <ul className="list-disc list-inside ml-2">
                <li>scalable systems</li>
                <li>data engineering</li>
                <li>intelligent applications</li>
              </ul>
            </div>
            <div>
              <p>Currently exploring:</p>
              <p className="text-green-400">Next.js • Cloud Data Systems • AI interfaces</p>
            </div>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-4">
            <div>
              <p className="font-bold text-green-400 mb-1">Languages</p>
              <p className="text-white/80">C | C++ | Python | SQL | Bash</p>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-1">Web</p>
              <p className="text-white/80">React | Next.js | Tailwind | Node.js | Express | HTML | CSS | JS</p>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-1">Cloud</p>
              <p className="text-white/80">Google Cloud | BigQuery</p>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-1">Databases</p>
              <p className="text-white/80">MySQL | MongoDB | Firebase</p>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-1">Tools</p>
              <p className="text-white/80">Git | Postman | VSCode | Vim</p>
            </div>
          </div>
        );
        break;
      case "tech-stack":
        output = (
          <div className="space-y-4 font-mono">
            <div>
              <p className="text-green-400 font-bold">Frontend</p>
              <p className="text-white/80">React | Next.js | Tailwind</p>
            </div>
            <div>
              <p className="text-green-400 font-bold">Backend</p>
              <p className="text-white/80">Node.js | Express</p>
            </div>
            <div>
              <p className="text-green-400 font-bold">Cloud</p>
              <p className="text-white/80">Google Cloud | BigQuery</p>
            </div>
            <div>
              <p className="text-green-400 font-bold">Databases</p>
              <p className="text-white/80">MongoDB | MySQL</p>
            </div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-6">
            <div>
              <p className="font-bold text-white mb-1">1. AI Voice Chatbot</p>
              <p className="text-white/80">Real-time voice assistant using Web Speech API</p>
              <p className="text-green-400">GitHub: github.com/9089huckleberry/ai-voice-chatbot</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">2. BookMate</p>
              <p className="text-white/80">Personalized book recommendation system</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">3. TCP Chat Application</p>
              <p className="text-white/80">Multi-client chat server in C++</p>
            </div>
            <p className="text-white/50 italic mt-2">Type 'project [number]' to view details.</p>
          </div>
        );
        break;
      case "project 1":
        output = (
          <div className="space-y-2">
            <p className="font-bold text-green-400">AI Voice Chatbot</p>
            <p>An intelligent voice assistant that leverages the Web Speech API for real-time transcription and voice generation, coupled with an AI backend to respond to dynamic queries naturally.</p>
          </div>
        );
        break;
      case "project 2":
        output = (
          <div className="space-y-2">
            <p className="font-bold text-green-400">BookMate</p>
            <p>A smart recommendation engine processing reading histories and genre preferences to curate highly personalized reading lists for users.</p>
          </div>
        );
        break;
      case "project 3":
        output = (
          <div className="space-y-2">
            <p className="font-bold text-green-400">TCP Chat Application</p>
            <p>A robust multi-client server implementation in C++ handling socket programming, basic threading, and persistent connections.</p>
          </div>
        );
        break;
      case "experience":
        output = (
          <div className="space-y-3">
            <p className="font-bold text-white text-lg">PwC India — Data Analytics & Cloud Intern</p>
            <ul className="list-disc list-inside ml-2 space-y-1 text-white/80">
              <li>Built BigQuery data warehouse</li>
              <li>Processed 2M+ supply chain records</li>
              <li>Automated data pipelines</li>
              <li>Built predictive models with BigQuery ML</li>
            </ul>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-1 grid grid-cols-[100px_1fr]">
            <span className="font-bold">Email</span><span className="text-white/80">: devpratap9089@gmail.com</span>
            <span className="font-bold">Phone</span><span className="text-white/80">: +91-8260851668</span>
            <span className="font-bold">GitHub</span><span className="text-white/80">: github.com/9089huckleberry</span>
            <span className="font-bold">LinkedIn</span><span className="text-white/80">: linkedin.com/in/dev-pratap-singh-a694b6366</span>
            <span className="font-bold">Location</span><span className="text-white/80">: Chennai, India</span>
          </div>
        );
        break;
      case "resume":
        output = <p className="text-green-400 blink">Downloading resume...</p>;
        setTimeout(() => window.open("/resume.pdf", "_blank"), 800);
        break;
      case "github":
      case "open github":
        output = (
          <div className="space-y-2">
            <p className="font-bold mb-2 border-b border-white/20 pb-1 inline-block">GitHub Profile</p>
            <p>Username: <span className="text-green-400">9089huckleberry</span></p>
            <p>Repositories: <span className="text-white/80">XX</span></p>
            <p>Stars: <span className="text-white/80">XX</span></p>
            <p className="mt-2">Top Languages:</p>
            <p className="text-green-400">Python | C++ | JavaScript</p>
            <p className="text-white/50 italic mt-2">Opening profile...</p>
          </div>
        );
        setTimeout(() => window.open("https://github.com/9089huckleberry", "_blank"), 1000);
        break;
      case "linkedin":
      case "open linkedin":
        output = <p className="text-green-400">Opening LinkedIn profile...</p>;
        setTimeout(() => window.open("https://linkedin.com/in/dev-pratap-singh-a694b6366", "_blank"), 800);
        break;
      case "clear":
        setHistory([]);
        return;
      case "whoami":
        output = (
          <div className="space-y-1">
            <p className="font-bold text-white text-lg">Dev Pratap Singh</p>
            <p className="text-white/80">Full Stack Developer</p>
            <p className="text-white/80">Data Engineering Enthusiast</p>
          </div>
        );
        break;
      case "sudo hire dev":
        output = (
          <div className="space-y-2">
            <p className="text-green-400 font-bold">Permission granted.</p>
            <p className="text-green-400 blink">Recruiter detected.</p>
            <p>Opening contact page...</p>
          </div>
        );
        setTimeout(() => window.open("mailto:devpratap9089@gmail.com", "_blank"), 1500);
        break;
      case "coffee":
        output = (
          <div className="space-y-2">
            <p className="text-yellow-600">Brewing coffee...</p>
            <p className="text-lg tracking-widest animate-pulse">☕ ☕ ☕</p>
          </div>
        );
        break;
      case "ls":
        output = (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-green-400">
            <span className="text-white/80">about.txt</span>
            <span className="text-blue-400 font-bold">projects/</span>
            <span className="text-white/80">skills.json</span>
            <span className="text-red-400">resume.pdf</span>
            <span className="text-white/80">contact.md</span>
          </div>
        );
        break;
      case "matrix":
        output = (
          <div className="space-y-0.5 overflow-hidden h-40 text-green-500 font-mono text-xs opacity-80 leading-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="whitespace-pre">
                {Array.from({ length: 60 }).map(() => String.fromCharCode(33 + Math.random() * 93)).join(" ")}
              </div>
            ))}
          </div>
        );
        break;
      case "neofetch":
        output = (
          <div className="flex gap-6 items-center">
            <div className="text-green-400 font-bold text-5xl tracking-tighter leading-none select-none my-4">
              dev<br/>pratap
            </div>
            <div className="space-y-1 border-l border-white/20 pl-6 my-2">
              <p><span className="text-green-400 font-bold w-12 inline-block">OS</span> <span className="text-white">Developer Linux</span></p>
              <p><span className="text-green-400 font-bold w-12 inline-block">Host</span> <span className="text-white">NIT Trichy</span></p>
              <p><span className="text-green-400 font-bold w-12 inline-block">Shell</span> <span className="text-white">React Terminal</span></p>
              <p><span className="text-green-400 font-bold w-12 inline-block">CPU</span> <span className="text-white">Problem Solving</span></p>
              <p><span className="text-green-400 font-bold w-12 inline-block">GPU</span> <span className="text-white">Creativity</span></p>
              <p><span className="text-green-400 font-bold w-12 inline-block">RAM</span> <span className="text-white">Coffee Powered</span></p>
            </div>
          </div>
        );
        break;
      case "":
        output = "";
        break;
      default:
        output = <p className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for available commands.</p>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div 
      className="w-full h-full bg-[#0a0a0a] text-green-400 font-mono text-sm sm:text-base p-4 overflow-y-auto rounded-[1.75rem] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2 text-white/50 select-none">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs font-mono">devpratap@portfolio:~$</span>
      </div>

      <div className="space-y-4">
        {history.map((entry, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2 text-white/90 font-bold">
              <span className="text-green-400 select-none">devpratap@portfolio:~$</span>
              <span>{entry.command}</span>
            </div>
            {entry.output && <div className="text-green-400">{entry.output}</div>}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2 text-white/90 font-bold w-full relative">
          <span className="text-green-400 select-none">devpratap@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-green-400 ml-1 font-mono focus:ring-0"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
