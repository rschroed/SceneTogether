import { describe, expect, it } from "vitest";

import {
  clearViewerIdentity,
  getViewerIdentityStorageKey,
  normalizeDisplayName,
  readViewerIdentity,
  validateViewerDisplayName,
  writeViewerIdentity,
} from "./viewer-identity";

function createMemoryStorage() {
  const values = new Map<string, string>();

  return {
    getItem(key: string) {
      return values.has(key) ? values.get(key)! : null;
    },
    removeItem(key: string) {
      values.delete(key);
    },
    setItem(key: string, value: string) {
      values.set(key, value);
    },
  };
}

describe("viewer identity helpers", () => {
  it("normalizes repeated whitespace and trims edges", () => {
    expect(normalizeDisplayName("  Riley   West  ")).toBe("Riley West");
  });

  it("rejects display names that are too short", () => {
    const result = validateViewerDisplayName(" a ");

    expect(result.identity).toBeUndefined();
    expect(result.error).toBe("Use at least 2 characters.");
  });

  it("rejects display names that are too long", () => {
    const result = validateViewerDisplayName("averylongdisplaynamebeyondlimit");

    expect(result.identity).toBeUndefined();
    expect(result.error).toBe("Keep your name to 24 characters or fewer.");
  });

  it("persists and restores normalized identities by slug", () => {
    const storage = createMemoryStorage();
    const validation = validateViewerDisplayName("  Riley   West ");

    expect(validation.identity).toEqual({ displayName: "Riley West" });
    expect(validation.persist?.("friday-night", storage)).toBe(true);
    expect(storage.getItem(getViewerIdentityStorageKey("friday-night"))).toBe('{"displayName":"Riley West"}');
    expect(readViewerIdentity("friday-night", storage)).toEqual({ displayName: "Riley West" });
  });

  it("keeps slugged identities isolated from one another", () => {
    const storage = createMemoryStorage();

    writeViewerIdentity("friday-night", { displayName: "Riley" }, storage);
    writeViewerIdentity("saturday-night", { displayName: "Jordan" }, storage);

    expect(readViewerIdentity("friday-night", storage)).toEqual({ displayName: "Riley" });
    expect(readViewerIdentity("saturday-night", storage)).toEqual({ displayName: "Jordan" });
  });

  it("clears a saved identity by slug", () => {
    const storage = createMemoryStorage();

    writeViewerIdentity("friday-night", { displayName: "Riley" }, storage);
    expect(clearViewerIdentity("friday-night", storage)).toBe(true);
    expect(readViewerIdentity("friday-night", storage)).toBeNull();
  });

  it("gracefully handles missing storage", () => {
    expect(writeViewerIdentity("friday-night", { displayName: "Riley" }, null)).toBe(false);
    expect(readViewerIdentity("friday-night", null)).toBeNull();
    expect(clearViewerIdentity("friday-night", null)).toBe(false);
  });
});
