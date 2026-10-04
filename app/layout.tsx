import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Pratap Singh | Software Engineer",
  description:
    "Portfolio of Dev Pratap Singh, a computer science engineer building reliable products, data systems, and thoughtful web experiences.",
  keywords: [
    "Dev Pratap Singh",
    "Software Engineer",
    "Full Stack Developer",
    "NIT Trichy",
    "Data Engineering",
    "React",
    "Python",
  ],
  authors: [{ name: "Dev Pratap Singh" }],
  creator: "Dev Pratap Singh",
  metadataBase: new URL("https://devpratapsingh.dev"),
  openGraph: {
    type: "website",
    title: "Dev Pratap Singh | Software Engineer",
    description:
      "Computer science engineer building reliable products, data systems, and thoughtful web experiences.",
    url: "https://devpratapsingh.dev",
    siteName: "Dev Pratap Singh",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
