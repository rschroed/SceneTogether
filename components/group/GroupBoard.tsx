"use client";

import { useEffect, useState, type FormEvent } from "react";

import { PageShell } from "@/components/PageShell";
import { Stack } from "@/components/layout/Stack";
import type { GroupShellData } from "@/lib/types";
import {
  clearViewerIdentity,
  getBrowserStorage,
  readViewerIdentity,
  validateViewerDisplayName,
  type ViewerIdentity,
} from "@/lib/viewer-identity";

import { IdentityCard } from "./IdentityCard";

type GroupBoardProps = {
  group: GroupShellData;
};

export function GroupBoard({ group }: GroupBoardProps) {
  const [viewerIdentity, setViewerIdentity] = useState<ViewerIdentity | null>(null);
  const [draftName, setDraftName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const identity = readViewerIdentity(group.slug, getBrowserStorage());
    setViewerIdentity(identity);
    setDraftName(identity?.displayName ?? "");
    setErrorMessage(null);
    setIsEditing(!identity);
    setIsHydrated(true);
  }, [group.slug]);

  const viewerDisplayName = viewerIdentity?.displayName;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateViewerDisplayName(draftName);

    if (!validation.identity) {
      setErrorMessage(validation.error ?? "Add a valid display name.");
      return;
    }

    setViewerIdentity(validation.identity);
    setDraftName(validation.identity.displayName);
    setErrorMessage(null);
    setIsEditing(false);
    void validation.persist(group.slug, getBrowserStorage());
  }

  function handleChangeName() {
    setDraftName(viewerDisplayName ?? "");
    setErrorMessage(null);
    setIsEditing(true);
  }

  function handleClearIdentity() {
    clearViewerIdentity(group.slug, getBrowserStorage());
    setViewerIdentity(null);
    setDraftName("");
    setErrorMessage(null);
    setIsEditing(true);
  }

  function handleDraftNameChange(value: string) {
    setDraftName(value);

    if (errorMessage) {
      setErrorMessage(null);
    }
  }

  return (
    <PageShell eyebrow="Shared link board" title={group.groupName} intro={group.strapline}>
      <Stack gap="md">
        <IdentityCard
          draftName={draftName}
          errorMessage={errorMessage}
          isEditing={isEditing}
          isHydrated={isHydrated}
          onChangeName={handleChangeName}
          onClear={handleClearIdentity}
          onDraftNameChange={handleDraftNameChange}
          onSubmit={handleSubmit}
          viewerDisplayName={viewerDisplayName}
        />
      </Stack>
    </PageShell>
  );
}
