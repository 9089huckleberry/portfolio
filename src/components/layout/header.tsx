"use client";

import { motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { assets, navItems, profile } from "@/data/portfolio";

export function Header({ hasResume }: { hasResume: boolean }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = navItems.map((n) => document.querySelector(n.href)).filter((e): e is Element => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
        <nav
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col border-b border-border bg-background p-4 lg:static lg:flex lg:flex-row lg:gap-1 lg:border-0 lg:p-0`}
        >
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active === href ? "location" : undefined}
              className={`relative flex min-h-11 items-center px-3 text-sm transition-colors ${active === href ? "text-foreground" : "text-muted hover:text-foreground"}`}
            >
              {label}
              {active === href && (
                <motion.span layoutId="nav-indicator" className="absolute inset-x-3 bottom-1 h-px bg-accent" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {hasResume && (
            <a
              href={assets.resume}
              download
              className="hidden min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm hover:bg-card sm:inline-flex"
            >
              <Download className="size-4" /> Resume
            </a>
          )}
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex size-11 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
