export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  content: LessonContent;
}

export interface LessonContent {
  heading: string;
  subheading: string;
  terminal: {
    title: string;
    lines: TerminalLine[];
  };
  concepts: Concept[];
  challenge: {
    title: string;
    description: string;
  };
  history: Commit[];
}

export interface TerminalLine {
  prefix: string;
  command: string;
  output?: string;
  isPrompt?: boolean;
}

export interface Concept {
  id: string;
  label: string;
  description: string;
}

export interface Commit {
  hash: string;
  message: string;
  isCurrent?: boolean;
}

export const modules: Module[] = [
  {
    id: "three-stage-workflow",
    number: 1,
    title: "The Git Workflow",
    description: "Understand how Git tracks changes through working, staging, and history.",
    content: {
      heading: "Master the Three-Stage Workflow",
      subheading:
        "Git isn't just a save button. It's a sophisticated state machine that tracks changes through three distinct environments: working, staging, and history.",
      terminal: {
        title: "terminal — git-status",
        lines: [
          { prefix: "~", command: "git status" },
          {
            prefix: "",
            command: "",
            output:
              "On branch <span class='text-accent'>main</span>\nYour branch is up to date with 'origin/main'.\n\nChanges not staged for commit:\n  <span class='text-red-400'>(use \"git add &lt;file&gt;...\" to update what will be committed)</span>\n    <span class='text-red-400'>modified:   index.html</span>\n    <span class='text-red-400'>modified:   styles.css</span>",
          },
          { prefix: "~", command: "git add .", isPrompt: true },
        ],
      },
      concepts: [
        {
          id: "01",
          label: "The Working Dir",
          description:
            'Where you edit your files. Changes here are "untracked" or "modified" but not yet remembered by Git.',
        },
        {
          id: "02",
          label: "The Staging Area",
          description:
            "The buffer zone. Use `git add` to cherry-pick which changes are ready for the next snapshot.",
        },
      ],
      challenge: {
        title: "Staging Changes",
        description: "Stage only the modified files that belong to your next commit.",
      },
      history: [
        { hash: "f4d92a1", message: "feat: add terminal UI", isCurrent: true },
        { hash: "a2b8e1f", message: "docs: initial commit" },
      ],
    },
  },
  {
    id: "initializing-repos",
    number: 2,
    title: "Initializing Repos",
    description: "Create, clone, and inspect repositories from scratch.",
    content: {
      heading: "Boot a New Repository",
      subheading:
        "Every Git project starts with a `.git` directory. Learn how to initialize local repositories and clone remote ones.",
      terminal: {
        title: "terminal — git-init",
        lines: [
          { prefix: "~", command: "mkdir my-project && cd my-project" },
          { prefix: "~", command: "git init" },
          {
            prefix: "",
            command: "",
            output: "Initialized empty Git repository in /home/student/my-project/.git/",
          },
          {
            prefix: "~",
            command: "git remote add origin https://github.com/student/my-project.git",
            isPrompt: true,
          },
        ],
      },
      concepts: [
        {
          id: "01",
          label: "The .git Folder",
          description:
            "Git stores every object, reference, and configuration file inside this hidden directory.",
        },
        {
          id: "02",
          label: "Remote Origins",
          description:
            "A pointer to a repository hosted elsewhere. `origin` is the conventional name for your default remote.",
        },
      ],
      challenge: {
        title: "Clone & Inspect",
        description: "Clone an existing repository and list its remotes.",
      },
      history: [
        { hash: "8c3d1e2", message: "feat: add repo setup lesson", isCurrent: true },
        { hash: "f4d92a1", message: "feat: add terminal UI" },
      ],
    },
  },
  {
    id: "staging-commits",
    number: 3,
    title: "Staging & Commits",
    description: "Capture snapshots of your work with clear, atomic commits.",
    content: {
      heading: "Write Atomic Commits",
      subheading:
        "A commit is a snapshot, not a difference. Learn to stage deliberately and write messages that explain why, not just what.",
      terminal: {
        title: "terminal — git-commit",
        lines: [
          { prefix: "~", command: "git add src/routes/index.tsx" },
          { prefix: "~", command: 'git commit -m "feat: add obsidian terminal theme"' },
          {
            prefix: "",
            command: "",
            output:
              "[main 9b2c4e1] feat: add obsidian terminal theme\n 1 file changed, 142 insertions(+), 12 deletions(-)",
          },
          { prefix: "~", command: "git log --oneline", isPrompt: true },
        ],
      },
      concepts: [
        {
          id: "01",
          label: "Atomic Commits",
          description:
            "Each commit should represent a single logical change. Easier to review, revert, and bisect.",
        },
        {
          id: "02",
          label: "Commit Messages",
          description:
            "Use an imperative verb and a concise summary. Treat the message as documentation for future you.",
        },
      ],
      challenge: {
        title: "Commit Your First Change",
        description: "Create a file, stage it, and commit with a descriptive message.",
      },
      history: [
        { hash: "9b2c4e1", message: "feat: add obsidian terminal theme", isCurrent: true },
        { hash: "8c3d1e2", message: "feat: add repo setup lesson" },
      ],
    },
  },
  {
    id: "remote-pushing",
    number: 4,
    title: "Remote & Pushing",
    description: "Share your work and synchronize with collaborators.",
    content: {
      heading: "Sync with Remote Repositories",
      subheading:
        "Pushing sends your local commits to a remote. Pulling fetches new changes and integrates them into your local branch.",
      terminal: {
        title: "terminal — git-push",
        lines: [
          { prefix: "~", command: "git status" },
          {
            prefix: "",
            command: "",
            output: "On branch main\nYour branch is ahead of 'origin/main' by 2 commits.",
          },
          { prefix: "~", command: "git push origin main" },
          {
            prefix: "",
            command: "",
            output:
              "Enumerating objects: 9, done.\nWriting objects: 100% (9/9), 1.42 KiB/s, done.\nTo github.com:student/my-project.git\n   9b2c4e1..d7a1f3e  main -> main",
          },
          { prefix: "~", command: "git pull --rebase", isPrompt: true },
        ],
      },
      concepts: [
        {
          id: "01",
          label: "Push",
          description: "Upload your local branch commits to a remote repository.",
        },
        {
          id: "02",
          label: "Pull with Rebase",
          description:
            "Fetch remote changes and replay your local commits on top for a cleaner history.",
        },
      ],
      challenge: {
        title: "Publish Your Branch",
        description: "Push your local main branch to a remote origin for the first time.",
      },
      history: [
        { hash: "d7a1f3e", message: "feat: add remote collaboration lesson", isCurrent: true },
        { hash: "9b2c4e1", message: "feat: add obsidian terminal theme" },
      ],
    },
  },
];

export const cliCommands = [
  { command: "git init", description: "Initialize a new Git repository in the current directory." },
  { command: "git clone <url>", description: "Copy a remote repository to your local machine." },
  { command: "git status", description: "Show which files are modified, staged, or untracked." },
  { command: "git add <file>", description: "Stage changes in a file for the next commit." },
  {
    command: 'git commit -m "<msg>"',
    description: "Save staged changes as a new snapshot with a message.",
  },
  { command: "git log", description: "Display the commit history of the current branch." },
  { command: "git branch", description: "List, create, or delete branches." },
  { command: "git checkout <branch>", description: "Switch to a different branch." },
  {
    command: "git merge <branch>",
    description: "Combine the specified branch into the current branch.",
  },
  {
    command: "git pull",
    description: "Fetch remote changes and merge them into the current branch.",
  },
  { command: "git push", description: "Upload local commits to the remote repository." },
  { command: "git remote -v", description: "List configured remote repositories." },
];
