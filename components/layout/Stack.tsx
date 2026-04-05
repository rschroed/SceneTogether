import type { ReactNode } from "react";

import styles from "./Stack.module.css";

type StackProps = {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
};

export function Stack({ children, gap = "md" }: StackProps) {
  return (
    <div className={styles.stack} style={{ ["--stack-gap" as string]: gapMap[gap] }}>
      {children}
    </div>
  );
}

const gapMap = {
  xs: "var(--space-2)",
  sm: "var(--space-3)",
  md: "var(--space-4)",
  lg: "var(--space-6)",
};
