# AI Dev Tycoon Backlog

This file stores future work, reminders, research items, and non-active project ideas.

It does not replace:

- `memory-bank/activeContext.md` — current working context
- `memory-bank/progress.md` — completed work and milestones
- `docs/phase-2-core-loop-spec.md` — required gameplay specification for Phase 2
- GitHub Issues — future task tracking when the project grows

AI agents must not implement backlog items unless a human explicitly assigns them as the current task.

---

## Current Blockers

### BL-001 — Fill Phase 2 Core Loop Spec

**Status:** Blocked
**Priority:** Critical
**Why:** Gameplay mechanics must not be implemented until the Phase 2 core loop is specified.
**When to do:** Before any LLM project, benchmark, event, or save/load gameplay work.
**Notes:** Fill `docs/phase-2-core-loop-spec.md` with player flow, screens, starting values, first project, benchmark, first event, and done criteria.

---

## Next After Phase 2 Spec

### BL-002 — First LLM Project System

**Status:** Next
**Priority:** High
**Why:** This is the first real gameplay system needed for the prototype loop.
**When to do:** After `docs/phase-2-core-loop-spec.md` is complete.
**Notes:** Live in `src/game/systems` and include tests.

### BL-003 — Benchmark System

**Status:** Next
**Priority:** High
**Why:** The player needs feedback after completing the first LLM project.
**When to do:** After the first project system exists.
**Notes:** Should be deterministic enough for tests.

### BL-004 — First Story Event

**Status:** Next
**Priority:** High
**Why:** Story choices are part of the intended core loop.
**When to do:** After the first benchmark reveal.
**Notes:** Must not be invented without the Phase 2 spec.

### BL-005 — Save/Load Prototype

**Status:** Next
**Priority:** Medium
**Why:** The game will need persistent state as the prototype grows.
**When to do:** After the first playable loop works.
**Notes:** Start with local browser storage before any cloud saves.

---

## Later Infrastructure

### BL-006 — Playwright Smoke Tests

**Status:** Later
**Priority:** Medium
**Why:** UI flows should be protected once the dashboard has real interactions.
**When to do:** After the first playable browser loop exists.
**Notes:** Start with app loads, dashboard renders, next-week action works, and no console errors.

### BL-007 — Coverage Thresholds for Game Systems

**Status:** Later
**Priority:** Medium
**Why:** Core game logic should not regress as systems grow.
**When to do:** After several systems exist.
**Notes:** Consider requiring coverage for `src/game/systems` and `src/game/formulas`.

### BL-008 — Zod Schemas for Game Data

**Status:** Later
**Priority:** High
**Why:** Events, products, research nodes, competitors, and other game data need validation.
**When to do:** When game data files become real content sources.
**Notes:** Validate data structure before runtime usage.

### BL-009 — ESLint Import Boundaries

**Status:** Later
**Priority:** Medium
**Why:** The project should prevent architecture drift between game logic and UI.
**When to do:** When the folder structure becomes larger.
**Notes:** Enforce that `src/game/systems` does not import React or UI code.

### BL-010 — ADR Documents

**Status:** Later
**Priority:** Low
**Why:** Important technical decisions should be easy to understand later.
**When to do:** When major architecture choices become stable.
**Notes:** Possible ADRs: Vite/React, Zustand, browser-first, Tauri vs Electron.

### BL-011 — Dependabot

**Status:** Later
**Priority:** Low
**Why:** Dependencies should receive security and maintenance updates.
**When to do:** After the project stabilizes.
**Notes:** Keep update cadence conservative to avoid noise.

---

## Later Gameplay Systems

### BL-012 — Competitor System

**Status:** Later
**Priority:** Medium
**Why:** Competitors are part of the tycoon pressure loop.
**When to do:** After the first playable loop is fun.
**Notes:** Do not implement before core loop validation.

### BL-013 — Hiring / Staff System

**Status:** Later
**Priority:** Medium
**Why:** Hiring can expand strategic depth.
**When to do:** After project, benchmark, and event systems are stable.
**Notes:** Avoid adding complexity too early.

### BL-014 — Research Tree

**Status:** Later
**Priority:** Medium
**Why:** Research progression can support long-term goals.
**When to do:** After multiple project cycles exist.
**Notes:** Needs careful balance and data validation.

---

## Later Product / Release

### BL-015 — Visual Style Guide

**Status:** Later
**Priority:** High
**Why:** The game should not look like a generic SaaS dashboard.
**When to do:** Before polishing UI screens heavily.
**Notes:** Define colors, panels, event modals, benchmark reveal style, dashboard mood, and typography direction.

### BL-016 — Tauri vs Electron Desktop Spike

**Status:** Research
**Priority:** Medium
**Why:** The final desktop/Steam packaging choice is not final.
**When to do:** After the browser prototype is useful.
**Notes:** Try Tauri first; keep Electron as fallback.

### BL-017 — Steamworks / Overlay / Cloud Save Spike

**Status:** Research
**Priority:** Medium
**Why:** Steam support may affect the desktop wrapper choice.
**When to do:** Before committing to a desktop release stack.
**Notes:** Test overlay, achievements, and save behavior separately.

---

## Parking Lot

Use this section for ideas that are interesting but not assigned, not validated, or not important yet.

- Mobile version
- Switch version
- Animated office view
- Advanced market simulation
- Publisher pitch deck
- Trailer concept
