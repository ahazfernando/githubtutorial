import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import dataVisualizer from "@/assets/data-visualizer.jpg";
import { AppShell } from "@/components/app-shell";
import { modules } from "@/lib/git-data";

type ModulePageProps = {
  params: Promise<{ moduleId: string }>;
};

export function generateStaticParams() {
  return modules.map((module) => ({ moduleId: module.id }));
}

export async function generateMetadata({ params }: ModulePageProps): Promise<Metadata> {
  const { moduleId } = await params;
  const lesson = modules.find((item) => item.id === moduleId);

  return {
    title: lesson?.title ?? "Module",
    description: lesson?.description ?? "Learn Git one command at a time.",
    openGraph: {
      title: `${lesson?.title ?? "Module"} — Git Engine`,
      description: lesson?.description ?? "Learn Git one command at a time.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { moduleId } = await params;
  const lesson = modules.find((item) => item.id === moduleId);

  if (!lesson) {
    return (
      <AppShell>
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="p-8 rounded-xl border border-border bg-panel text-center space-y-4">
            <h1 className="text-2xl font-mono font-bold text-white">Module not found</h1>
            <p className="text-muted-foreground">
              That module doesn&apos;t exist in the curriculum.
            </p>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-mono font-bold text-xs uppercase tracking-widest"
            >
              Back to Modules
            </Link>
          </div>
        </main>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-12">
        <CourseNavigation activeModule={lesson.id} />
        <LessonContent lesson={lesson} />
        <LessonContext challenge={lesson.content.challenge} history={lesson.content.history} />
      </main>
    </AppShell>
  );
}

function CourseNavigation({ activeModule }: { activeModule: string }) {
  return (
    <aside className="col-span-12 lg:col-span-3 space-y-8 animate-fade-in-up">
      <div className="space-y-4">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Branch: Learning/Basics
        </h3>
        <div className="space-y-1">
          {modules.map((item) => {
            const isActive = item.id === activeModule;
            return (
              <Link
                key={item.id}
                href={`/modules/${item.id}`}
                className={`group flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-panel border border-accent/20 ring-1 ring-accent/10"
                    : "hover:bg-white/5"
                }`}
              >
                <div
                  className={`size-2 rounded-full ${
                    isActive
                      ? "bg-accent shadow-[0_0_8px_var(--color-accent)]"
                      : "border border-muted-foreground"
                  }`}
                />
                <span
                  className={`text-sm ${isActive ? "font-medium text-white" : "text-muted-foreground"}`}
                >
                  {String(item.number).padStart(2, "0")}. {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-6 rounded-xl border border-border bg-panel relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-20">
          <div className="size-24 rounded-full border border-accent" />
        </div>
        <p className="text-xs font-mono text-muted-foreground mb-4">PROGRESS_LOG</p>
        <div className="text-3xl font-mono font-bold text-white mb-1">
          {Math.round(((moduleNumber(activeModule) - 1) / modules.length) * 100)}%
        </div>
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent shadow-[0_0_10px_var(--color-accent)]"
            style={{ width: `${((moduleNumber(activeModule) - 1) / modules.length) * 100}%` }}
          />
        </div>
        <p className="text-[10px] mt-4 text-muted-foreground uppercase tracking-wider italic">
          {moduleNumber(activeModule) - 1} of {modules.length} modules synced
        </p>
      </div>
    </aside>
  );
}

function moduleNumber(id: string) {
  return modules.find((item) => item.id === id)?.number ?? 0;
}

function LessonContent({ lesson }: { lesson: (typeof modules)[number] }) {
  return (
    <section className="col-span-12 lg:col-span-6 space-y-10 animate-fade-in-up">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            Active Session
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-mono font-bold tracking-tighter text-white text-balance leading-tight">
          {lesson.content.heading}
        </h1>
        <p className="text-lg text-muted-foreground text-pretty max-w-[55ch]">
          {lesson.content.subheading}
        </p>
      </header>

      <div className="rounded-xl border border-border bg-panel overflow-hidden shadow-2xl">
        <div className="px-4 py-2 bg-white/5 border-b border-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-white/10" />
            <div className="size-2.5 rounded-full bg-white/10" />
            <div className="size-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground ml-2">
            {lesson.content.terminal.title}
          </span>
        </div>
        <div className="p-6 font-mono text-sm space-y-3">
          {lesson.content.terminal.lines.map((line, index) => (
            <div key={index}>
              {line.command && (
                <div className="flex gap-3">
                  <span className="text-accent">{line.prefix}</span>
                  <div className="flex">
                    <span className="text-white">{line.command}</span>
                    {line.isPrompt && <span className="w-2 h-4 bg-accent ml-1 animate-blink" />}
                  </div>
                </div>
              )}
              {line.output && (
                <div
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: line.output }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {lesson.content.concepts.map((concept) => (
          <div
            key={concept.id}
            className="p-6 rounded-xl border border-border bg-panel hover:border-accent/40 transition-all group"
          >
            <h4 className="font-mono text-accent mb-2 tracking-tight">
              {`${concept.id} // ${concept.label}`}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{concept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LessonContext({
  challenge,
  history,
}: {
  challenge: (typeof modules)[number]["content"]["challenge"];
  history: (typeof modules)[number]["content"]["history"];
}) {
  return (
    <aside className="col-span-12 lg:col-span-3 space-y-6 animate-fade-in-up">
      <div className="p-6 rounded-xl bg-accent text-background">
        <h3 className="font-mono font-bold text-lg leading-tight mb-4">
          Next Challenge:
          <br />
          {challenge.title}
        </h3>
        <p className="text-sm text-background/80 mb-6">{challenge.description}</p>
        <Link
          href="/playground"
          className="block text-center w-full py-3 bg-background text-accent font-mono font-bold text-xs uppercase tracking-widest rounded-lg hover:translate-y-[-2px] transition-transform"
        >
          Enter Playground -&gt;
        </Link>
      </div>

      <div className="p-6 rounded-xl border border-border bg-panel">
        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">
          Visual History
        </h4>
        <div className="space-y-6 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
          {history.map((commit) => (
            <div key={commit.hash} className="relative pl-8 flex flex-col gap-1">
              <div
                className={`absolute left-0 top-1.5 size-4 rounded-full border-2 ${
                  commit.isCurrent ? "border-accent bg-background" : "border-border bg-background"
                }`}
              />
              <span
                className={`text-[10px] font-mono ${commit.isCurrent ? "text-accent" : "text-muted-foreground"}`}
              >
                {commit.hash}
              </span>
              <span
                className={`text-xs font-medium ${commit.isCurrent ? "text-white" : "text-muted-foreground"}`}
              >
                {commit.message}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full aspect-square rounded-xl border border-border bg-panel overflow-hidden opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          src={dataVisualizer}
          alt="Abstract data visualization of connected server racks"
          className="w-full h-full object-cover"
        />
      </div>
    </aside>
  );
}
