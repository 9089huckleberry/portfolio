export interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  demo_url?: string;
  image?: string;
  category: "ai" | "systems" | "web" | "data";
  featured: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  cover_image?: string;
  published: boolean;
  created_at: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: "languages" | "web" | "cloud" | "databases" | "tools";
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "education";
  logo?: string;
}

export interface GithubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  contributions: number;
}
