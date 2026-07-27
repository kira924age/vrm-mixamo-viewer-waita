import type React from "react";

import styles from "./Header.module.scss";
import { GitHubIcon } from "./icons/GitHubIcon";

export const Header: React.FC = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["site-brand-container"]}>
        VRM Mixamo Viewer (waita)
      </div>
      <a
        className={styles["github-link"]}
        href="https://github.com/kira924age/vrm-mixamo-viewer-waita"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub repository: kira924age/vrm-mixamo-viewer-waita"
        title="View this project on GitHub"
      >
        <GitHubIcon />
      </a>
    </header>
  );
};
