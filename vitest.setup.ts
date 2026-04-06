import React from "react";

import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.mock("next/link", () => ({
  default: function MockLink({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
    return React.createElement("a", { href, ...props }, children);
  },
}));

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
