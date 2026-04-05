import type { ReactNode } from "react";

import styles from "./Cluster.module.css";

type ClusterProps = {
  children: ReactNode;
  gap?: "xs" | "sm" | "md";
};

export function Cluster({ children, gap = "sm" }: ClusterProps) {
  return (
    <div className={styles.cluster} style={{ ["--cluster-gap" as string]: gapMap[gap] }}>
      {children}
    </div>
  );
}

const gapMap = {
  xs: "var(--space-2)",
  sm: "var(--space-3)",
  md: "var(--space-4)",
};
