export type ViewerIdentity = {
  displayName: string;
};

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

type ValidationResult =
  | {
      error: string;
      identity?: never;
      persist?: never;
    }
  | {
      error?: never;
      identity: ViewerIdentity;
      persist: (slug: string, storage?: StorageLike | null) => boolean;
    };

const viewerIdentityKeyPrefix = "scene-together.viewer";
const minDisplayNameLength = 2;
const maxDisplayNameLength = 24;

export function getViewerIdentityStorageKey(slug: string) {
  return `${viewerIdentityKeyPrefix}.${slug}`;
}

export function normalizeDisplayName(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function validateViewerDisplayName(value: string): ValidationResult {
  const displayName = normalizeDisplayName(value);

  if (displayName.length < minDisplayNameLength) {
    return { error: "Use at least 2 characters." };
  }

  if (displayName.length > maxDisplayNameLength) {
    return { error: "Keep your name to 24 characters or fewer." };
  }

  const identity = { displayName };

  return {
    identity,
    persist: (slug: string, storage = getBrowserStorage()) => writeViewerIdentity(slug, identity, storage),
  };
}

export function getBrowserStorage(): StorageLike | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readViewerIdentity(slug: string, storage = getBrowserStorage()): ViewerIdentity | null {
  if (!storage) {
    return null;
  }

  try {
    const rawValue = storage.getItem(getViewerIdentityStorageKey(slug));

    if (!rawValue) {
      return null;
    }

    const parsedValue = JSON.parse(rawValue);

    if (!parsedValue || typeof parsedValue.displayName !== "string") {
      return null;
    }

    const validation = validateViewerDisplayName(parsedValue.displayName);

    return validation.identity ?? null;
  } catch {
    return null;
  }
}

export function writeViewerIdentity(slug: string, identity: ViewerIdentity, storage = getBrowserStorage()) {
  if (!storage) {
    return false;
  }

  const validation = validateViewerDisplayName(identity.displayName);

  if (!validation.identity) {
    return false;
  }

  try {
    storage.setItem(getViewerIdentityStorageKey(slug), JSON.stringify(validation.identity));
    return true;
  } catch {
    return false;
  }
}

export function clearViewerIdentity(slug: string, storage = getBrowserStorage()) {
  if (!storage) {
    return false;
  }

  try {
    storage.removeItem(getViewerIdentityStorageKey(slug));
    return true;
  } catch {
    return false;
  }
}
