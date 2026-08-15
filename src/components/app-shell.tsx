"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <GlobalNav />
      {children}
      <StatusFooter />
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`hover:text-accent transition-colors${isActive ? " text-accent" : ""}`}
    >
      {children}
    </Link>
  );
}

function GlobalNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="size-8 bg-accent rounded flex items-center justify-center">
          <div className="size-4 border-2 border-background rounded-full" />
        </div>
        <Link
          href="/"
          className="font-mono font-bold tracking-tighter text-lg uppercase hover:text-accent transition-colors"
        >
          Git_Engine
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-mono">
        <NavLink href="/modules">[01] Modules</NavLink>
        <NavLink href="/cli-reference">[02] CLI_Reference</NavLink>
        <NavLink href="/playground">[03] Playground</NavLink>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-muted-foreground">Student:</span>
          <span className="text-accent">root@dev</span>
          <span className="w-2 h-4 bg-accent animate-blink group-hover:bg-white" />
        </div>
      </div>
    </nav>
  );
}

function StatusFooter() {
  return (
    <footer className="h-10 border-t border-border bg-background/90 px-6 flex items-center justify-between text-[10px] font-mono text-muted-foreground z-50">
      <div className="flex items-center gap-6">
        <span>SYSTEM: STABLE</span>
        <span>LATENCY: 24MS</span>
        <span>ENV: PRODUCTION</span>
      </div>
      <div className="flex items-center gap-4">
        <span>
          Project by{" "}
          <a
            href="https://www.linkedin.com/in/ahaz-fernando-11002720a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Ahaz Fernando
          </a>
        </span>
        <span className="text-accent">HELP [CTRL+H]</span>
        <span>V.2.4.0-STABLE</span>
      </div>
    </footer>
  );
}
