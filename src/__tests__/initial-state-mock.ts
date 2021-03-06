import { RootState } from "@/redux/store";
import { getInitialState as getCharacteristicsInitialState } from "@/redux/features/characteristics/slice";
import { initialState as descriptorsInitialState } from "@/redux/features/descriptors/slice";

import { BCCharacteristic } from "@/redux/features/characteristics/consts";

export const initialStateMock: RootState = {
  characteristics: getCharacteristicsInitialState(BCCharacteristic),
  descriptors: descriptorsInitialState,
};
