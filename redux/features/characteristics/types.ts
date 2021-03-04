import { BCCharacteristics } from "./consts";

export interface CharacteristicInternals {
  value: number;
  tempValueModifier: number;
  persistentBonusModifier: number;
  tempBonusModifier: number;
}

export interface CharacteristicFinals {
  value: number;
  bonus: number;
}

export interface CharacteristicChangePayload {
  characteristic: BCCharacteristics;
  value: number;
}
