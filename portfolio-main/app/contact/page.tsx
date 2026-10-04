import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dev Pratap Singh — open to internships, full-time roles, and collaborations.",
};

export default function ContactPage() {
  return <ContactContent />;
}
