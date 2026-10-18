import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "Dev Pratap Singh — Software Engineer and Computer Science undergraduate at NIT Trichy. Former Data Analytics and Cloud Intern at PwC India.";

export const metadata: Metadata = {
  title: "Dev Pratap Singh | Software Engineer",
  description,
  openGraph: { title: "Dev Pratap Singh | Software Engineer", description, type: "website" },
  twitter: { card: "summary", title: "Dev Pratap Singh | Software Engineer", description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
};

// Runs before paint so the saved theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript><style>{"[style*=\"opacity:0\"]{opacity:1!important;transform:none!important}"}</style></noscript>
      </head>
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
