import { ButtonLink } from "@/components/ButtonLink";
import { Card } from "@/components/Card";
import { HeroBanner } from "@/components/HeroBanner";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Cluster } from "@/components/layout/Cluster";
import { Stack } from "@/components/layout/Stack";

import styles from "./page.module.css";

const flow = [
  {
    step: "01",
    title: "Put real options on the table",
    copy: "Make the candidates visible fast, before the night turns into open-ended chatter.",
  },
  {
    step: "02",
    title: "Expose the group’s actual signal",
    copy: "Show who is in, who is hesitating, and where the momentum really sits.",
  },
  {
    step: "03",
    title: "Lock the plan while the energy is there",
    copy: "Move from fuzzy interest to a movie, a time, and a clear yes from the room.",
  },
];

export default function HomePage() {
  return (
    <PageShell
      eyebrow="Issue 4 / App Shell"
      title="SceneTogether"
      intro="A movie-night decision surface built for small groups that want to stop circling and pick the plan."
    >
      <Stack gap="lg">
        <HeroBanner
          kicker="Structured, not social"
          title="Pick the movie. Lock the time. Keep the night moving."
          description="SceneTogether turns a messy maybe-thread into a clear decision board. It is not a chat app, not a movie database, and not a feed. It is a sharp little surface for convergence."
          actions={
            <Cluster gap="sm">
              <ButtonLink href="/g/friday-night">Step into a sample group</ButtonLink>
              <ButtonLink href="#flow" variant="secondary">
                See the decision flow
              </ButtonLink>
            </Cluster>
          }
          aside={
            <Card>
              <div className={styles.asideCard}>
                <p className={styles.asideEyebrow}>Tonight’s promise</p>
                <p className={styles.asideText}>Clear options. Visible intent. Easy convergence.</p>
              </div>
            </Card>
          }
        />

        <section id="flow">
          <SectionHeader
            eyebrow="How the shell thinks"
            title="Three moves, one outcome"
            description="The product only needs enough structure to help the group answer one question well: which movie should we go see, and when?"
          />
          <div className={styles.flowGrid}>
            {flow.map((item) => (
              <Card key={item.step}>
                <div className={styles.flowCard}>
                  <p className={styles.step}>{item.step}</p>
                  <h3 className={styles.flowTitle}>{item.title}</h3>
                  <p className={styles.flowCopy}>{item.copy}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Stack>
    </PageShell>
  );
}
