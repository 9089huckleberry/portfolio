"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Github, ExternalLink, Save, X } from "lucide-react";
import { projects as defaultProjects } from "@/lib/data";
import type { Project } from "@/types";

const EMPTY: Omit<Project, "id" | "created_at"> = {
  title: "",
  description: "",
  tech_stack: [],
  github_url: "",
  demo_url: "",
  image: "",
  category: "web",
  featured: false,
};

export default function DashboardProjectsPage() {
  const [items, setItems] = useState<Project[]>(defaultProjects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);

  const startNew = () => {
    setEditing({ ...EMPTY, id: Date.now().toString(), created_at: new Date().toISOString() });
    setIsNew(true);
  };

  const save = () => {
    if (!editing) return;
    if (isNew) {
      setItems((prev) => [...prev, editing]);
    } else {
      setItems((prev) => prev.map((p) => (p.id === editing.id ? editing : p)));
    }
    setEditing(null);
    setIsNew(false);
  };

  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-foreground">Projects</h1>
          <p className="text-sm text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-600"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </button>
      </div>

      {/* Editor */}
      {editing && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 overflow-hidden rounded-2xl border border-brand-500/30 bg-brand-500/5 p-6"
        >
          <h2 className="mb-4 font-bold text-foreground">
            {isNew ? "New Project" : "Edit Project"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {(["title", "github_url", "demo_url", "image"] as const).map((field) => (
              <div key={field}>
                <label className="mb-1 block text-xs font-medium capitalize text-muted-foreground">
                  {field.replace("_", " ")}
                </label>
                <input
                  value={editing[field] as string}
                  onChange={(e) => setEditing({ ...editing, [field]: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none focus:border-brand-500/50"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Description</label>
              <textarea
                value={editing.description}
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                rows={3}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none focus:border-brand-500/50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Tech Stack (comma-separated)</label>
              <input
                value={editing.tech_stack.join(", ")}
                onChange={(e) => setEditing({ ...editing, tech_stack: e.target.value.split(",").map((s) => s.trim()) })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none focus:border-brand-500/50"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Category</label>
              <select
                value={editing.category}
                onChange={(e) => setEditing({ ...editing, category: e.target.value as Project["category"] })}
                className="w-full rounded-xl border border-white/10 bg-[#0d1117] px-3 py-2 text-sm text-foreground outline-none"
              >
                {["ai", "systems", "web", "data"].map((c) => (
                  <option key={c} value={c}>
                    {c.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={editing.featured}
                onChange={(e) => setEditing({ ...editing, featured: e.target.checked })}
                className="h-4 w-4 rounded border-white/30 accent-brand-500"
              />
              <label htmlFor="featured" className="text-sm text-muted-foreground">Featured</label>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={save}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
            >
              <Save className="h-4 w-4" />
              Save
            </button>
            <button
              onClick={() => { setEditing(null); setIsNew(false); }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Project list */}
      <div className="space-y-3">
        {items.map((project) => (
          <div
            key={project.id}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                {project.featured && (
                  <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-xs text-brand-400">Featured</span>
                )}
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">
                  {project.category.toUpperCase()}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tech_stack.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.demo_url && (
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <button
                onClick={() => { setEditing(project); setIsNew(false); }}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              >
                <Edit2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => remove(project.id)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-500/10 hover:text-red-400"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
