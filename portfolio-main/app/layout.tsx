import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { CommandPalette } from "@/components/ui/command-palette";
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dev Pratap Singh — Full Stack Developer",
    template: "%s | Dev Pratap Singh",
  },
  description:
    "Computer Science Undergraduate at NIT Trichy. Full Stack Developer & Data Engineering enthusiast. Building scalable systems, intelligent applications, and modern web experiences.",
  keywords: [
    "Dev Pratap Singh",
    "Full Stack Developer",
    "NIT Trichy",
    "Computer Science",
    "React",
    "Node.js",
    "Python",
    "Data Engineering",
    "PwC",
    "Chennai",
  ],
  authors: [{ name: "Dev Pratap Singh" }],
  creator: "Dev Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devpratapsingh.dev",
    siteName: "Dev Pratap Singh",
    title: "Dev Pratap Singh — Full Stack Developer",
    description:
      "Computer Science Undergraduate at NIT Trichy. Full Stack Developer & Data Engineering enthusiast.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dev Pratap Singh — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Pratap Singh — Full Stack Developer",
    description: "Building scalable systems, intelligent applications, and modern web experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${firaCode.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <CursorGlow />
        <CommandPalette />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            },
          }}
        />
      </body>
    </html>
  );
}
