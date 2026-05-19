import { describe, it, expect } from "vitest";
import { getRank, RANK_THRESHOLDS } from "./scoring";

describe("getRank", () => {
  it("returns grandmaster for 22-23", () => {
    expect(getRank(22).grade).toBe("S");
    expect(getRank(23).grade).toBe("S");
    expect(getRank(22).id).toBe("grandmaster");
  });

  it("returns master for 20-21", () => {
    expect(getRank(20).grade).toBe("A");
    expect(getRank(21).grade).toBe("A");
  });

  it("returns path for 16-19", () => {
    expect(getRank(16).grade).toBe("B");
    expect(getRank(19).grade).toBe("B");
  });

  it("returns step for 11-15", () => {
    expect(getRank(11).grade).toBe("C");
    expect(getRank(15).grade).toBe("C");
  });

  it("returns egg for 0-10", () => {
    expect(getRank(0).grade).toBe("D");
    expect(getRank(10).grade).toBe("D");
  });

  it("covers all 23 possible scores without gaps", () => {
    for (let i = 0; i <= 23; i++) {
      const rank = getRank(i);
      expect(rank).toBeDefined();
      expect(["S", "A", "B", "C", "D"]).toContain(rank.grade);
    }
  });
});
