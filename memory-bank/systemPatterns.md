# System Patterns

## Architecture

- **Framework**: React 19 (bundled with Vite), TypeScript (strict).
- **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin).
- **State Management**: Zustand. State is defined inside [src/game/store/gameStore.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/store/gameStore.ts) and is driven by an immutable tick pattern.
- **Testing**: Vitest for unit testing, co-located in `*.test.ts` files.
- **System Separation**: Pure TS systems calculate state transitions; React components render UI and dispatch events. See detailed guidelines in [docs/dev-architecture.md](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/docs/dev-architecture.md).

## Project Structure

```
.github/        # PR templates and GitHub CI Actions configurations
src/
  app/          # Application entrypoint & layout
  game/         # Game logic engine
    state/      # Type declarations & initial state definitions
    store/      # Zustand store wiring
    systems/    # Tick/update loop systems (e.g., time system)
    formulas/   # Pure mathematical formulas (e.g., clamp)
    test/       # Common unit test helpers
    data/       # Static game data (TBD)
  features/     # UI features
    dashboard/  # Main control center UI
    project/    # LLM training/development UI (TBD)
    benchmark/  # Model evaluation UI (TBD)
    events/     # Story triggers and notifications UI (TBD)
  shared/       # Shared UI components & utils
docs/           # Design specifications and design documents
memory-bank/    # AI agent session memory bank
```

## Conventions

- **State Immutability**: All states returned by systems must be new objects. Use structured cloning or object spreading.
- **Shared Constants**: Keep all default variables, limits, and magic numbers inside [src/game/constants.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/constants.ts). Do not write inline magic numbers.
- **Mathematical Boundness**: Use the [clamp](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/formulas/clamp.ts) formula helper for updating stats like morale, trust, or progress to keep them in safe boundaries (e.g., between `MIN_METRIC_VALUE` and `MAX_METRIC_VALUE`).
- **TypeScript Strictness**: No implicit `any`. Always use full type definitions.

## Quality Gates & Verification

- **Linting & Formatting**: ESLint Flat config in [eslint.config.js](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/eslint.config.js) checks code correctness (React hook bugs, strict types). Code formatting is styled via Prettier [.prettierrc](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/.prettierrc).
- **Type Checking**: Running `npm run typecheck` (`tsc --noEmit`) validates compiler constraints without building files.
- **Git Hooks**: Pre-commit hooks are handled by Husky [.husky/pre-commit](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/.husky/pre-commit) and `lint-staged` in [package.json](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/package.json), running eslint and prettier on staged files.
- **Continuous Integration**: The GitHub Actions pipeline [.github/workflows/ci.yml](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/.github/workflows/ci.yml) executes the combined verification test suite (`npm run verify`) on every push to main/dev or PR.
