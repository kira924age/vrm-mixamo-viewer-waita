import React from "react";
import styles from "./NavigationBar.module.scss";

type Props = {
  setCurrentAction: (actionName: string) => void;
};

export const NavigationBar: React.FC<Props> = ({ setCurrentAction }) => {
  return (
    <div className={styles["navigation-bar-container"]}>
      <button
        onClick={() => {
          setCurrentAction("walking");
        }}
      >
        Walking
      </button>
      <button
        onClick={() => {
          setCurrentAction("kick");
        }}
      >
        Kick
      </button>
      <button
        onClick={() => {
          setCurrentAction("jab");
        }}
      >
        Punch
      </button>
      <button
        onClick={() => {
          setCurrentAction("idle");
        }}
      >
        Idle
      </button>
      <button
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
