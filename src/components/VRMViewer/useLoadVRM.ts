import { useEffect, useState } from "react";
import { loadGLTF } from "../../utils/gltf-loader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export type VRM = {
  scene: THREE.Scene;
  animations: THREE.AnimationClip[];
  update?: (arg0: number) => void;
};

export const useLoadVRM = (src: string) => {
  const [vrm, setVrm] = useState<VRM | undefined>(undefined);

  useEffect(() => {
    loadGLTF(src).then((model: GLTF) => {
      const vrm = model?.userData?.vrm;
      if (!vrm) {
        setVrm(model);
        return;
      }

      vrm.scene.traverse((obj: THREE.Object3D) => {
        obj.frustumCulled = false;
      });
      vrm.animations = model.animations;

      setVrm(vrm);
    });
  }, [src]);

  return {
    vrm,
  };
};
