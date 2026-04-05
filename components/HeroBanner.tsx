import type { ReactNode } from "react";

import { Card } from "./Card";
import styles from "./HeroBanner.module.css";

type HeroBannerProps = {
  kicker: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function HeroBanner({ kicker, title, description, actions, aside }: HeroBannerProps) {
  return (
    <Card accent="hero">
      <div className={styles.banner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </div>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
    </Card>
  );
}
