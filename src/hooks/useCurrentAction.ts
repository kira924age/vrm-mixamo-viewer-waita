import { useState } from "react";

export const useCurrentAction = () => {
  const [currentAction, setCurrentAction] = useState("walking");

  return {
    currentAction,
    setCurrentAction,
  };
};
