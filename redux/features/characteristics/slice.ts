import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { CharacteristicInternals, CharacteristicChangePayload } from "./types";
import { BCCharacteristics } from "./consts";
import { calculateCharacteristicBonus } from "./helpers";

// Define the initial state using that type
const getInitialState = (
  characteristicsSet: typeof BCCharacteristics
): Record<BCCharacteristics, CharacteristicInternals> => {
  return Object.keys(characteristicsSet).reduce(
    (state, characteristic) => ({
      ...state,
      [characteristic]: {
        value: 0,
        tempValueModifier: 0,
        persistentBonusModifier: 0,
        tempBonusModifier: 0,
      },
    }),
    {} as Record<BCCharacteristics, CharacteristicInternals>
  );
};

export const characteristicsSlice = createSlice({
  name: "Characteristics",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: getInitialState(BCCharacteristics),
  /* eslint-disable no-param-reassign */
  reducers: {
    setValue: (state, action: PayloadAction<CharacteristicChangePayload>) => {
      state[action.payload.characteristic].value = action.payload.value;
    },
    changeValueByAmount: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].value += action.payload.value;
    },
    setTempValueModifier: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].tempValueModifier =
        action.payload.value;
    },
    changeTempValueModifierByAmount: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].tempValueModifier +=
        action.payload.value;
    },
    setPersistentBonusModifier: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].persistentBonusModifier =
        action.payload.value;
    },
    changePersistentBonusModifierByAmount: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].persistentBonusModifier +=
        action.payload.value;
    },
    setTempBonusModifier: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].persistentBonusModifier =
        action.payload.value;
    },
    changeTempBonusModifierByAmount: (
      state,
      action: PayloadAction<CharacteristicChangePayload>
    ) => {
      state[action.payload.characteristic].persistentBonusModifier +=
        action.payload.value;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const createCharacteristicTotalValueSelectorInstance = (
  characteristicName: BCCharacteristics
) =>
  createSelector(
    [
      (state: {
        characteristics: Record<BCCharacteristics, CharacteristicInternals>;
      }) => state.characteristics,
    ],
    (characteristics) =>
      characteristics[characteristicName].value +
      characteristics[characteristicName].tempValueModifier
  );

export const createCharacteristicTotalBonuslectorInstance = (
  characteristicName: BCCharacteristics
) =>
  createSelector(
    [
      (state: {
        characteristics: Record<BCCharacteristics, CharacteristicInternals>;
      }) => state.characteristics,
      createCharacteristicTotalValueSelectorInstance(characteristicName),
    ],
    (characteristics, totalValue) =>
      calculateCharacteristicBonus(totalValue) +
      characteristics[characteristicName].persistentBonusModifier +
      characteristics[characteristicName].tempBonusModifier
  );

export const {
  setValue,
  changeValueByAmount,
  setTempValueModifier,
  changeTempValueModifierByAmount,
  setPersistentBonusModifier,
  changePersistentBonusModifierByAmount,
  setTempBonusModifier,
  changeTempBonusModifierByAmount,
} = characteristicsSlice.actions;

export default characteristicsSlice.reducer;
