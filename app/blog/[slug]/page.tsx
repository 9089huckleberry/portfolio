"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

// In a real app, this would fetch from Supabase by slug
const post = {
  title: "Building a Real-Time Voice Chatbot with Web Speech API",
  date: "Sept 15, 2024",
  readingTime: "8 min read",
  tags: ["AI", "Node.js", "WebSockets"],
  content: `
# Introduction

Building interactive AI applications requires more than just a good model; it requires a seamless user experience. In this post, I'll dive into how I built a voice-powered chatbot that feels natural and responsive.

## The Tech Stack

- **Web Speech API**: For real-time speech-to-text and text-to-speech directly in the browser.
- **Node.js & Socket.IO**: To handle the bi-directional communication between the client and the NLP engine.
- **Dialogflow**: For intent recognition and natural language understanding.

## Key Challenges

One of the biggest hurdles was latency. Users expect immediate feedback in a conversation. By optimizing the WebSocket events and using a stream-based approach for audio processing, I was able to achieve sub-150ms latency.

\`\`\`javascript
// Example of handling speech recognition results
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  socket.emit('voice-message', transcript);
};
\`\`\`

## Conclusion

The convergence of web technologies and AI is opening up incredible possibilities for accessible and intuitive interfaces. I'm excited to continue exploring this space!
  `,
};

export default function BlogPostPage() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </div>
            <button className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </motion.header>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-brand max-w-none"
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">{children}</h2>,
              p: ({ children }) => <p className="text-lg leading-relaxed text-muted-foreground mb-6">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">{children}</ul>,
              code: ({ children }) => (
                <code className="bg-white/10 px-1.5 py-0.5 rounded font-mono text-brand-300 text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 overflow-x-auto mb-8 font-mono text-sm">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.article>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="flex items-center justify-between flex-wrap gap-6 p-8 rounded-3xl bg-gradient-to-br from-brand-500/10 to-violet-500/10 border border-brand-500/20">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thanks for reading!</h3>
              <p className="text-sm text-muted-foreground">
                I regularly write about Web Development, AI, and Systems Engineering.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-all"
            >
              Let's Chat
            </Link>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
