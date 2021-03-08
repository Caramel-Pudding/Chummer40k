import { CharacteristicModifier } from "@/redux/features/characteristics/types";

import type {
  Race,
  Archetype,
  Pride,
  Disgrace,
  Motivation,
  DescriptorsUnion,
  Alignment,
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
  alignment: Alignment;
}

export interface DescriptorChangePayload<T extends DescriptorsUnion> {
  value: Descriptor<T>;
}

export interface AlignmentChangePayload {
  value: Alignment;
}
