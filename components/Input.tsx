import { useId, type InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  error?: string | null;
  hint?: string;
};

export function Input({ error, hint, id, label, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <label className={styles.field} htmlFor={inputId}>
      <span className={styles.label}>{label}</span>
      <input
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        className={styles.input}
        id={inputId}
        type="text"
        {...props}
      />
      {hint ? (
        <span className={styles.hint} id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
