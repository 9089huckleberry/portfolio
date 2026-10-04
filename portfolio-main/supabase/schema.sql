-- ============================================
-- Dev Pratap Singh Portfolio — Supabase Schema
-- Run this in: Supabase > SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- Projects Table
-- ============================================
CREATE TABLE IF NOT EXISTS public.projects (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title       text NOT NULL,
  description text,
  tech_stack  text[] DEFAULT '{}',
  github_url  text DEFAULT '',
  demo_url    text DEFAULT '',
  image       text DEFAULT '',
  category    text DEFAULT 'web' CHECK (category IN ('ai', 'systems', 'web', 'data')),
  featured    boolean DEFAULT false,
  created_at  timestamptz DEFAULT now()
);

-- Seed sample projects
INSERT INTO public.projects (title, description, tech_stack, github_url, category, featured)
VALUES
  ('AI Voice Chatbot',
   'Real-time voice chatbot with sub-150ms latency using Web Speech API and Dialogflow NLP.',
   ARRAY['Node.js', 'Socket.IO', 'Dialogflow', 'Web Speech API'],
   'https://github.com/9089huckleberry', 'ai', true),
  ('BookMate — Book Recommendation System',
   'Personalized book recommender using cosine similarity. Processes 10k+ interactions.',
   ARRAY['Python', 'NumPy', 'Pandas', 'Flask'],
   'https://github.com/9089huckleberry', 'ai', true),
  ('TCP Chat Application',
   'Multi-client C++ chat server with threaded architecture and mutex synchronization.',
   ARRAY['C++', 'POSIX Sockets', 'pthreads', 'TCP/IP'],
   'https://github.com/9089huckleberry', 'systems', true);

-- ============================================
-- Blog Posts Table
-- ============================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title       text NOT NULL,
  slug        text UNIQUE NOT NULL,
  content     text DEFAULT '',
  tags        text[] DEFAULT '{}',
  cover_image text DEFAULT '',
  published   boolean DEFAULT false,
  created_at  timestamptz DEFAULT now()
);

-- Seed sample blog posts
INSERT INTO public.blog_posts (title, slug, tags, published)
VALUES
  ('Building a Real-Time Voice Chatbot with Web Speech API',
   'real-time-voice-chatbot-web-speech-api',
   ARRAY['AI', 'Node.js', 'WebSockets'], true),
  ('Cosine Similarity: The Math Behind Recommendation Systems',
   'cosine-similarity-recommendation-systems',
   ARRAY['Python', 'ML', 'Math'], true);

-- ============================================
-- Messages Table
-- ============================================
CREATE TABLE IF NOT EXISTS public.messages (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL,
  email      text NOT NULL,
  message    text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable RLS
ALTER TABLE public.projects   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages   ENABLE ROW LEVEL SECURITY;

-- Projects: public read, admin write
CREATE POLICY "Public can read projects"
  ON public.projects FOR SELECT USING (true);

CREATE POLICY "Authenticated can manage projects"
  ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Blog Posts: public read of published, admin full
CREATE POLICY "Public can read published posts"
  ON public.blog_posts FOR SELECT USING (published = true);

CREATE POLICY "Authenticated can manage blog posts"
  ON public.blog_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Messages: anon can insert, authenticated can read
CREATE POLICY "Anyone can submit messages"
  ON public.messages FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Authenticated can read messages"
  ON public.messages FOR SELECT TO authenticated USING (true);
