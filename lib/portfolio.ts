export const profile = {
  name: "Dev Pratap Singh",
  shortName: "Dev",
  title: "Software engineer building useful things.",
  intro:
    "I’m a computer science engineer who enjoys turning complex problems into clear, reliable products — from data pipelines and systems software to polished web experiences.",
  location: "India · Open to opportunities",
  email: "devpratap9089@gmail.com",
  github: "https://github.com/9089huckleberry",
  linkedin: "https://www.linkedin.com/in/dev-pratap-singh/",
};

export const skillGroups = [
  { label: "Languages", items: ["Python", "C++", "C", "JavaScript", "TypeScript", "SQL"] },
  { label: "Web & product", items: ["React", "Next.js", "Node.js", "Express", "HTML/CSS", "REST APIs"] },
  { label: "Data & cloud", items: ["BigQuery", "GCP", "Data pipelines", "Pandas", "NumPy", "Scikit-learn"] },
  { label: "Tools", items: ["Git & GitHub", "Docker", "Linux", "Postman", "VS Code", "Figma"] },
];

export const projects = [
  {
    title: "AI Voice Chatbot",
    label: "REAL-TIME AI",
    description:
      "A voice-first conversational experience combining Web Speech API, Dialogflow, Node.js, and Socket.IO for responsive, bidirectional interactions.",
    outcome: "Designed for sub-150ms perceived response latency",
    stack: ["Node.js", "Socket.IO", "Dialogflow", "Web Speech API"],
    github: "https://github.com/9089huckleberry",
    demo: "",
    accent: "blue",
  },
  {
    title: "BookMate",
    label: "RECOMMENDATION SYSTEM",
    description:
      "A personalized book recommendation engine using cosine similarity to translate reading history into useful, explainable suggestions.",
    outcome: "Processed 10k+ user interactions for recommendations",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    github: "https://github.com/9089huckleberry",
    demo: "",
    accent: "orange",
  },
  {
    title: "TCP Chat Application",
    label: "SYSTEMS SOFTWARE",
    description:
      "A multi-client C++ chat server built from the socket layer up, with threaded concurrency, mutex synchronization, and a focus on predictable behavior.",
    outcome: "Built concurrent communication from first principles",
    stack: ["C++", "POSIX Sockets", "pthreads", "TCP/IP"],
    github: "https://github.com/9089huckleberry",
    demo: "",
    accent: "dark",
  },
];

export const experience = [
  {
    period: "2024",
    role: "Data Analytics & Cloud Intern",
    company: "PwC India",
    points: [
      "Built and optimized data pipelines using Google Cloud Platform and BigQuery for business intelligence reporting.",
      "Translated large datasets into actionable insights while collaborating with cross-functional stakeholders.",
      "Worked with cloud-native tooling to make data processing more scalable and repeatable.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "National Institute of Technology Tiruchirappalli",
  period: "2022 — Present",
  details: "Coursework across data structures, algorithms, operating systems, and computer networks.",
};

export const achievements = [
  { value: "10k+", label: "interactions processed in BookMate" },
  { value: "150ms", label: "target voice response latency" },
  { value: "CSE", label: "NIT Trichy undergraduate" },
];

export const certifications = [
  "Google Cloud & BigQuery experience",
  "Data analytics internship at PwC India",
  "Systems programming with C/C++ and POSIX sockets",
];
