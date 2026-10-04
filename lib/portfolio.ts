export const profile = {
  name: "Dev Pratap Singh",
  title: "Software Engineer",
  intro:
    "Systems-focused software engineer building reliable software for networking, concurrency, distributed systems, and data-heavy products.",
  location: "India",
  email: "devpratap9089@gmail.com",
  github: "https://github.com/9089huckleberry",
  linkedin: "https://www.linkedin.com/in/dev-pratap-singh-a694b6366",
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#uses", label: "Uses" },
];

export const skills = [
  "C++",
  "C",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",
  "TCP/IP",
  "Raw Sockets",
  "Linux",
  "Multithreading",
  "POSIX Threads",
  "BigQuery",
  "GCP",
  "REST APIs",
  "Docker",
  "Git",
  "GitHub",
  "CMake",
  "ETL Pipelines",
  "Distributed Systems",
  "Data Warehousing",
  "System Design",
  "Performance Tuning",
  "Cloud Analytics",
  "Data Modeling",
  "Networking",
  "Concurrency",
  "Software Engineering",
  "Data Engineering",
];

export const experience = [
  {
    period: "May 2025 — Jul 2025",
    role: "Data Analytics & Cloud Intern",
    company: "PwC India",
    details:
      "Built cloud-native analytics workflows, centralized supply-chain data in BigQuery, and automated ETL pipelines that reduced manual work and improved forecasting quality.",
  },
  {
    period: "2022 — Present",
    role: "Computer Science Undergraduate",
    company: "NIT Tiruchirappalli",
    details:
      "Studying software engineering fundamentals with a focus on systems, networking, concurrency, distributed software, and performance-oriented design.",
  },
];

export const projects = [
  {
    title: "PacketScope",
    category: "Network analysis",
    description:
      "A high-performance packet analysis tool built in C++ for live diagnostics, anomaly detection, and traffic monitoring on Linux systems.",
    stack: ["C++", "Raw Sockets", "Libpcap", "TCP/IP", "CMake", "Linux"],
    outcome: "Real-time monitoring at 15,000 packets/sec with zero-copy parsing and faster decoding.",
    accent: "from-[#d96f48]/20 to-[#d96f48]/5",
  },
  {
    title: "VectorRAG",
    category: "Distributed retrieval",
    description:
      "A local vector search engine integrating HNSW indexing, local RAG pipelines, and REST interfaces for semantic retrieval and benchmarking.",
    stack: ["C++", "HNSW", "Ollama", "REST APIs", "Docker", "RAG"],
    outcome: "14x semantic retrieval speedup with persistent indexing and recovery workflows.",
    accent: "from-[#7bc9b3]/20 to-[#7bc9b3]/5",
  },
  {
    title: "Threaded Chat Server",
    category: "Concurrency",
    description:
      "A multi-client communication service designed from the socket layer up with synchronization primitives, thread-safe queues, and predictable behavior under load.",
    stack: ["C++", "POSIX Threads", "Sockets", "TCP", "Linux", "Synchronization"],
    outcome: "Reliable concurrent message handling and client communication under realistic workloads.",
    accent: "from-[#f1d4a7]/20 to-[#f1d4a7]/5",
  },
];

export const resumeMeta = {
  updated: "Last updated · Aug 2026",
  pages: "2 pages",
};