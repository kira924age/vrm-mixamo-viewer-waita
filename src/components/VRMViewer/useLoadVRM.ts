import { useEffect, useState } from "react";
import { loadGLTF } from "../../utils/gltf-loader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Scene, AnimationClip, Object3D } from "three";

export type VRM = {
  scene: Scene;
  animations: AnimationClip[];
  update?: (arg0: number) => void;
};

export const useLoadVRM = (src: string) => {
  const [vrm, setVrm] = useState<VRM | undefined>(undefined);

  useEffect(() => {
    loadGLTF(src).then((model: GLTF) => {
      const vrm = model?.userData?.vrm;

      vrm.scene.traverse((obj: Object3D) => {
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
