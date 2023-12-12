import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { VRMViewer } from "./VRMViewer";

type Props = {
  src: string;
  action: string;
};

export const VRMCanvas: React.FC<Props> = ({ src, action }) => {
  return (
    <Canvas flat key={src}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <VRMViewer src={src} action={action} />
      <OrbitControls />
    </Canvas>
  );
};
