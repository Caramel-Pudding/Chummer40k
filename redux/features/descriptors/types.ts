import { CharacteristicModifier } from "../characteristics/types";

import type {
  Race,
  Archetype,
  Pride,
  Disgrace,
  Motivation,
  DescriptorsUnion,
} from "./consts";

export interface Descriptor<T extends DescriptorsUnion> {
  name?: T;
  characteristicModfiier?: CharacteristicModifier;
  woundsModifier?: number;
  specialModifier?: string;
}

export interface DescriptorsState {
  race: Descriptor<Race>;
  archetype: Descriptor<Archetype>;
  pride: Descriptor<Pride>;
  disgrade: Descriptor<Disgrace>;
  motivation: Descriptor<Motivation>;
}

export interface DescriptorChangePayload<T extends DescriptorsUnion> {
  value: Descriptor<T>;
}
