import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Dev Pratap Singh's professional experience at PwC India and education at NIT Tiruchirapalli.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
