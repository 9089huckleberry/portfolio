"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, Tag, BookOpen } from "lucide-react";

// Sample blog posts - these will come from Supabase in production
const samplePosts = [
  {
    id: "1",
    title: "Building a Real-Time Voice Chatbot with Web Speech API",
    slug: "real-time-voice-chatbot-web-speech-api",
    excerpt:
      "How I built a voice-powered AI chatbot achieving sub-150ms latency using Dialogflow and Socket.IO for seamless real-time communication.",
    tags: ["AI", "Node.js", "WebSockets"],
    cover_image: "",
    published: true,
    created_at: "2024-09-15",
    readingTime: 8,
  },
  {
    id: "2",
    title: "Cosine Similarity: The Math Behind Recommendation Systems",
    slug: "cosine-similarity-recommendation-systems",
    excerpt:
      "A deep dive into the mathematics of cosine similarity and how I used it to build BookMate — a system that processes 10k+ user interactions.",
    tags: ["Python", "ML", "Math"],
    cover_image: "",
    published: true,
    created_at: "2024-07-20",
    readingTime: 12,
  },
  {
    id: "3",
    title: "TCP Sockets from Scratch in C++: Building a Multi-Client Chat Server",
    slug: "tcp-sockets-cpp-multi-client-chat",
    excerpt:
      "Exploring POSIX sockets, pthreads, and mutex synchronization to build a production-grade multi-client TCP chat server in C++.",
    tags: ["C++", "Systems", "Networking"],
    cover_image: "",
    published: true,
    created_at: "2024-05-10",
    readingTime: 15,
  },
  {
    id: "4",
    title: "Data Engineering at Scale: Lessons from PwC Cloud Internship",
    slug: "data-engineering-at-scale-pwc",
    excerpt:
      "What I learned about building production data pipelines on Google Cloud Platform, BigQuery optimization, and enterprise-grade data architecture.",
    tags: ["GCP", "BigQuery", "Data Engineering"],
    cover_image: "",
    published: true,
    created_at: "2024-03-01",
    readingTime: 10,
  },
];

const allTags = Array.from(new Set(samplePosts.flatMap((p) => p.tags)));

const tagColors: Record<string, string> = {
  AI: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  Python: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  ML: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Math: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  "Node.js": "bg-green-500/15 text-green-400 border-green-500/30",
  WebSockets: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  "C++": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Systems: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  Networking: "bg-teal-500/15 text-teal-400 border-teal-500/30",
  GCP: "bg-red-500/15 text-red-400 border-red-500/30",
  BigQuery: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  "Data Engineering": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

export function BlogList() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = samplePosts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !selectedTag || p.tags.includes(selectedTag);
    return matchesSearch && matchesTag && p.published;
  });

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-brand-500/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-3 font-mono text-sm text-brand-400">{"// dev_thoughts"}</p>
            <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              The <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Technical deep-dives, engineering stories, and learnings from building things.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Filters */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <Search className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              !selectedTag
                ? "bg-brand-500 text-white"
                : "border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                selectedTag === tag
                  ? (tagColors[tag] || "bg-brand-500/15 text-brand-400 border-brand-500/30")
                  : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-brand-500/30 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {/* Icon */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10">
                  <BookOpen className="h-5 w-5 text-brand-400" />
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-brand-300 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          tagColors[tag] || "bg-white/5 text-muted-foreground border-white/10"
                        }`}
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No posts found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
