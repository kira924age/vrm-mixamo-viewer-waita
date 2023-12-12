import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import type { VRM } from "@pixiv/three-vrm";

import type { MixamoRigName } from "./mixamo-vrm-rig-mappings";
import { mixamoVRMRigMap } from "./mixamo-vrm-rig-mappings";

/**
 * Load Mixamo animation, convert for three-vrm use, and return it.
 *
 * @param url A url of mixamo animation data
 * @param animationName Name of the animation
 * @param vrm A target VRM
 * @returns The converted AnimationClip
 */
export const loadMixamoAnimation = (
  url: string,
  animationName: string,
  vrm: VRM,
): Promise<THREE.AnimationClip> => {
  const loader = new FBXLoader();

  return loader.loadAsync(url).then((asset: THREE.Group) => {
    const clip = THREE.AnimationClip.findByName(asset.animations, "mixamo.com");

    const tracks: THREE.KeyframeTrack[] = [];

    const restRotationInverse = new THREE.Quaternion();
    const parentRestWorldRotation = new THREE.Quaternion();
    const _quatA = new THREE.Quaternion();
    const _vec3 = new THREE.Vector3();

    // Adjust with reference to hips height.
    const motionHipsHeight = asset.getObjectByName("mixamorigHips")?.position.y;
    const vrmHipsY = vrm.humanoid
      ?.getNormalizedBoneNode("hips")
      ?.getWorldPosition(_vec3).y;
    const vrmRootY = vrm.scene.getWorldPosition(_vec3).y;

    if (
      motionHipsHeight === undefined ||
      vrmHipsY === undefined ||
      !vrmRootY === undefined
    ) {
      throw new Error("Failed to get hips height.");
    }

    const vrmHipsHeight = Math.abs(vrmHipsY - vrmRootY);
    const hipsPositionScale = vrmHipsHeight / motionHipsHeight;

    clip.tracks.forEach((track: THREE.KeyframeTrack) => {
      const trackSplitted = track.name.split(".");
      if (trackSplitted[0] === undefined) {
        return;
      }

      const mixamoRigName: MixamoRigName = trackSplitted[0] as MixamoRigName;
      const vrmBoneName = mixamoVRMRigMap.get(mixamoRigName);
      if (vrmBoneName === undefined) {
        return;
      }

      const vrmNodeName =
        vrm.humanoid?.getNormalizedBoneNode(vrmBoneName)?.name;
      const mixamoRigNode = asset.getObjectByName(mixamoRigName);
      if (!(mixamoRigNode instanceof THREE.Object3D)) {
        return;
      }

      if (vrmNodeName !== undefined || vrmNodeName !== undefined) {
        const propertyName = trackSplitted[1];

        // Store rotations of rest-pose.
        mixamoRigNode.getWorldQuaternion(restRotationInverse).invert();
        mixamoRigNode.parent?.getWorldQuaternion(parentRestWorldRotation);

        if (track instanceof THREE.QuaternionKeyframeTrack) {
          // Retarget rotation of mixamoRig to NormalizedBone.
          for (let i = 0; i < track.values.length; i += 4) {
            const flatQuaternion = track.values.slice(i, i + 4);

            _quatA.fromArray(flatQuaternion);

            // 親のレスト時ワールド回転 * トラックの回転 * レスト時ワールド回転の逆
            _quatA
              .premultiply(parentRestWorldRotation)
              .multiply(restRotationInverse);

            _quatA.toArray(flatQuaternion);

            flatQuaternion.forEach((v, index) => {
              track.values[index + i] = v;
            });
          }

          tracks.push(
            new THREE.QuaternionKeyframeTrack(
              `${vrmNodeName}.${propertyName}`,
              track.times,
              track.values.map((v, i) =>
                vrm.meta?.metaVersion === "0" && i % 2 === 0 ? -v : v,
              ),
            ),
          );
        } else if (track instanceof THREE.VectorKeyframeTrack) {
          const value = track.values.map(
            (v, i) =>
              (vrm.meta?.metaVersion === "0" && i % 3 !== 1 ? -v : v) *
              hipsPositionScale,
          );
          tracks.push(
            new THREE.VectorKeyframeTrack(
              `${vrmNodeName}.${propertyName}`,
              track.times,
              value,
            ),
          );
        }
      }
    });

    return new THREE.AnimationClip(animationName, clip.duration, tracks);
  });
};
