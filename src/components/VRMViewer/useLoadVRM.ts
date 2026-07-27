import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import type { AnimationClip, Object3D, Scene } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { loadGLTF } from "../../utils/gltf-loader";

export type VRM = {
  scene: Scene;
  animations: AnimationClip[];
  update?: (arg0: number) => void;
};

export const useLoadVRM = (src: string) => {
  const [vrm, setVrm] = useState<VRM | undefined>(undefined);
  const renderer = useThree((state) => state.gl);

  useEffect(() => {
    loadGLTF(src, renderer).then((model: GLTF) => {
      const vrm: VRM = model.userData.vrm ?? {
        scene: model.scene,
        animations: model.animations,
      };

      vrm.scene.traverse((obj: Object3D) => {
        obj.frustumCulled = false;
      });
      vrm.animations = model.animations;

      setVrm(vrm);
    });
  }, [renderer, src]);

  return {
    vrm,
  };
};
