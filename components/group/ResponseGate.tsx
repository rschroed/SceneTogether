import { StatusIndicator } from "@/components/StatusIndicator";

import styles from "./ResponseGate.module.css";

type ResponseGateProps = {
  blockedBody: string;
  blockedLabel: string;
  readyBody: string;
  readyLabel: string;
  viewerDisplayName?: string;
};

export function ResponseGate({
  blockedBody,
  blockedLabel,
  readyBody,
  readyLabel,
  viewerDisplayName,
}: ResponseGateProps) {
  const hasIdentity = Boolean(viewerDisplayName);

  return (
    <div className={styles.gate}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{hasIdentity ? "This device can respond" : "Response gate"}</p>
        <p className={styles.body}>{hasIdentity ? readyBody : blockedBody}</p>
      </div>
      <StatusIndicator tone={hasIdentity ? "positive" : "warning"}>{hasIdentity ? readyLabel : blockedLabel}</StatusIndicator>
    </div>
  );
}
