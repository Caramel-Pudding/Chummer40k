import { BCCharacteristic } from "./consts";

export interface CharacteristicInternals {
  readonly value: number;
  readonly tempValueModifier: number;
  readonly persistentBonusModifier: number;
  readonly tempBonusModifier: number;
}

export interface CharacteristicFinals {
  readonly value: number;
  readonly bonus: number;
}

export interface CharacteristicChangePayload {
  readonly characteristic: BCCharacteristic;
  readonly value: number;
}

export interface CharacteristicModifier {
  readonly characteristic: BCCharacteristic;
  readonly value: number;
}
