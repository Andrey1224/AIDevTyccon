import { WEEKS_PER_MONTH, MONTHS_PER_YEAR, DEFAULT_WEEKLY_BURN } from "../constants";
import type { GameState } from "../state/types";

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

  next.company.cash -= DEFAULT_WEEKLY_BURN;

  return next;
}

