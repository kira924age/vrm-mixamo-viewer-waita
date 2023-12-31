/**
 * A map from Mixamo rig name to VRM Humanoid bone name
 */

export type MixamoRigName =
  | "mixamorigHips"
  | "mixamorigSpine"
  | "mixamorigSpine1"
  | "mixamorigSpine2"
  | "mixamorigNeck"
  | "mixamorigHead"
  | "mixamorigLeftShoulder"
  | "mixamorigLeftArm"
  | "mixamorigLeftForeArm"
  | "mixamorigLeftHand"
  | "mixamorigLeftHandThumb1"
  | "mixamorigLeftHandThumb2"
  | "mixamorigLeftHandThumb3"
  | "mixamorigLeftHandIndex1"
  | "mixamorigLeftHandIndex2"
  | "mixamorigLeftHandIndex3"
  | "mixamorigLeftHandMiddle1"
  | "mixamorigLeftHandMiddle2"
  | "mixamorigLeftHandMiddle3"
  | "mixamorigLeftHandRing1"
  | "mixamorigLeftHandRing2"
  | "mixamorigLeftHandRing3"
  | "mixamorigLeftHandPinky1"
  | "mixamorigLeftHandPinky2"
  | "mixamorigLeftHandPinky3"
  | "mixamorigRightShoulder"
  | "mixamorigRightArm"
  | "mixamorigRightForeArm"
  | "mixamorigRightHand"
  | "mixamorigRightHandPinky1"
  | "mixamorigRightHandPinky2"
  | "mixamorigRightHandPinky3"
  | "mixamorigRightHandRing1"
  | "mixamorigRightHandRing2"
  | "mixamorigRightHandRing3"
  | "mixamorigRightHandMiddle1"
  | "mixamorigRightHandMiddle2"
  | "mixamorigRightHandMiddle3"
  | "mixamorigRightHandIndex1"
  | "mixamorigRightHandIndex2"
  | "mixamorigRightHandIndex3"
  | "mixamorigRightHandThumb1"
  | "mixamorigRightHandThumb2"
  | "mixamorigRightHandThumb3"
  | "mixamorigLeftUpLeg"
  | "mixamorigLeftLeg"
  | "mixamorigLeftFoot"
  | "mixamorigLeftToeBase"
  | "mixamorigRightUpLeg"
  | "mixamorigRightLeg"
  | "mixamorigRightFoot"
  | "mixamorigRightToeBase";

export type VRMBoneName =
  | "hips"
  | "spine"
  | "chest"
  | "upperChest"
  | "neck"
  | "head"
  | "leftShoulder"
  | "leftUpperArm"
  | "leftLowerArm"
  | "leftHand"
  | "leftThumbMetacarpal"
  | "leftThumbProximal"
  | "leftThumbDistal"
  | "leftIndexProximal"
  | "leftIndexIntermediate"
  | "leftIndexDistal"
  | "leftMiddleProximal"
  | "leftMiddleIntermediate"
  | "leftMiddleDistal"
  | "leftRingProximal"
  | "leftRingIntermediate"
  | "leftRingDistal"
  | "leftLittleProximal"
  | "leftLittleIntermediate"
  | "leftLittleDistal"
  | "rightShoulder"
  | "rightUpperArm"
  | "rightLowerArm"
  | "rightHand"
  | "rightLittleProximal"
  | "rightLittleIntermediate"
  | "rightLittleDistal"
  | "rightRingProximal"
  | "rightRingIntermediate"
  | "rightRingDistal"
  | "rightMiddleProximal"
  | "rightMiddleIntermediate"
  | "rightMiddleDistal"
  | "rightIndexProximal"
  | "rightIndexIntermediate"
  | "rightIndexDistal"
  | "rightThumbMetacarpal"
  | "rightThumbProximal"
  | "rightThumbDistal"
  | "leftUpperLeg"
  | "leftLowerLeg"
  | "leftFoot"
  | "leftToes"
  | "rightUpperLeg"
  | "rightLowerLeg"
  | "rightFoot"
  | "rightToes";

export const mixamoVRMRigMap = new Map<MixamoRigName, VRMBoneName>([
  ["mixamorigHips", "hips"],
  ["mixamorigSpine", "spine"],
  ["mixamorigSpine1", "chest"],
  ["mixamorigSpine2", "upperChest"],
  ["mixamorigNeck", "neck"],
  ["mixamorigHead", "head"],
  ["mixamorigLeftShoulder", "leftShoulder"],
  ["mixamorigLeftArm", "leftUpperArm"],
  ["mixamorigLeftForeArm", "leftLowerArm"],
  ["mixamorigLeftHand", "leftHand"],
  ["mixamorigLeftHandThumb1", "leftThumbMetacarpal"],
  ["mixamorigLeftHandThumb2", "leftThumbProximal"],
  ["mixamorigLeftHandThumb3", "leftThumbDistal"],
  ["mixamorigLeftHandIndex1", "leftIndexProximal"],
  ["mixamorigLeftHandIndex2", "leftIndexIntermediate"],
  ["mixamorigLeftHandIndex3", "leftIndexDistal"],
  ["mixamorigLeftHandMiddle1", "leftMiddleProximal"],
  ["mixamorigLeftHandMiddle2", "leftMiddleIntermediate"],
  ["mixamorigLeftHandMiddle3", "leftMiddleDistal"],
  ["mixamorigLeftHandRing1", "leftRingProximal"],
  ["mixamorigLeftHandRing2", "leftRingIntermediate"],
  ["mixamorigLeftHandRing3", "leftRingDistal"],
  ["mixamorigLeftHandPinky1", "leftLittleProximal"],
  ["mixamorigLeftHandPinky2", "leftLittleIntermediate"],
  ["mixamorigLeftHandPinky3", "leftLittleDistal"],
  ["mixamorigRightShoulder", "rightShoulder"],
  ["mixamorigRightArm", "rightUpperArm"],
  ["mixamorigRightForeArm", "rightLowerArm"],
  ["mixamorigRightHand", "rightHand"],
  ["mixamorigRightHandPinky1", "rightLittleProximal"],
  ["mixamorigRightHandPinky2", "rightLittleIntermediate"],
  ["mixamorigRightHandPinky3", "rightLittleDistal"],
  ["mixamorigRightHandRing1", "rightRingProximal"],
  ["mixamorigRightHandRing2", "rightRingIntermediate"],
  ["mixamorigRightHandRing3", "rightRingDistal"],
  ["mixamorigRightHandMiddle1", "rightMiddleProximal"],
  ["mixamorigRightHandMiddle2", "rightMiddleIntermediate"],
  ["mixamorigRightHandMiddle3", "rightMiddleDistal"],
  ["mixamorigRightHandIndex1", "rightIndexProximal"],
  ["mixamorigRightHandIndex2", "rightIndexIntermediate"],
  ["mixamorigRightHandIndex3", "rightIndexDistal"],
  ["mixamorigRightHandThumb1", "rightThumbMetacarpal"],
  ["mixamorigRightHandThumb2", "rightThumbProximal"],
  ["mixamorigRightHandThumb3", "rightThumbDistal"],
  ["mixamorigLeftUpLeg", "leftUpperLeg"],
  ["mixamorigLeftLeg", "leftLowerLeg"],
  ["mixamorigLeftFoot", "leftFoot"],
  ["mixamorigLeftToeBase", "leftToes"],
  ["mixamorigRightUpLeg", "rightUpperLeg"],
  ["mixamorigRightLeg", "rightLowerLeg"],
  ["mixamorigRightFoot", "rightFoot"],
  ["mixamorigRightToeBase", "rightToes"],
]);
