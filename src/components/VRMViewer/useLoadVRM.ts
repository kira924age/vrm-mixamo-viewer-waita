import { useEffect, useState } from "react";
import { loadGLTF } from "../../utils/gltf-loader";

export type VRM = {
  scene: THREE.Scene;
  animations: THREE.AnimationClip[];
};

export const useLoadVRM = (src: string) => {
  const [vrm, setVrm] = useState<VRM | undefined>(undefined);

  useEffect(() => {
    loadGLTF(src).then((model) => {
      const vrm = model?.userData?.vrm;
      if (!vrm) {
        return;
      }

      vrm.scene.traverse((obj) => {
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
