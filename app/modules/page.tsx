import type { Metadata } from "next";
import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { modules } from "@/lib/git-data";

export const metadata: Metadata = {
  title: "Modules",
  description:
    "Explore the Git Engine curriculum: four modules covering workflows, repositories, commits, and remotes.",
  openGraph: {
    title: "Modules — Git Engine",
    description:
      "Explore the Git Engine curriculum: four modules covering workflows, repositories, commits, and remotes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ModulesPage() {
  return (
    <AppShell>
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <header className="space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              Branch: Learning/Basics
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-mono font-bold tracking-tighter text-white">
            Course Modules
          </h1>
          <p className="text-lg text-muted-foreground max-w-[55ch]">
            A linear progression from first repository to remote collaboration. Each module includes
            a lesson, a terminal walkthrough, and a challenge.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className="group flex items-start gap-6 p-6 rounded-xl border border-border bg-panel hover:border-accent/40 transition-all"
            >
              <div className="text-3xl font-mono font-bold text-accent">
                {String(module.number).padStart(2, "0")}
              </div>
              <div className="space-y-2">
                <h3 className="font-mono font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-accent uppercase tracking-wider">
                  Start module{" "}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </AppShell>
  );
}
