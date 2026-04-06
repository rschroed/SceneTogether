import { createElement } from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { getGroupShellData } from "@/lib/content";
import { getViewerIdentityStorageKey } from "@/lib/viewer-identity";

import { GroupBoard } from "./GroupBoard";

const fridayNight = getGroupShellData("friday-night")!;

function renderGroupBoard(slug = fridayNight.slug) {
  const group = slug === fridayNight.slug ? fridayNight : { ...fridayNight, slug, groupName: "Saturday Crew" };

  return render(createElement(GroupBoard, { group }));
}

describe("GroupBoard identity flow", () => {
  it("renders only the shared-link identity surface", async () => {
    renderGroupBoard();

    expect(await screen.findByText("Add your name to this shared link")).toBeTruthy();
    expect(screen.queryByText("Pick from the real options")).toBeNull();
    expect(screen.queryByText("Lock the current plan")).toBeNull();
    expect(screen.queryByText("Why the room is leaning this way")).toBeNull();
    expect(screen.queryByText("Can Neon Rush become the plan?")).toBeNull();
  });

  it("shows the name prompt on first visit", async () => {
    renderGroupBoard();

    expect(await screen.findByText("Add your name to this shared link")).toBeTruthy();
  });

  it("stores and restores a valid display name on the same slug", async () => {
    const user = userEvent.setup();
    const { unmount } = renderGroupBoard();

    const input = await screen.findByRole("textbox");
    await user.type(input, "  Riley   West ");
    await user.click(screen.getByRole("button", { name: "Save name" }));

    expect(await screen.findByText("Browsing as Riley West")).toBeTruthy();
    expect(window.localStorage.getItem(getViewerIdentityStorageKey("friday-night"))).toBe('{"displayName":"Riley West"}');

    unmount();

    renderGroupBoard();

    expect(await screen.findByText("Browsing as Riley West")).toBeTruthy();
  });

  it("rejects invalid names with inline validation", async () => {
    const user = userEvent.setup();
    renderGroupBoard();

    const input = await screen.findByRole("textbox");
    await user.type(input, "A");
    await user.click(screen.getByRole("button", { name: "Save name" }));

    expect(await screen.findByText("Use at least 2 characters.")).toBeTruthy();
    expect(window.localStorage.getItem(getViewerIdentityStorageKey("friday-night"))).toBeNull();
  });

  it("updates a stored name when the visitor changes it", async () => {
    window.localStorage.setItem(getViewerIdentityStorageKey("friday-night"), '{"displayName":"Riley"}');
    const user = userEvent.setup();

    renderGroupBoard();

    expect(await screen.findByText("Browsing as Riley")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Change name" }));

    const input = await screen.findByRole("textbox");
    await user.clear(input);
    await user.type(input, "Jordan");
    await user.click(screen.getByRole("button", { name: "Update name" }));

    expect(await screen.findByText("Browsing as Jordan")).toBeTruthy();
    expect(window.localStorage.getItem(getViewerIdentityStorageKey("friday-night"))).toBe('{"displayName":"Jordan"}');
  });

  it("clears the stored name and returns to the first-visit prompt", async () => {
    window.localStorage.setItem(getViewerIdentityStorageKey("friday-night"), '{"displayName":"Riley"}');
    const user = userEvent.setup();

    renderGroupBoard();

    expect(await screen.findByText("Browsing as Riley")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Clear" }));

    expect(await screen.findByText("Add your name to this shared link")).toBeTruthy();
    expect(window.localStorage.getItem(getViewerIdentityStorageKey("friday-night"))).toBeNull();
  });

  it("keeps identities isolated by slug", async () => {
    window.localStorage.setItem(getViewerIdentityStorageKey("friday-night"), '{"displayName":"Riley"}');

    renderGroupBoard("saturday-night");

    expect(await screen.findByText("Add your name to this shared link")).toBeTruthy();
  });

  it("keeps the ready identity state once identity exists", async () => {
    const user = userEvent.setup();
    renderGroupBoard();

    const input = await screen.findByRole("textbox");
    await user.type(input, "Riley");
    await user.click(screen.getByRole("button", { name: "Save name" }));

    expect(await screen.findByText("Browsing as Riley")).toBeTruthy();
    expect(screen.getByText("Identity set")).toBeTruthy();
  });
});
