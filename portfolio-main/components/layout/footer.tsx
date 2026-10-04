"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    href: "https://github.com/9089huckleberry",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dev-pratap-singh-a694b6366/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:devpratap9089@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer className="relative border-t border-white/10 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-violet-500">
                <Terminal className="h-4 w-4 text-white" />
              </div>
              <span className="font-mono text-sm font-bold">
                <span className="gradient-text">dev</span>
                <span className="opacity-60">@pratap</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Computer Science Undergraduate · NIT Trichy
              <br />
              Building things that matter.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-400"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              devpratap9089@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {mounted ? new Date().getFullYear() : "2024"} Dev Pratap Singh · Chennai, India
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Built with{" "}
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            {" "}using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
