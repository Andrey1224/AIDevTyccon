Отлично. Теперь настраиваем базовый скелет.

В той же папке `ai-dev-tycoon` выполни:

```bash
npm pkg set scripts.test="vitest"
npm pkg set scripts.test:watch="vitest --watch"
```

Теперь создай структуру:

```bash
mkdir -p src/app
mkdir -p src/game/state
mkdir -p src/game/store
mkdir -p src/game/systems
mkdir -p src/game/formulas
mkdir -p src/game/data
mkdir -p src/features/dashboard
mkdir -p src/features/project
mkdir -p src/features/benchmark
mkdir -p src/features/events
mkdir -p src/shared/ui
mkdir -p docs
```

## 1. Обнови `vite.config.ts`

Открой файл `vite.config.ts` и замени на:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 2. Обнови `src/index.css`

Оставь там только:

```css
@import "tailwindcss";
```

## 3. Создай `src/game/state/types.ts`

```ts
export type GameTime = {
  year: number;
  month: number;
  week: number;
};

export type CompanyState = {
  name: string;
  cash: number;
  publicTrust: number;
  teamMorale: number;
  regulatoryHeat: number;
  researchScore: number;
};

export type LlmProjectPhase =
  | "architecture"
  | "training"
  | "alignment"
  | "deployment"
  | "completed";

export type LlmProject = {
  id: string;
  name: string;
  phase: LlmProjectPhase;
  progress: number;
  capabilityPoints: number;
  safetyPoints: number;
  speedPoints: number;
  costEfficiencyPoints: number;
};

export type GameState = {
  time: GameTime;
  company: CompanyState;
  activeProject: LlmProject | null;
  completedProjects: LlmProject[];
  eventsSeen: string[];
  flags: Record<string, boolean>;
};
```

## 4. Создай `src/game/state/initialState.ts`

```ts
import type { GameState } from "./types";

export function createInitialGameState(companyName = "OpenMind"): GameState {
  return {
    time: {
      year: 1,
      month: 1,
      week: 1,
    },

    company: {
      name: companyName,
      cash: 100_000,
      publicTrust: 60,
      teamMorale: 70,
      regulatoryHeat: 10,
      researchScore: 0,
    },

    activeProject: null,
    completedProjects: [],
    eventsSeen: [],
    flags: {},
  };
}
```

## 5. Создай `src/game/systems/timeSystem.ts`

```ts
import type { GameState } from "../state/types";

const WEEKS_PER_MONTH = 4;
const MONTHS_PER_YEAR = 12;
const WEEKLY_BURN = 2_500;

export function advanceWeek(state: GameState): GameState {
  const next: GameState = structuredClone(state);

  next.time.week += 1;

  if (next.time.week > WEEKS_PER_MONTH) {
    next.time.week = 1;
    next.time.month += 1;
  }

  if (next.time.month > MONTHS_PER_YEAR) {
    next.time.month = 1;
    next.time.year += 1;
  }

  next.company.cash -= WEEKLY_BURN;

  return next;
}
```

## 6. Создай `src/game/store/gameStore.ts`

```ts
import { create } from "zustand";
import { createInitialGameState } from "../state/initialState";
import type { GameState } from "../state/types";
import { advanceWeek } from "../systems/timeSystem";

type GameStore = {
  state: GameState;
  resetGame: () => void;
  tick: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  state: createInitialGameState(),

  resetGame: () => {
    set({
      state: createInitialGameState(),
    });
  },

  tick: () => {
    const current = get().state;
    const next = advanceWeek(current);

    set({
      state: next,
    });
  },
}));
```

## 7. Создай `src/app/App.tsx`

```tsx
import { useGameStore } from "../game/store/gameStore";

export function App() {
  const game = useGameStore((store) => store.state);
  const tick = useGameStore((store) => store.tick);
  const resetGame = useGameStore((store) => store.resetGame);

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-100">
      <section className="mx-auto max-w-5xl space-y-6">
        <header>
          <p className="text-sm text-slate-400">AI Dev Tycoon Prototype</p>
          <h1 className="text-3xl font-bold">{game.company.name}</h1>
        </header>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            label="Date"
            value={`Y${game.time.year} M${game.time.month} W${game.time.week}`}
          />
          <StatCard label="Cash" value={`$${game.company.cash.toLocaleString()}`} />
          <StatCard label="Trust" value={game.company.publicTrust} />
          <StatCard label="Morale" value={game.company.teamMorale} />
        </div>

        <div className="flex gap-3">
          <button
            onClick={tick}
            className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400"
          >
            Next Week
          </button>

          <button
            onClick={resetGame}
            className="rounded-lg bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700"
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}

function StatCard(props: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">{props.label}</p>
      <p className="mt-1 text-2xl font-bold">{props.value}</p>
    </div>
  );
}
```

## 8. Обнови `src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## 9. Создай первый тест

`src/game/systems/timeSystem.test.ts`

```ts
import { describe, expect, it } from "vitest";
import { createInitialGameState } from "../state/initialState";
import { advanceWeek } from "./timeSystem";

describe("advanceWeek", () => {
  it("advances time by one week", () => {
    const state = createInitialGameState();
    const next = advanceWeek(state);

    expect(next.time.week).toBe(2);
  });

  it("subtracts weekly burn from cash", () => {
    const state = createInitialGameState();
    const next = advanceWeek(state);

    expect(next.company.cash).toBe(97_500);
  });
});
```

## 10. Проверь

```bash
npm run test
npm run dev
```

сли всё ок, в браузере на `localhost:5173` должен быть простой dashboard, кнопка **Next Week** должна двигать время и уменьшать деньги.
11111
