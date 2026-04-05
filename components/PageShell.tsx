import type { ReactNode } from "react";

import styles from "./PageShell.module.css";

type PageShellProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div className={styles.shell}>
      <div className={styles.inner}>
        {(eyebrow || title || intro) && (
          <header className={styles.header}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? <h1 className={styles.title}>{title}</h1> : null}
            {intro ? <p className={styles.intro}>{intro}</p> : null}
          </header>
        )}
        {children}
      </div>
    </div>
  );
}
