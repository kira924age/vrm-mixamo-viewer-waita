import { useFrame } from "@react-three/fiber";
import type React from "react";
import { useActions } from "./useActions";
import { useLoadVRM } from "./useLoadVRM";
import { usePosition } from "./usePosition";

type Props = {
  src: string;
  action: string;
};

export const VRMViewer: React.FC<Props> = ({ src, action }) => {
  const { vrm } = useLoadVRM(src);

  useActions(vrm, action);
  usePosition(vrm);

  useFrame(() => {
    if (vrm?.update) {
      vrm.update(1 / 60);
    }
  });

  return vrm ? <primitive object={vrm.scene} /> : null;
};
