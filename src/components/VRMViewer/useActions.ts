import { useEffect } from "react";
import { useAnimations } from "@react-three/drei";

import type { VRM } from "./useLoadVRM";

export const useActions = (vrm: VRM | undefined, action: string) => {
  const { actions } = useAnimations(vrm?.animations ?? [], vrm?.scene);

  const stopAndResetAction = (actionName: string) => {
    if (actions[actionName]) {
      actions[actionName]?.stop();
      actions[actionName]?.reset();
    }
  };

  const playAction = (actionName: string) => {
    setTimeout(() => {
      if (actions[actionName]) {
        actions[actionName]?.play();
      }
    }, 500);
  };

  useEffect(() => {
    Object.keys(actions).forEach(stopAndResetAction);

    if (actions[action]) {
      playAction(action);
    }
  }, [actions, action]);
};
