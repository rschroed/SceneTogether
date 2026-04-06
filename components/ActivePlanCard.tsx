import type { ActivePlan } from "@/lib/types";

import { ResponseGate } from "@/components/group/ResponseGate";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Stack } from "@/components/layout/Stack";

import { Card } from "./Card";
import styles from "./ActivePlanCard.module.css";

type ActivePlanCardProps = {
  activePlan: ActivePlan;
  viewerDisplayName?: string;
};

export function ActivePlanCard({ activePlan, viewerDisplayName }: ActivePlanCardProps) {
  return (
    <Card>
      <div className={styles.planCard}>
        <div className={styles.planHeader}>
          <div>
            <p className={styles.planCardEyebrow}>{activePlan.timeLabel}</p>
            <h3 className={styles.planCardTitle}>{activePlan.title}</h3>
            <p className={styles.planCardLocation}>{activePlan.locationLabel}</p>
          </div>
          <StatusIndicator tone="positive">{activePlan.confirmationSummary}</StatusIndicator>
        </div>
        <Stack gap="sm">
          {activePlan.confirmations.map((confirmation) => (
            <div className={styles.confirmationRow} key={confirmation.memberName}>
              <span>{confirmation.memberName}</span>
              <StatusIndicator tone={confirmation.status === "Confirmed" ? "positive" : "warning"}>
                {confirmation.status}
              </StatusIndicator>
            </div>
          ))}
        </Stack>
        <ResponseGate
          blockedBody="Add your name before you can confirm the plan."
          blockedLabel="Identity required"
          readyBody={`Ready to confirm as ${viewerDisplayName}.`}
          readyLabel="Confirmation unlocked"
          viewerDisplayName={viewerDisplayName}
        />
      </div>
    </Card>
  );
}
