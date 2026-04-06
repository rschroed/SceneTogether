import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { PageShell } from "@/components/PageShell";
import { Cluster } from "@/components/layout/Cluster";
import { Stack } from "@/components/layout/Stack";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <PageShell
      eyebrow="Shared movie-night picks"
      title="SceneTogether"
      intro="A sharp little board for groups that want to stop circling and pick the movie."
    >
      <Stack gap="md">
        <HeroBanner
          kicker="One clear doorway"
          title="Open the board. Read the room. Lock the plan."
          description="Skip the pitch. Go straight to the shared board and see the options, the signal, and the plan."
          actions={
            <Cluster gap="sm">
              <ButtonLink href="/g/friday-night">Open Friday Night Crew</ButtonLink>
            </Cluster>
          }
          aside={
            <Card>
              <div className={styles.asideCard}>
                <p className={styles.asideEyebrow}>Core loop</p>
                <p className={styles.asideText}>Clear options. Visible intent. Easy convergence.</p>
              </div>
            </Card>
          }
        />
      </Stack>
    </PageShell>
  );
}
