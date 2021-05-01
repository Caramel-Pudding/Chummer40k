import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { NarrativeState, NarrativeChangePayload } from "./types";

// Define the initial state using that type
export const initialState: NarrativeState = {
  name: "",
  warband: "",
};

export const descriptorsSlice = createSlice({
  name: "Narrative",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setName: (state, action: PayloadAction<NarrativeChangePayload>) => {
      state.name = action.payload.value;
    },
    setWarband: (state, action: PayloadAction<NarrativeChangePayload>) => {
      state.warband = action.payload.value;
    },
    /* eslint-enable no-param-reassign */
  },
});

export const { setName, setWarband } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
