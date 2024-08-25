import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";

import walkingAnimation from "../assets/animations/walking.fbx";
import jabAnimation from "../assets/animations/jab.fbx";
import kickAnimation from "../assets/animations/kick.fbx";
import idleAnimation from "../assets/animations/idle.fbx";

import { loadMixamoAnimation } from "./load-mixamo-animation";
import type { AnimationClip } from "three";

export const loadGLTF = (modelUrl: string): Promise<GLTF> => {
  const dracoLoader = new DRACOLoader();
  const ktx2Loader = new KTX2Loader();

  const loader = new GLTFLoader();
  loader.register((parser) => {
    return new VRMLoaderPlugin(parser);
  });

  loader.setDRACOLoader(dracoLoader);
  loader.setKTX2Loader(ktx2Loader);

  return new Promise((resolve, reject) => {
    loader.load(
      modelUrl,
      async (model: GLTF) => {
        if (!model.userData.vrm) {
          resolve(model);
          return;
        }

        const vrm = model.userData.vrm;

        VRMUtils.rotateVRM0(vrm);
        VRMUtils.removeUnnecessaryVertices(vrm.scene);
        VRMUtils.removeUnnecessaryJoints(vrm.scene);

        const res = await Promise.all([
          loadMixamoAnimation(walkingAnimation, "walking", vrm),
          loadMixamoAnimation(jabAnimation, "jab", vrm),
          loadMixamoAnimation(kickAnimation, "kick", vrm),
          loadMixamoAnimation(idleAnimation, "idle", vrm),
        ]).catch((err) => {
          console.log(err);
        });

        res?.forEach((clip: AnimationClip) => {
          model.animations.push(clip);
        });

        resolve(model);
      },
      (progress) =>
        console.log(
          "Loading model...",
          100.0 * (progress.loaded / progress.total),
          "%",
        ),
      reject,
    );
  });
};
