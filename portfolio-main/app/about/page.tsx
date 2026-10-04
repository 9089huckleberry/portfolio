import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dev Pratap Singh — CS undergrad at NIT Trichy, Full Stack Developer, Data Engineering enthusiast, and Ex-PwC intern.",
};

export default function AboutPage() {
  return <AboutContent />;
}
