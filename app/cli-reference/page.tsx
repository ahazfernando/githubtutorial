import type { Metadata } from "next";
import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { cliCommands } from "@/lib/git-data";

export const metadata: Metadata = {
  title: "CLI Reference",
  description:
    "A quick reference for the most common Git commands used in the Git Engine curriculum.",
  openGraph: {
    title: "CLI Reference — Git Engine",
    description:
      "A quick reference for the most common Git commands used in the Git Engine curriculum.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CliReferencePage() {
  return (
    <AppShell>
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              [02] Command Library
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-mono font-bold tracking-tighter text-white">
            CLI Reference
          </h1>
          <p className="text-lg text-muted-foreground max-w-[55ch]">
            A curated cheat sheet of the commands that power every workflow in the Git Engine
            curriculum.
          </p>
        </header>

        <div className="grid gap-4 animate-fade-in-up">
          {cliCommands.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-border bg-panel hover:border-accent/40 transition-all"
            >
              <code className="shrink-0 px-3 py-1.5 rounded-lg bg-background border border-border font-mono text-sm text-accent">
                {item.command}
              </code>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-between items-center border-t border-border animate-fade-in-up">
          <Link
            href="/modules"
            className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            ← Back to Modules
          </Link>
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-mono font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-transform"
          >
            Open Playground
          </Link>
        </div>
      </main>
    </AppShell>
  );
}
