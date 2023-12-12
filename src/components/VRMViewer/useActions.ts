import { useEffect } from "react";
import { useAnimations } from "@react-three/drei";

import type { VRM } from "./useLoadVRM";

export const useActions = (vrm: VRM | undefined, action: string) => {
  const { actions } = useAnimations(vrm?.animations ?? [], vrm?.scene);

  const stopAndResetAction = (actionName) => {
    if (actions[actionName]) {
      actions[actionName].stop();
      actions[actionName].reset();
    }
  };

  const playAction = (actionName) => {
    setTimeout(() => {
      if (actions[actionName]) {
        actions[actionName].timeScale = 1;
        actions[actionName].play();
      }
    }, 500);
  };

  useEffect(() => {
    // 全てのアクションを停止
    Object.keys(actions).forEach(stopAndResetAction);

    // 選択されたアクションを再生
    if (actions[action]) {
      playAction(action);
    }
  }, [actions, action]);
};
