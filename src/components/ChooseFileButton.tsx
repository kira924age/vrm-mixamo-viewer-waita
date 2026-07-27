import type React from "react";
import styles from "./ChooseFileButton.module.scss";
import { FileInputIcon } from "./icons/FileInputIcon";

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
