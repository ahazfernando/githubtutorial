import type { Metadata } from "next";
import Link from "next/link";

import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Playground",
  description: "Practice Git commands in a simulated terminal environment.",
  openGraph: {
    title: "Playground — Git Engine",
    description: "Practice Git commands in a simulated terminal environment.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PlaygroundPage() {
  return (
    <AppShell>
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              [03] Practice Terminal
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-mono font-bold tracking-tighter text-white">
            Git Playground
          </h1>
          <p className="text-lg text-muted-foreground max-w-[55ch]">
            A safe sandbox where you can type commands, see responses, and build muscle memory
            without touching a real repo.
          </p>
        </header>

        <div className="rounded-xl border border-border bg-panel overflow-hidden shadow-2xl animate-fade-in-up">
          <div className="px-4 py-2 bg-white/5 border-b border-border flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-white/10" />
              <div className="size-2.5 rounded-full bg-white/10" />
              <div className="size-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">terminal — sandbox</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-3">
            <div className="text-muted-foreground">
              Git Engine Sandbox v2.4
              <br />
              Type `help` to see available commands.
            </div>
            <div className="flex gap-3">
              <span className="text-accent">~</span>
              <div className="flex">
                <span className="text-white">git init</span>
                <span className="w-2 h-4 bg-accent ml-1 animate-blink" />
              </div>
            </div>
            <div className="text-muted-foreground">
              Initialized empty Git repository in /sandbox/project/.git/
            </div>
            <div className="pt-4 flex items-center gap-3">
              <span className="text-accent">~</span>
              <input
                type="text"
                placeholder="type command..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-muted-foreground/50 font-mono"
                disabled
              />
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Interactive sandbox is under construction. Try the modules in the meantime.
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center border-t border-border animate-fade-in-up">
          <Link
            href="/cli-reference"
            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            ← CLI Reference
          </Link>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-mono font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-transform"
          >
            Start Learning
          </Link>
        </div>
      </main>
    </AppShell>
  );
}
