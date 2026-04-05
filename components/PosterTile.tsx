import type { MovieCandidate } from "@/lib/types";

import { Card } from "./Card";
import { Cluster } from "./layout/Cluster";
import { StatusIndicator } from "./StatusIndicator";
import { Stack } from "./layout/Stack";
import styles from "./PosterTile.module.css";

type PosterTileProps = {
  candidate: MovieCandidate;
};

export function PosterTile({ candidate }: PosterTileProps) {
  return (
    <Card>
      <article className={styles.tile}>
        <div className={styles.poster}>
          <span>{candidate.posterLabel}</span>
        </div>
        <Stack gap="sm">
          <div className={styles.topLine}>
            <h3 className={styles.title}>{candidate.title}</h3>
            <StatusIndicator tone={candidate.signalTone}>{candidate.showtimeHint}</StatusIndicator>
          </div>
          <p className={styles.meta}>{candidate.runtime}</p>
          <p className={styles.logline}>{candidate.logline}</p>
          <Cluster gap="xs">
            {candidate.memberSignals.map((signal) => (
              <StatusIndicator
                key={`${candidate.id}-${signal.memberName}`}
                tone={signal.verdict === "In" ? "positive" : signal.verdict === "Maybe" ? "secondary" : "warning"}
              >
                {signal.memberName}: {signal.verdict}
              </StatusIndicator>
            ))}
          </Cluster>
        </Stack>
      </article>
    </Card>
  );
}
