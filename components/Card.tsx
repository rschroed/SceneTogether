import type { ReactNode } from "react";

import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  accent?: "default" | "hero";
};

export function Card({ children, accent = "default" }: CardProps) {
  return <section className={`${styles.card} ${accent === "hero" ? styles.hero : ""}`}>{children}</section>;
}
