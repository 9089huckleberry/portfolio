import { Project, Skill, Experience } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Voice Chatbot",
    description:
      "Real-time voice chatbot with sub-150ms latency using Web Speech API and Dialogflow NLP. Built with Node.js and Socket.IO for seamless bidirectional communication.",
    tech_stack: ["Node.js", "Socket.IO", "Dialogflow", "Web Speech API", "JavaScript"],
    github_url: "https://github.com/9089huckleberry",
    demo_url: "",
    image: "",
    category: "ai",
    featured: true,
    created_at: "2024-06-01",
  },
  {
    id: "2",
    title: "BookMate — Book Recommendation System",
    description:
      "Personalized book recommendation engine using cosine similarity algorithms. Processed 10k+ user interactions with NumPy and Pandas for intelligent suggestions.",
    tech_stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Flask"],
    github_url: "https://github.com/9089huckleberry",
    demo_url: "",
    image: "",
    category: "ai",
    featured: true,
    created_at: "2024-04-01",
  },
  {
    id: "3",
    title: "TCP Chat Application",
    description:
      "High-performance multi-client C++ chat server with threaded architecture and mutex synchronization for real-time messaging across concurrent connections.",
    tech_stack: ["C++", "POSIX Sockets", "pthreads", "Mutex", "TCP/IP"],
    github_url: "https://github.com/9089huckleberry",
    demo_url: "",
    image: "",
    category: "systems",
    featured: true,
    created_at: "2024-02-01",
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "C++", level: 85, category: "languages" },
  { name: "C", level: 80, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "Bash", level: 75, category: "languages" },
  // Web
  { name: "React", level: 88, category: "web" },
  { name: "Node.js", level: 85, category: "web" },
  { name: "JavaScript", level: 90, category: "web" },
  { name: "HTML/CSS", level: 92, category: "web" },
  { name: "Express", level: 82, category: "web" },
  // Cloud & Data
  { name: "Google Cloud Platform", level: 80, category: "cloud" },
  { name: "BigQuery", level: 78, category: "cloud" },
  { name: "Data Pipelines", level: 75, category: "cloud" },
  // Databases
  { name: "MySQL", level: 85, category: "databases" },
  { name: "MongoDB", level: 80, category: "databases" },
  { name: "Firebase", level: 75, category: "databases" },
  // Tools
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vim", level: 72, category: "tools" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Data Analytics & Cloud Intern",
    company: "PwC India",
    period: "2024",
    description: [
      "Worked on data analytics initiatives leveraging Google Cloud Platform and BigQuery",
      "Built and optimized data pipelines for business intelligence reporting",
      "Collaborated with cross-functional teams to deliver actionable insights from large datasets",
      "Utilized cloud-native tools for scalable data processing and visualization",
    ],
    type: "work",
  },
  {
    id: "2",
    role: "B.Tech Computer Science & Engineering",
    company: "National Institute of Technology Tiruchirapalli",
    period: "2022 – Present",
    description: [
      "Pursuing B.Tech in Computer Science & Engineering at NIT Trichy",
      "Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks",
      "Active participant in coding competitions and technical clubs",
    ],
    type: "education",
  },
];

export const techIcons: Record<string, string> = {
  Python: "🐍",
  "C++": "⚙️",
  C: "🔧",
  SQL: "🗃️",
  Bash: "💻",
  React: "⚛️",
  "Node.js": "🟢",
  JavaScript: "📜",
  "HTML/CSS": "🎨",
  Express: "🚀",
  "Google Cloud Platform": "☁️",
  BigQuery: "📊",
  MySQL: "🐬",
  MongoDB: "🍃",
  Firebase: "🔥",
  Git: "🔀",
  Docker: "🐳",
  TypeScript: "📘",
};
