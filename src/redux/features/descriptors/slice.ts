import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { RootState } from "@/redux/store";
import { DescriptorsState, DescriptorChangePayload } from "./types";
import { Race, Pride, Disgrace, Motivation, Archetype } from "./consts";

// Define the initial state using that type
export const initialState: DescriptorsState = {
  race: {},
  archetype: {},
  pride: {},
  disgrade: {},
  motivation: {},
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
  },
  /* eslint-enable no-param-reassign */
});

export const {
  setRace,
  setArchetype,
  setPride,
  setDisgrace,
  setMotivation,
} = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
