import type { ReactNode } from "react";

import styles from "./StatusIndicator.module.css";

type StatusIndicatorProps = {
  tone: "primary" | "secondary" | "warning" | "positive";
  children: ReactNode;
};

export function StatusIndicator({ tone, children }: StatusIndicatorProps) {
  return <span className={`${styles.indicator} ${styles[tone]}`}>{children}</span>;
}
