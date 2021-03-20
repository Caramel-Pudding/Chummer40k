import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";
import { BCCharacteristic } from "@/redux/features/characteristics/consts";
import { createCharacteristicTotalBonusSelectorInstance } from "@/redux/features/characteristics/slice";
import {
  setMinValidation,
  setMaxValidation,
  modificationMinValidation,
  modificationMinMaxValidation,
} from "@/utilities/validation";
import { HitLocation } from "./consts";
import { VitalsState, InfamyPointsChangePayload } from "./types";

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

export const vitalsSlice = createSlice({
  name: "Vitals",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    setTotalWounds: (state, action: PayloadAction<number>) => {
      state.wounds.total = setMinValidation({ newValue: action.payload });
    },
    setCurrentWounds: (state, action: PayloadAction<number>) => {
      state.wounds.current = setMaxValidation({
        newValue: action.payload,
        maximalValue: state.wounds.total,
      });
    },
    changeCurrentWounds: (state, action: PayloadAction<number>) => {
      state.wounds.current = modificationMinMaxValidation({
        modifier: action.payload,
        currentValue: state.wounds.current,
        maximalValue: state.wounds.total,
      });
    },
    setCurrentFatigue: (state, action: PayloadAction<number>) => {
      state.fatigue = setMinValidation({ newValue: action.payload });
    },
    changeCurrentFatigue: (state, action: PayloadAction<number>) => {
      state.fatigue = modificationMinValidation({
        modifier: action.payload,
        currentValue: state.fatigue,
      });
    },
    changeCurrentInfamyPoints: (
      state,
      action: PayloadAction<InfamyPointsChangePayload>
    ) => {
      // TODO: Find a way to setup maximal validation
      state.currentInfamyPoints = modificationMinMaxValidation({
        modifier: action.payload.newValue,
        currentValue: state.currentInfamyPoints,
        maximalValue: action.payload.maximalValue,
      });
    },
    /* eslint-enable no-param-reassign */
  },
});

export const firstFatigueThresholdSelector = createSelector(
  [
    createCharacteristicTotalBonusSelectorInstance(BCCharacteristic.Toughness),
    createCharacteristicTotalBonusSelectorInstance(BCCharacteristic.Willpower),
  ],
  (toughnessBonus, willpowerBonus) => toughnessBonus + willpowerBonus
);

export const secondFatigueThresholdSelector = createSelector(
  [
    createCharacteristicTotalBonusSelectorInstance(BCCharacteristic.Toughness),
    createCharacteristicTotalBonusSelectorInstance(BCCharacteristic.Willpower),
  ],
  (toughnessBonus, willpowerBonus) => (toughnessBonus + willpowerBonus) * 2
);

export const {
  setTotalWounds,
  setCurrentWounds,
  changeCurrentWounds,
  setCurrentFatigue,
  changeCurrentFatigue,
  changeCurrentInfamyPoints,
} = vitalsSlice.actions;

export const { reducer } = vitalsSlice;
