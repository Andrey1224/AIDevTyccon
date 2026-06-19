import { describe, expect, it } from "vitest";
import { clamp } from "./clamp";

describe("clamp", () => {
  it("keeps a value within boundaries when it is between min and max", () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });

  it("clamps a value to min if it is below min", () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  it("clamps a value to max if it is above max", () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  it("handles boundaries exactly", () => {
    expect(clamp(0, 0, 100)).toBe(0);
    expect(clamp(100, 0, 100)).toBe(100);
  });
});
