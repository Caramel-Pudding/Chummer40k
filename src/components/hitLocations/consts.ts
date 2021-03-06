export enum HitLocation {
  Head = "Head",
  LeftArm = "Left Arm",
  Torso = "Torso",
  RightArm = "Right Arm",
  LeftLeg = "Left Leg",
  RightLeg = "Right Leg",
}

export const xPositions: Record<string, `${"left"}-${number}`> = {
  left: "left-6",
  center: "left-20",
  right: "left-36",
};

export const yPositions: Record<string, `${"top"}-${number}`> = {
  top: "top-8",
  center: "top-24",
  bottom: "top-52",
};
