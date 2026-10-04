"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-violet-500/10" />
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-sm text-brand-400">{"// let_us_connect"}</p>
          <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Got a Project in
            <br />
            <span className="gradient-text">Mind?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            I&apos;m actively looking for internships, full-time roles, and interesting collaborations.
            Let&apos;s build something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-brand-500/25 transition-all hover:scale-105 hover:shadow-brand-500/40"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://www.linkedin.com/in/dev-pratap-singh-a694b6366/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-foreground transition-all hover:scale-105 hover:bg-white/10"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
