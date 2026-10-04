"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, Code2, ExternalLink } from "lucide-react";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
}

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/9089huckleberry")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    {
      icon: Code2,
      label: "Public Repos",
      value: loading ? "..." : data?.public_repos ?? "N/A",
    },
    {
      icon: Users,
      label: "Followers",
      value: loading ? "..." : data?.followers ?? "N/A",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: loading ? "..." : "10+",
    },
    {
      icon: GitFork,
      label: "Contributions",
      value: loading ? "..." : "200+",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-mono text-sm text-brand-400">{"// github_activity"}</p>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Open Source <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <stat.icon className="mb-3 h-6 w-6 text-brand-400" />
              <div className="text-3xl font-black gradient-text">{String(stat.value)}</div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph (Embedded) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">@9089huckleberry</span>
            </div>
            <a
              href="https://github.com/9089huckleberry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-brand-400 transition-colors hover:text-brand-300"
            >
              View Profile
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <img
            src="https://ghchart.rshah.org/4d6cff/9089huckleberry"
            alt="Dev Pratap Singh's GitHub Contribution Graph"
            className="w-full rounded-lg opacity-90"
            style={{ filter: "hue-rotate(0deg)" }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
