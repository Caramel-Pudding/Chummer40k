import { HitLocation } from "./consts";

interface Vitals {
  readonly current: number;
  readonly total: number;
}

interface CriticalDamage {
  readonly [HitLocation.Head]: number;
  readonly [HitLocation.LeftArm]: number;
  readonly [HitLocation.RightArm]: number;
  readonly [HitLocation.Torso]: number;
  readonly [HitLocation.LeftLeg]: number;
  readonly [HitLocation.RightLeg]: number;
}

export interface VitalsState {
  readonly wounds: Vitals;
  readonly experience: Vitals;
  readonly currentInfamyPoints: number;
  readonly fatigue: number;
  readonly criticalDamage: CriticalDamage;
}

export interface VitalsChangePayload {
  readonly value: string;
}

export interface InfamyPointsChangePayload {
  readonly newValue: number;
  readonly maximalValue: number;
}
