import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import dataVisualizer from "@/assets/data-visualizer.jpg";
import { AppShell } from "@/components/app-shell";
import { modules } from "@/lib/git-data";

export const metadata: Metadata = {
  title: {
    absolute: "Git Engine — Learn Git & Version Control",
  },
  description:
    "Master Git and version control through an interactive terminal-inspired learning platform built for students.",
  openGraph: {
    title: "Git Engine — Learn Git & Version Control",
    description:
      "Master Git and version control through an interactive terminal-inspired learning platform built for students.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomePage() {
  return (
    <AppShell>
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        <Hero />
        <TerminalPreview />
        <Curriculum />
        <CallToAction />
      </main>
    </AppShell>
  );
}

function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            Student Terminal v2.4
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-mono font-bold tracking-tighter text-white leading-tight">
          Master Git.
          <br />
          <span className="text-accent">Own the Tree.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[55ch] leading-relaxed">
          A fully interactive, black-themed learning environment for students who want to understand
          version control from the command line up.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-mono font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-transform"
          >
            Start Module 01
          </Link>
          <Link
            href="/cli-reference"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-mono font-bold text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
          >
            Open CLI Reference
          </Link>
        </div>
      </div>
      <div className="relative rounded-xl border border-border bg-panel p-6 shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
        <Image
          src={dataVisualizer}
          alt="Abstract network visualization of connected server racks"
          className="w-full h-auto rounded-lg opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}

function TerminalPreview() {
  return (
    <section className="rounded-xl border border-border bg-panel overflow-hidden shadow-2xl animate-fade-in-up">
      <div className="px-4 py-2 bg-white/5 border-b border-border flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
          <div className="size-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[10px] font-mono text-muted-foreground ml-2">
          terminal — git-introduction
        </span>
      </div>
      <div className="p-6 lg:p-8 font-mono text-sm space-y-3">
        <div className="flex gap-3">
          <span className="text-accent">~</span>
          <span className="text-white">git init</span>
        </div>
        <div className="text-muted-foreground">
          Initialized empty Git repository in /home/student/git-engine/.git/
        </div>
        <div className="flex gap-3">
          <span className="text-accent">~</span>
          <span className="text-white">git add README.md</span>
        </div>
        <div className="flex gap-3">
          <span className="text-accent">~</span>
          <span className="text-white">
            git commit -m &quot;feat: obsidian terminal theme&quot;
          </span>
        </div>
        <div className="text-muted-foreground">
          [main 9b2c4e1] feat: obsidian terminal theme
          <br />1 file changed, 142 insertions(+)
        </div>
        <div className="flex gap-3 pt-4">
          <span className="text-accent">~</span>
          <div className="flex">
            <span className="text-white">git push origin main</span>
            <span className="w-2 h-4 bg-accent ml-1 animate-blink" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-mono font-bold tracking-tighter text-white">Curriculum</h2>
        <p className="text-muted-foreground">
          Four modules that take you from zero to confident commits.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={`/modules/${module.id}`}
            className="group p-6 rounded-xl border border-border bg-panel hover:border-accent/40 transition-all space-y-4"
          >
            <div className="text-accent font-mono text-xl">
              {String(module.number).padStart(2, "0")}
            </div>
            <h3 className="font-mono font-bold text-white tracking-tight group-hover:text-accent transition-colors">
              {module.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{module.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="rounded-xl border border-accent/20 bg-accent/10 p-10 text-center space-y-6 animate-fade-in-up">
      <h2 className="text-3xl font-mono font-bold tracking-tighter text-white">Ready to commit?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Start with the first module and build your mental model of Git from the ground up.
      </p>
      <Link
        href="/modules"
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-mono font-bold text-xs uppercase tracking-widest hover:translate-y-[-2px] transition-transform"
      >
        Enter the Terminal
      </Link>
    </section>
  );
}
