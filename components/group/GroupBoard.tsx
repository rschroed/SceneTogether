"use client";

import { useEffect, useState, type FormEvent } from "react";

import { ActivePlanCard } from "@/components/ActivePlanCard";
import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { PageShell } from "@/components/PageShell";
import { PosterTile } from "@/components/PosterTile";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Cluster } from "@/components/layout/Cluster";
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

import styles from "@/app/g/[slug]/page.module.css";

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
    <PageShell eyebrow="Sample group board" title={group.groupName} intro={group.strapline}>
      <Stack gap="lg">
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

        <HeroBanner
          kicker="Tonight’s decision"
          title={`Can ${group.activePlan.title} become the plan?`}
          description="The shell keeps the focal point tight: one proposed movie, one plausible time, and a visible read on who is ready to stop debating."
          actions={
            <Cluster gap="sm">
              <ButtonLink href="/">Back to the entry page</ButtonLink>
              <ButtonLink href="#candidates" variant="secondary">
                Review the contenders
              </ButtonLink>
            </Cluster>
          }
          aside={
            <Card>
              <div className={styles.planAside}>
                <p className={styles.planMeta}>{group.activePlan.timeLabel}</p>
                <h3 className={styles.planTitle}>{group.activePlan.title}</h3>
                <p className={styles.planLocation}>{group.activePlan.locationLabel}</p>
                <p className={styles.planSummary}>{group.activePlan.confirmationSummary}</p>
              </div>
            </Card>
          }
        />

        <section id="candidates">
          <SectionHeader
            eyebrow="Option board"
            title="What the group can actually choose from"
            description="Each candidate shows enough signal to move the decision forward: mood, runtime, showtime pressure, and where each person currently stands."
            action={<StatusIndicator tone="secondary">{group.candidates.length} live options</StatusIndicator>}
          />
          <div className={styles.posterGrid}>
            {group.candidates.map((candidate) => (
              <PosterTile key={candidate.id} candidate={candidate} viewerDisplayName={viewerDisplayName} />
            ))}
          </div>
        </section>

        <div className={styles.lowerGrid}>
          <section>
            <SectionHeader
              eyebrow="Active plan"
              title="The current move"
              description="This is where the fuzzy maybe becomes a movie, a time, and a visible confirmation gap."
            />
            <ActivePlanCard activePlan={group.activePlan} viewerDisplayName={viewerDisplayName} />
          </section>

          <section>
            <SectionHeader
              eyebrow="Decision context"
              title="Why the room is leaning this way"
              description="Activity stays structured and low-noise. It exists only to show what changed the group’s momentum."
            />
            <Card>
              <div className={styles.activityList}>
                {group.activity.map((item) => (
                  <article className={styles.activityItem} key={item.id}>
                    <div>
                      <p className={styles.activityActor}>{item.actor}</p>
                      <p className={styles.activityAction}>{item.action}</p>
                    </div>
                    <p className={styles.activityTime}>{item.timeLabel}</p>
                  </article>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </Stack>
    </PageShell>
  );
}
