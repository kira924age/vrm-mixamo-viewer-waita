import type React from "react";
import styles from "./NavigationBar.module.scss";

type Props = {
  setCurrentAction: (actionName: string) => void;
};

export const NavigationBar: React.FC<Props> = ({ setCurrentAction }) => {
  return (
    <div className={styles["navigation-bar-container"]}>
      <button
        type="button"
        onClick={() => {
          setCurrentAction("walking");
        }}
      >
        Walking
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentAction("kick");
        }}
      >
        Kick
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentAction("jab");
        }}
      >
        Punch
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentAction("idle");
        }}
      >
        Idle
      </button>
      <button
        type="button"
        onClick={() => {
          setCurrentAction("stop");
        }}
        className={styles["stop-button"]}
      >
        Stop
      </button>
    </div>
  );
};
