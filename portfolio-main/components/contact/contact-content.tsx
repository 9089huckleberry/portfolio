"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  MessageSquare,
  User,
  AtSign,
  Loader2,
} from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const socialLinks = [
  {
    href: "https://github.com/9089huckleberry",
    icon: Github,
    label: "GitHub",
    username: "9089huckleberry",
    color: "hover:border-white/30 hover:bg-white/10",
  },
  {
    href: "https://www.linkedin.com/in/dev-pratap-singh-a694b6366/",
    icon: Linkedin,
    label: "LinkedIn",
    username: "dev-pratap-singh",
    color: "hover:border-blue-500/30 hover:bg-blue-500/10",
  },
  {
    href: "mailto:devpratap9089@gmail.com",
    icon: Mail,
    label: "Email",
    username: "devpratap9089@gmail.com",
    color: "hover:border-red-500/30 hover:bg-red-500/10",
  },
];

export function ContactContent() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        reset();
      } else {
        toast.error("Failed to send message. Please try email directly.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-violet-500/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-3 font-mono text-sm text-brand-400">{"// get_in_touch"}</p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Open to internships, full-time roles, freelance projects, and interesting
              conversations. Don&apos;t be shy — reach out!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Info Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15">
                    <MapPin className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dev Pratap Singh</p>
                    <p className="text-sm text-muted-foreground">Chennai, India</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  B.Tech CSE · NIT Tiruchirapalli · Data Analytics & Cloud Intern @ PwC India
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map(({ href, icon: Icon, label, username, color }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all ${color}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <p className="text-sm font-semibold text-green-400">
                    Open to opportunities
                  </p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Actively looking for internships and full-time roles in software engineering,
                  data engineering, and AI/ML.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15">
                    <MessageSquare className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">I usually respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />
                      Your Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Dev Pratap Singh"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-500/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-500/30"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
                      <AtSign className="h-3.5 w-3.5 text-muted-foreground" />
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-500/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-500/30"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Hey Dev, I'd love to chat about..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-500/50 focus:bg-white/10 focus:ring-1 focus:ring-brand-500/30"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.01] hover:shadow-brand-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
