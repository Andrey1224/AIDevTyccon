# AI Dev Tycoon

AI Dev Tycoon is a browser-first management/tycoon prototype about building an AI company. The current goal is to prepare the safe technical foundation before implementing Phase 2 core loop gameplay.

---

## Current Status

- **Project Scaffold**: Ready (Vite, React, Zustand, Tailwind v4).
- **Safe Engine Foundation**: Ready (centralized constants, clamp formula helpers, save file interfaces, and type-safe test state builders).
- **Memory Bank**: Ready (AI session context persistence standard adopted).
- **Quality Gates**: Ready (automated eslint, prettier, typescript checks, husky pre-commit hooks, lint-staged, and GitHub Actions CI).
- **Team Workflow Docs**: Ready (PR templates, architecture boundaries, and contributing guidelines established).
- **Phase 2 Gameplay**: Blocked and will not be implemented until [docs/phase-2-core-loop-spec.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/phase-2-core-loop-spec.md) is filled and approved.

---

## Tech Stack

- **Bundler & Dev Server**: Vite
- **UI Library**: React 19
- **Programming Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS v4
- **Testing Framework**: Vitest
- **Schema Validation**: Zod
- **Linter & Formatter**: ESLint, Prettier
- **Git Hook Utilities**: Husky, lint-staged
- **CI/CD Platform**: GitHub Actions

---

## Getting Started

### Installation

Install dependencies using:

```bash
npm install
```

### Local Development

Start the development server:

```bash
npm run dev
```

---

## Quality Checks

Run the verification pipeline to ensure everything is clean before pushing or committing:

```bash
npm run verify
```

The `verify` command runs:

- **typecheck**: Verifies TypeScript compiler correctness (`tsc --noEmit`).
- **lint**: Evaluates code quality and prevents warning accumulation (`eslint . --max-warnings=0`).
- **format check**: Verifies code formatting style with Prettier.
- **tests**: Runs Vitest unit tests in one-shot mode (`vitest run`).
- **build**: Validates code compilation and bundles assets (`vite build`).

---

## Branch Workflow

We follow a structured branch model to maintain project stability:

- **`main`**: Stable production-ready branch. Direct commits/pushes are forbidden.
- **`dev`**: Integration branch. All features are merged here first.
- **`feature/*`**: Task-specific branches (e.g., `feature/time-constants`).
- Merge `dev` to `main` only through Pull Request once GitHub Actions CI status checks pass cleanly.

---

## Documentation Map

- [docs/llms.txt](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/llms.txt): Source-of-truth index of all project docs.
- [CONTRIBUTING.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/CONTRIBUTING.md): Quick start instructions and git workflow details.
- [docs/dev-architecture.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/dev-architecture.md): Architectural boundaries and boundaries separating UI from engine logic.
- [docs/phase-2-core-loop-spec.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/phase-2-core-loop-spec.md): Specification template for the Phase 2 core gameplay loop.
- [memory-bank/activeContext.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/activeContext.md): Active goals, current status, and planned next steps.
- [memory-bank/systemPatterns.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/systemPatterns.md): Directory organization and coding conventions.
- [memory-bank/progress.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/progress.md): Milestone logs and technical debt tracker.
- [.agents/AGENTS.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/.agents/AGENTS.md): Repository instructions and Definition of Done for AI assistants.

---

## AI Agent Rules

- **Read first**: AI agents must read [.agents/AGENTS.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/.agents/AGENTS.md) and the memory-bank files before typing any code.
- **Strict boundaries**: Do not implement any gameplay mechanics (projects, benchmarks, story events, etc.) until the Phase 2 Spec is populated and approved.
- **Verify work**: Run `npm run verify` to confirm a clean build and green tests before finalizing a turn.
- **Update memory**: Keep the memory-bank documentation up-to-date with contextual shifts.
