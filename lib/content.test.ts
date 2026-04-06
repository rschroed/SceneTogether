import { describe, expect, it } from "vitest";

import { getGroupShellData } from "./content";

describe("getGroupShellData", () => {
  it("returns seeded group data for a known slug", () => {
    const group = getGroupShellData("friday-night");

    expect(group?.groupName).toBe("Friday Night Crew");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getGroupShellData("unknown-group")).toBeUndefined();
  });
});
