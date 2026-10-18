import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="flex min-h-11 items-center hover:text-foreground">{n.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
