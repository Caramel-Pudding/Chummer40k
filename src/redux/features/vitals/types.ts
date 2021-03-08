import { HitLocation } from "./consts";

interface Vitals {
  current: number;
  total: number;
}

interface CriticalDamage {
  [HitLocation.Head]: number;
  [HitLocation.LeftArm]: number;
  [HitLocation.RightArm]: number;
  [HitLocation.Torso]: number;
  [HitLocation.LeftLeg]: number;
  [HitLocation.RightLeg]: number;
}

export interface VitalsState {
  wounds: Vitals;
  experience: Vitals;
  currentInfamyPoints: number;
  fatigue: number;
  criticalDamage: CriticalDamage;
}

export interface VitalsChangePayload {
  value: string;
}
