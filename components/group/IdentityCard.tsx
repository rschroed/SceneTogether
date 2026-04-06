import type { FormEvent } from "react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Cluster } from "@/components/layout/Cluster";
import { Stack } from "@/components/layout/Stack";

import styles from "./IdentityCard.module.css";

type IdentityCardProps = {
  draftName: string;
  errorMessage?: string | null;
  isEditing: boolean;
  isHydrated: boolean;
  onChangeName: () => void;
  onClear: () => void;
  onDraftNameChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  viewerDisplayName?: string;
};

export function IdentityCard({
  draftName,
  errorMessage,
  isEditing,
  isHydrated,
  onChangeName,
  onClear,
  onDraftNameChange,
  onSubmit,
  viewerDisplayName,
}: IdentityCardProps) {
  if (!isHydrated) {
    return (
      <Card>
        <div className={styles.card}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Shared link access</p>
            <div>
              <h2 className={styles.title}>Checking this device</h2>
              <p className={styles.body}>
                This board remembers a local display name for the current link before it unlocks response actions.
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (!isEditing && viewerDisplayName) {
    return (
      <Card>
        <div className={styles.card}>
          <div className={styles.readyState}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>Shared link access</p>
              <div>
                <h2 className={styles.title}>Browsing as {viewerDisplayName}</h2>
                <p className={styles.body}>
                  This device can now unlock intent and confirmation actions without creating a full account.
                </p>
              </div>
            </div>
            <Cluster gap="sm">
              <StatusIndicator tone="positive">Identity set</StatusIndicator>
              <Button onClick={onChangeName} variant="secondary">
                Change name
              </Button>
              <Button onClick={onClear} variant="secondary">
                Clear
              </Button>
            </Cluster>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <form className={styles.card} onSubmit={onSubmit}>
        <Stack gap="md">
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Shared link access</p>
            <div>
              <h2 className={styles.title}>
                {viewerDisplayName ? "Change how this device appears" : "Add your name to this shared link"}
              </h2>
              <p className={styles.body}>
                Pick the display name this device should use before it weighs in on candidates or confirms a plan.
              </p>
            </div>
          </div>
          <Input
            autoComplete="nickname"
            autoFocus
            error={errorMessage}
            hint="We only keep this name on the current device for this group link."
            label="Display name"
            maxLength={32}
            name="displayName"
            onChange={(event) => onDraftNameChange(event.target.value)}
            placeholder="Riley"
            value={draftName}
          />
          <Cluster gap="sm">
            <Button type="submit">{viewerDisplayName ? "Update name" : "Save name"}</Button>
            {viewerDisplayName ? (
              <Button onClick={onClear} variant="secondary">
                Clear
              </Button>
            ) : null}
          </Cluster>
        </Stack>
      </form>
    </Card>
  );
}
