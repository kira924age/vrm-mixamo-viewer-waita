import React from "react";

import styles from "./DragMessageCard.module.scss";

export const DragMessageCard: React.FC = () => {
  return (
    <div className={styles["drag-message-card-container"]}>
      <div className={styles["place-holder"]}>Drag VRM file here</div>
    </div>
  );
};
