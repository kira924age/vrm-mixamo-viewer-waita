import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

import * as THREE from "three";

import type { VRM } from "./useLoadVRM";

export const usePosition = (vrm: VRM | undefined) => {
  const { camera } = useThree();

  useEffect(() => {
    if (vrm === undefined) {
      return;
    }

    const box = new THREE.Box3().setFromObject(vrm.scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    vrm.scene.position.x += vrm.scene.position.x - center.x;
    vrm.scene.position.y += vrm.scene.position.y - center.y;
    vrm.scene.position.z += vrm.scene.position.z - center.z;

    camera.near = size / 100;
    camera.far = size * 100;

    camera.position.x = center.x + size / 2.0;
    camera.position.y = center.y + size / 10;
    camera.position.z = center.z + size / 2.0;

    camera.updateProjectionMatrix();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vrm]);
};
