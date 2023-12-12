import React from "react";
import { useFrame } from "@react-three/fiber";

import { useLoadVRM } from "./useLoadVRM";
import { useActions } from "./useActions";
import { usePosition } from "./usePosition";

type Props = {
  src: string;
  action: string;
};

export const VRMViewer: React.FC<Props> = ({ src, action }) => {
  const { vrm } = useLoadVRM(src);
  useActions(vrm, action);
  usePosition(vrm);

  useFrame((state, delta) => {
    if (vrm) {
      vrm.update(1 / 60);
    }
  });

  return vrm ? <primitive object={vrm.scene} /> : null;
};
