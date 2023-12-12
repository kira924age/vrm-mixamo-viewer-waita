import React from "react"

import styles from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <header className={styles['header-container']}>
      <div className={styles['site-brand-container']}>VRM Mixamo Viewer (waita)</div>
    </header>
  )
}
