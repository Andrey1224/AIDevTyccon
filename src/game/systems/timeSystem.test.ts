import { describe, expect, it } from "vitest";
import { WEEKS_PER_MONTH, MONTHS_PER_YEAR, DEFAULT_WEEKLY_BURN } from "../constants";
import { createTestState } from "../test/createTestState";
import { advanceWeek } from "./timeSystem";

describe("advanceWeek", () => {
  it("advances time by one week", () => {
    const state = createTestState({ time: { year: 1, month: 1, week: 1 } });
    const next = advanceWeek(state);

    expect(next.time.week).toBe(2);
  });

  it("subtracts DEFAULT_WEEKLY_BURN from cash", () => {
    const state = createTestState({ company: { cash: 100_000 } });
    const next = advanceWeek(state);

    expect(next.company.cash).toBe(100_000 - DEFAULT_WEEKLY_BURN);
  });

  it("wraps week to next month correctly", () => {
    const state = createTestState({ time: { year: 1, month: 1, week: WEEKS_PER_MONTH } });
    const next = advanceWeek(state);

    expect(next.time.week).toBe(1);
    expect(next.time.month).toBe(2);
  });

  it("wraps month to next year correctly", () => {
    const state = createTestState({
      time: { year: 1, month: MONTHS_PER_YEAR, week: WEEKS_PER_MONTH },
    });
    const next = advanceWeek(state);

    expect(next.time.week).toBe(1);
    expect(next.time.month).toBe(1);
    expect(next.time.year).toBe(2);
  });
});
