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
  readonly name?: T;
  readonly characteristicModfiier?: CharacteristicModifier;
  readonly woundsModifier?: number;
  readonly specialModifier?: string;
}

export interface DescriptorsState {
  readonly race: Descriptor<Race>;
  readonly archetype: Descriptor<Archetype>;
  readonly pride: Descriptor<Pride>;
  readonly disgrade: Descriptor<Disgrace>;
  readonly motivation: Descriptor<Motivation>;
  readonly alignment: Alignment;
}

export interface DescriptorChangePayload<T extends DescriptorsUnion> {
  readonly value: Descriptor<T>;
}

export interface AlignmentChangePayload {
  readonly value: Alignment;
}
