import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import type { AnimationClip, WebGLRenderer } from "three";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import idleAnimation from "../assets/animations/idle.fbx";
import jabAnimation from "../assets/animations/jab.fbx";
import kickAnimation from "../assets/animations/kick.fbx";
import walkingAnimation from "../assets/animations/walking.fbx";
import { loadMixamoAnimation } from "./load-mixamo-animation";

export const loadGLTF = async (
  modelUrl: string,
  renderer: WebGLRenderer,
): Promise<GLTF> => {
  const dracoLoader = new DRACOLoader();
  const ktx2Loader = new KTX2Loader().detectSupport(renderer);

  const loader = new GLTFLoader();
  loader.register((parser) => {
    return new VRMLoaderPlugin(parser);
  });

  loader.setDRACOLoader(dracoLoader);
  loader.setKTX2Loader(ktx2Loader);
  loader.setMeshoptDecoder(MeshoptDecoder);

  try {
    const model = await loader.loadAsync(modelUrl, (progress) =>
      console.log(
        "Loading model...",
        100.0 * (progress.loaded / progress.total),
        "%",
      ),
    );

    if (!model.userData.vrm) {
      return model;
    }

    const vrm = model.userData.vrm;

    VRMUtils.rotateVRM0(vrm);
    VRMUtils.removeUnnecessaryVertices(vrm.scene);
    VRMUtils.combineSkeletons(vrm.scene);

    const animations = await Promise.all([
      loadMixamoAnimation(walkingAnimation, "walking", vrm),
      loadMixamoAnimation(jabAnimation, "jab", vrm),
      loadMixamoAnimation(kickAnimation, "kick", vrm),
      loadMixamoAnimation(idleAnimation, "idle", vrm),
    ]).catch((error) => {
      console.error(error);
      return [];
    });

    animations.forEach((clip: AnimationClip) => {
      model.animations.push(clip);
    });

    return model;
  } finally {
    dracoLoader.dispose();
    ktx2Loader.dispose();
  }
};
