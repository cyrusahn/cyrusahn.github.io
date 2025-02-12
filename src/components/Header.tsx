import React from "react";
import styles from "../styles/Header.module.scss";

interface Props {
  title: string;
  color: string;
}

export default function Header({ title, color }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header} style={{ color }}>{title}</h1>
    </div>
  );
}
