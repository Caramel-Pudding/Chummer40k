import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";
import { HitLocation } from "./consts";
import { VitalsState } from "./types";

// Define the initial state using that type
export const initialState: VitalsState = {
  wounds: { current: 0, total: 0 },
  experience: { current: 0, total: 0 },
  currentInfamyPoints: 0,
  fatigue: 0,
  criticalDamage: {
    [HitLocation.Head]: 0,
    [HitLocation.LeftArm]: 0,
    [HitLocation.Torso]: 0,
    [HitLocation.RightArm]: 0,
    [HitLocation.LeftLeg]: 0,
    [HitLocation.RightLeg]: 0,
  },
};

export const descriptorsSlice = createSlice({
  name: "Vitals",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    /* eslint-enable no-param-reassign */
  },
});

// export const { setName, setWarband } = descriptorsSlice.actions;

export const { reducer } = descriptorsSlice;
