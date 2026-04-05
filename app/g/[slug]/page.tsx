import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { PageShell } from "@/components/PageShell";
import { PosterTile } from "@/components/PosterTile";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Cluster } from "@/components/layout/Cluster";
import { Stack } from "@/components/layout/Stack";
import { getGroupShellData } from "@/lib/content";

import styles from "./page.module.css";

export function generateStaticParams() {
  return [{ slug: "friday-night" }];
}

export default async function GroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = getGroupShellData(slug);

  if (!group) {
    notFound();
  }

  return (
    <PageShell eyebrow="Sample group board" title={group.groupName} intro={group.strapline}>
      <Stack gap="lg">
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
              <PosterTile key={candidate.id} candidate={candidate} />
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
            <Card>
              <div className={styles.planCard}>
                <div className={styles.planHeader}>
                  <div>
                    <p className={styles.planCardEyebrow}>{group.activePlan.timeLabel}</p>
                    <h3 className={styles.planCardTitle}>{group.activePlan.title}</h3>
                    <p className={styles.planCardLocation}>{group.activePlan.locationLabel}</p>
                  </div>
                  <StatusIndicator tone="positive">{group.activePlan.confirmationSummary}</StatusIndicator>
                </div>
                <Stack gap="sm">
                  {group.activePlan.confirmations.map((confirmation) => (
                    <div className={styles.confirmationRow} key={confirmation.memberName}>
                      <span>{confirmation.memberName}</span>
                      <StatusIndicator tone={confirmation.status === "Confirmed" ? "positive" : "warning"}>
                        {confirmation.status}
                      </StatusIndicator>
                    </div>
                  ))}
                </Stack>
              </div>
            </Card>
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
