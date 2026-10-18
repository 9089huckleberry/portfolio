import { existsSync } from "node:fs";
import { join } from "node:path";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About, Contact, Education, Experience, Projects, Skills, TerminalSection } from "@/components/sections/content";
import { Hero } from "@/components/sections/hero";
import { assets } from "@/data/portfolio";

const has = (url: string) => existsSync(join(process.cwd(), "public", url));

export default function Home() {
  const hasResume = has(assets.resume);
  const hasPhoto = has(assets.photo);
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Header hasResume={hasResume} />
      <main id="main" className="shell">
        <Hero hasResume={hasResume} hasPhoto={hasPhoto} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <TerminalSection hasResume={hasResume} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
