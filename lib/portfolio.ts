export const profile = {
  name: "Dev Pratap Singh",
  title: "Software Engineer",
  intro:
    "Systems-focused software engineer building reliable, high-performance software across networking, concurrency, distributed systems, and data-intensive platforms.",
  location: "India",
  email: "devpratap9089@gmail.com",
  github: "https://github.com/9089huckleberry",
  linkedin: "https://www.linkedin.com/in/dev-pratap-singh-a694b6366",
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const skillGroups = [
  {
    label: "Programming Languages",
    items: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Systems Programming & Concurrency",
    items: ["Multithreading", "POSIX Threads", "Synchronization", "Object-Oriented Design", "Performance Tuning", "Linux"],
  },
  {
    label: "Networking & Distributed Systems",
    items: ["TCP/IP", "Raw Sockets", "Libpcap", "Distributed Systems", "Interprocess Communication", "Networking Protocols"],
  },
  {
    label: "Backend Development & APIs",
    items: ["REST APIs", "CMake", "Docker", "Service Design", "Performance Profiling", "System Integration"],
  },
  {
    label: "Data Engineering & Databases",
    items: ["BigQuery", "ETL Pipelines", "Google Dataprep", "Data Warehousing", "Data Modeling", "Analytics"],
  },
  {
    label: "Software Engineering & Architecture",
    items: ["System Design", "Code Review", "Scalable Architecture", "Reliability", "Maintainability", "Debugging"],
  },
  {
    label: "Build, Testing & Development Tools",
    items: ["Git", "GitHub", "CMake", "Linux", "VS Code", "Profiling & Testing"],
  },
  {
    label: "Cloud Technologies",
    items: ["Google Cloud Platform", "BigQuery ML", "GCP Dashboards", "Cloud Automation", "Data Pipelines", "Analytics"],
  },
];

export const experience = [
  {
    period: "May 2025 — Jul 2025",
    role: "Data Analytics & Cloud Intern",
    company: "PwC India",
    title: "Enterprise analytics and cloud transformation",
    points: [
      "Centralized enterprise data warehouse using Google BigQuery, making large-scale operations data more accessible and analysts more efficient.",
      "Consolidated 2.5M+ supply chain records into a unified warehouse and improved internal visibility across teams.",
      "Automated ETL workflows with Google Dataprep and reduced 18+ hours of weekly manual preprocessing.",
      "Built analytics and forecasting workflows using BigQuery ML, delivering a 26% reduction in forecasting error (MAPE).",
      "Improved cross-functional operational efficiency by 31% through GCP dashboards and data-driven decision support.",
    ],
  },
];

export const projects = [
  {
    title: "PacketScope",
    tag: "Systems / Networking",
    description:
      "A high-performance packet analysis tool built in C++ for real-time traffic inspection, anomaly detection, and bandwidth diagnostics on Linux systems.",
    outcome: "15,000 packets/sec monitoring with low-overhead parsing and live anomaly alerts.",
    stack: ["C++", "Raw Sockets", "TCP/IP", "Libpcap", "CMake", "Linux"],
    accent: "cyan",
    metrics: [
      "Zero-copy parsing modules",
      "42% faster packet decoding",
      "1.5s anomaly alert window",
    ],
    github: "https://github.com/9089huckleberry",
    demo: "",
  },
  {
    title: "VectorRAG",
    tag: "Distributed Systems / AI",
    description:
      "A local vector search engine for semantic retrieval, combining HNSW indexing, embedding pipelines, and a REST API backed by Ollama and local Llama inference.",
    outcome: "14x performance gain for semantic retrieval over 768-dimensional embeddings.",
    stack: ["C++", "HNSW", "RAG", "Ollama", "REST APIs", "Docker"],
    accent: "violet",
    metrics: [
      "10+ REST endpoints",
      "WAL-based persistence",
      "Crash recovery workflow",
    ],
    github: "https://github.com/9089huckleberry",
    demo: "",
  },
  {
    title: "Threaded Chat Server",
    tag: "Concurrency / Networking",
    description:
      "A multi-client communication service built from the socket layer upward with threading, synchronization, and predictable performance under load.",
    outcome: "Reliable concurrency model for distributed client communication and message handling.",
    stack: ["C++", "POSIX Threads", "Sockets", "TCP", "Synchronization", "Linux"],
    accent: "amber",
    metrics: [
      "Thread-safe message flow",
      "Scalable client handling",
      "Low-latency control plane",
    ],
    github: "https://github.com/9089huckleberry",
    demo: "",
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "National Institute of Technology Tiruchirappalli",
  period: "2022 — Present",
  details:
    "Focused coursework in data structures, algorithms, operating systems, networking, and software engineering fundamentals.",
};

export const achievements = [
  { value: "2.5M+", label: "records consolidated into a unified warehouse" },
  { value: "42%", label: "faster packet decoding in PacketScope" },
  { value: "14x", label: "speedup in semantic retrieval in VectorRAG" },
  { value: "31%", label: "operational efficiency uplift via GCP dashboards" },
];

export const certifications = [
  "Google Cloud Platform and BigQuery analytics workflow experience",
  "Data engineering and cloud reporting through PwC India internship",
  "Systems programming, networking, and multithreading with C/C++",
  "Distributed systems and software engineering fundamentals through university coursework",
];