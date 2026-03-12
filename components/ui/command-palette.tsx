"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  FolderOpen,
  Github,
  LayoutDashboard,
} from "lucide-react";

const commands = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About", icon: User, href: "/about" },
  { label: "Projects", icon: FolderOpen, href: "/projects" },
  { label: "Experience", icon: Briefcase, href: "/experience" },
  { label: "Blog", icon: BookOpen, href: "/blog" },
  { label: "Contact", icon: Mail, href: "/contact" },
  { label: "Admin Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  {
    label: "GitHub Profile",
    icon: Github,
    href: "https://github.com/9089huckleberry",
    external: true,
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const open = () => setOpen(true);
    window.addEventListener("open-command-palette", open);
    return () => window.removeEventListener("open-command-palette", open);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  const handleSelect = (cmd: (typeof commands)[0]) => {
    setOpen(false);
    setQuery("");
    if ("external" in cmd && cmd.external) {
      window.open(cmd.href, "_blank");
    } else if ("href" in cmd) {
      router.push(cmd.href);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-20"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <svg
            className="h-4 w-4 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, actions..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground sm:inline-block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[380px] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No results found
            </p>
          ) : (
            filtered.map((cmd, i) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(cmd as Parameters<typeof handleSelect>[0])}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-white/5"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  {cmd.label}
                </button>
              );
            })
          )}
        </div>

        <div className="border-t border-white/10 px-4 py-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">↑↓</kbd>
            navigate
            <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono">⏎</kbd>
            select
          </span>
        </div>
      </div>
    </div>
  );
}
