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
