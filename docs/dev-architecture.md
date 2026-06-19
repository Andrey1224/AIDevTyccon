# Developer Architecture

This document details the architectural boundaries and separations of concern for AI Dev Tycoon.

## Architectural Boundaries

### 1. React is UI Only

React components (found in `src/app` and `src/features`) must act strictly as presentation and user input handlers. They read state from the Zustand store and trigger store actions, but contain no core game calculations or business rules.

### 2. Game Logic lives in Systems

All game business rules (e.g., advancing weeks, calculating project progress, processing events) live inside pure JavaScript/TypeScript files in [src/game/systems/](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/systems/).

- **Rule**: There must be **no React imports** (like hooks or JSX elements) inside `src/game/systems/`. They should be framework-agnostic.
- **Testing**: Every game system must have a corresponding test suite (e.g., `timeSystem.test.ts`) validating its behaviour under all boundaries.

### 3. Game State lives in state/

All state structural definitions and type schemas live in [src/game/state/](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/state/).

- [types.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/state/types.ts) houses all game models (e.g., `GameState`, `CompanyState`, `LlmProject`).
- [initialState.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/state/initialState.ts) generates fresh default state values.

### 4. Zustand is a State/Action Store

The Zustand store in [src/game/store/gameStore.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/store/gameStore.ts) is responsible only for housing the state and dispatching actions. The actions must call system update functions (e.g., calling `advanceWeek(state)` during `tick()`) rather than computing updates internally.

### 5. Shared Formulas live in formulas/

Pure mathematical algorithms, limit operations, and scaling computations live in [src/game/formulas/](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/formulas/). Examples:

- [clamp](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/formulas/clamp.ts): Keeps metrics bounded.

### 6. Constants live in constants.ts

All magic numbers, defaults, costs, and limits must be declared and imported from [src/game/constants.ts](file:///Users/andriinepodymka/Desktop/AIDevTyccon/ai-dev-tycoon/src/game/constants.ts). Do not hardcode numbers within systems or UI components.
