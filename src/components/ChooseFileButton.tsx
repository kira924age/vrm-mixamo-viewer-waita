import React from "react";
import { FileInputIcon } from "./icons/FileInputIcon";

import styles from "./ChooseFileButton.module.scss";

type Props = {
  onClick: () => void;
};

export const ChooseFileButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className={styles["choose-file-button"]}
      type="button"
      onClick={() => onClick()}
    >
      <div className={styles["file-input-icon-container"]}>
        <FileInputIcon />
      </div>
      <div className={styles["button-label"]}>Choose File</div>
    </button>
  );
};
