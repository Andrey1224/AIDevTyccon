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
