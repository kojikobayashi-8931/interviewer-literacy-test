import { describe, it, expect } from "vitest";
import { getRank, RANK_THRESHOLDS } from "./scoring";

describe("getRank", () => {
  it("returns grandmaster for 28-29", () => {
    expect(getRank(28).grade).toBe("S");
    expect(getRank(29).grade).toBe("S");
    expect(getRank(28).id).toBe("grandmaster");
  });

  it("returns master for 25-27", () => {
    expect(getRank(25).grade).toBe("A");
    expect(getRank(27).grade).toBe("A");
  });

  it("returns path for 20-24", () => {
    expect(getRank(20).grade).toBe("B");
    expect(getRank(24).grade).toBe("B");
  });

  it("returns step for 15-19", () => {
    expect(getRank(15).grade).toBe("C");
    expect(getRank(19).grade).toBe("C");
  });

  it("returns egg for 0-14", () => {
    expect(getRank(0).grade).toBe("D");
    expect(getRank(14).grade).toBe("D");
  });

  it("covers all 29 possible scores without gaps", () => {
    for (let i = 0; i <= 29; i++) {
      const rank = getRank(i);
      expect(rank).toBeDefined();
      expect(["S", "A", "B", "C", "D"]).toContain(rank.grade);
    }
  });
});
