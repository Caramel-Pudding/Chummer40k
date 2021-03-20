import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import {
  DescriptorsState,
  DescriptorChangePayload,
  AlignmentChangePayload,
} from "./types";
import {
  Race,
  HumanArchetype,
  Pride,
  Disgrace,
  Motivation,
  Archetype,
  Alignment,
} from "./consts";

// Define the initial state using that type
export const initialState: DescriptorsState = {
  race: { name: Race.Human },
  archetype: { name: HumanArchetype.Apostate },
  pride: { name: Pride.Beauty },
  disgrade: { name: Disgrace.Betrayal },
  motivation: { name: Motivation.Arcane },
  alignment: Alignment.Unaligned,
};

export const descriptorsSlice = createSlice({
  name: "Descriptors",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setRace: (state, action: PayloadAction<DescriptorChangePayload<Race>>) => {
      state.race = action.payload.value;
    },
    setArchetype: (
      state,
      action: PayloadAction<DescriptorChangePayload<Archetype>>
    ) => {
      state.archetype = action.payload.value;
    },
    setPride: (
      state,
      action: PayloadAction<DescriptorChangePayload<Pride>>
    ) => {
      state.pride = action.payload.value;
    },
    setDisgrace: (
      state,
      action: PayloadAction<DescriptorChangePayload<Disgrace>>
    ) => {
      state.disgrade = action.payload.value;
    },
    setMotivation: (
      state,
      action: PayloadAction<DescriptorChangePayload<Motivation>>
    ) => {
      state.motivation = action.payload.value;
    },
    setAlignment: (state, action: PayloadAction<AlignmentChangePayload>) => {
      state.alignment = action.payload.value;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const {
  setRace,
  setArchetype,
  setPride,
  setDisgrace,
  setMotivation,
  setAlignment,
} = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
