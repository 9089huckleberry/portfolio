"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, Eye, EyeOff } from "lucide-react";

const samplePosts = [
  {
    id: "1",
    title: "Building a Real-Time Voice Chatbot with Web Speech API",
    slug: "real-time-voice-chatbot-web-speech-api",
    tags: ["AI", "Node.js"],
    published: true,
    created_at: "2024-09-15",
  },
  {
    id: "2",
    title: "Cosine Similarity: The Math Behind Recommendation Systems",
    slug: "cosine-similarity-recommendation-systems",
    tags: ["Python", "ML"],
    published: true,
    created_at: "2024-07-20",
  },
];

export default function DashboardBlogPage() {
  const [posts, setPosts] = useState(samplePosts);
  const [editing, setEditing] = useState<{
    id: string; title: string; slug: string; content: string;
    tags: string; published: boolean;
  } | null>(null);
  const [isNew, setIsNew] = useState(false);

  const startNew = () => {
    setEditing({ id: Date.now().toString(), title: "", slug: "", content: "", tags: "", published: false });
    setIsNew(true);
  };

  const save = () => {
    if (!editing) return;
    if (isNew) {
      setPosts((prev) => [...prev, {
        id: editing.id, title: editing.title, slug: editing.slug,
        tags: editing.tags.split(",").map(t => t.trim()),
        published: editing.published, created_at: new Date().toISOString().split("T")[0],
      }]);
    } else {
      setPosts((prev) => prev.map((p) => p.id === editing.id
        ? { ...p, title: editing.title, slug: editing.slug, published: editing.published }
        : p
      ));
    }
    setEditing(null);
    setIsNew(false);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-foreground">Blog Posts</h1>
          <p className="text-sm text-muted-foreground">Write and manage your articles</p>
        </div>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
        >
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      {/* Editor */}
      {editing && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl border border-brand-500/30 bg-brand-500/5 p-6"
        >
          <h2 className="mb-4 font-bold text-foreground">{isNew ? "New Post" : "Edit Post"}</h2>
          <div className="space-y-4">
            {([["title", "Title"], ["slug", "Slug"]] as const).map(([field, label]) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
                <input
                  value={editing[field]}
                  onChange={(e) => setEditing({ ...editing, [field]: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none focus:border-brand-500/50"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                Content (Markdown)
              </label>
              <textarea
                value={editing.content}
                onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                rows={10}
                placeholder="# My Blog Post&#10;&#10;Write your content in **Markdown**..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-brand-500/50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Tags (comma-separated)</label>
              <input
                value={editing.tags}
                onChange={(e) => setEditing({ ...editing, tags: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none focus:border-brand-500/50"
              />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="pub" checked={editing.published}
                onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                className="h-4 w-4 accent-brand-500"
              />
              <label htmlFor="pub" className="text-sm text-muted-foreground">Publish immediately</label>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={save} className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">
              <Save className="h-4 w-4" />Save
            </button>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Post List */}
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{post.title}</h3>
                <span className={`rounded-full px-2 py-0.5 text-xs ${post.published ? "bg-green-500/15 text-green-400" : "bg-yellow-500/15 text-yellow-400"}`}>
                  {post.published ? "Published" : "Draft"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">/{post.slug} · {post.created_at}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => {
                setEditing({ id: post.id, title: post.title, slug: post.slug, content: "", tags: post.tags.join(", "), published: post.published });
                setIsNew(false);
              }} className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground">
                <Edit2 className="h-4 w-4" />
              </button>
              <button onClick={() => setPosts((p) => p.filter((x) => x.id !== post.id))}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-500/10 hover:text-red-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
