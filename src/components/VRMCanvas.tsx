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
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={1} />

      <VRMViewer src={src} action={action} />
      <OrbitControls />
    </Canvas>
  );
};
