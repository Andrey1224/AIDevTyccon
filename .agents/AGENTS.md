# Repository Guidelines

## Agent Instructions

When starting any task in this repository, you MUST read the following files in order first:

1. **[docs/llms.txt](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/llms.txt)** — Source of truth index of all project docs.
2. **[memory-bank/activeContext.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/activeContext.md)** — Current session goals, status, and next steps.
3. **[memory-bank/systemPatterns.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/systemPatterns.md)** — Architecture, code style guidelines, patterns, and anti-patterns.

**Important Constraints**:

- **No Gameplay Mechanics**: Do NOT add any gameplay systems (projects, benchmarks, events, hiring, etc.) until `docs/phase-2-core-loop-spec.md` is populated and approved.
- **Branching Strategy**: Do NOT commit or push directly to `main`. Always work against `dev` or `feature/*` branches.

## Definition of Done (DoD)

Before concluding your work or declaring a task complete, you MUST:

1. Run `npm run verify` to ensure type checking, linting, formatting checks, tests, and bundling are 100% clean.
2. Update the Memory Bank:
   - **[memory-bank/activeContext.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/activeContext.md)**: Document what you changed, current status, and next steps.
   - **[memory-bank/progress.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/progress.md)**: Move completed items to done, update milestones.
   - **[memory-bank/systemPatterns.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/memory-bank/systemPatterns.md)**: If any new code conventions, helper functions, or state patterns were introduced.

## Tech Stack & Architecture

- **Core**: React 19 (Vite), TypeScript.
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin).
- **State Management**: Zustand (defined in `src/game/store/gameStore.ts`).
- **Tests**: Vitest for unit testing.
- **Game Engine**: A tick-based system (`tick()`) that advances game time and processes weekly changes (burn rate, project progress, etc.). See [docs/dev-architecture.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/dev-architecture.md) for structural boundaries.

## Coding Conventions

- **State Mutations**: Always treat game state as immutable. Use deep copies (like `structuredClone`) or immutable state libraries when updating.
- **Constants**: Import global variables (calendar lengths, default costs, metric boundaries) from [src/game/constants.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/constants.ts). Do not hardcode them.
- **Formulas**: Write pure, mathematical logic in `src/game/formulas/`. Use the [clamp](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/formulas/clamp.ts) function to keep attributes bounded.
