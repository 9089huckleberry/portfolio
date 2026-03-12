import type { Metadata } from "next";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles, engineering insights, and dev stories by Dev Pratap Singh.",
};

export default function BlogPage() {
  return <BlogList />;
}
