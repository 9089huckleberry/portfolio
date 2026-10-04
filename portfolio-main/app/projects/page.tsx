import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Dev Pratap Singh's portfolio of projects spanning AI, machine learning , web development, and data engineering.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
