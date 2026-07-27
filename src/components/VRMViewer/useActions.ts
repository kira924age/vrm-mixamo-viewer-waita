import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

import type { VRM } from "./useLoadVRM";

export const useActions = (vrm: VRM | undefined, action: string) => {
  const { actions } = useAnimations(vrm?.animations ?? [], vrm?.scene);

  useEffect(() => {
    Object.values(actions).forEach((animationAction) => {
      animationAction?.stop();
      animationAction?.reset();
    });

    const animationAction = actions[action];
    if (animationAction == null) {
      return;
    }

    const timeout = window.setTimeout(() => {
      animationAction.play();
    }, 500);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [actions, action]);
};
