import { configureStore } from "@reduxjs/toolkit";

/* eslint-disable import/no-cycle */
import { reducer as characteristics } from "@/redux/features/characteristics/slice";
import { reducer as descriptors } from "@/redux/features/descriptors/slice";
import { reducer as narrative } from "@/redux/features/narrative/slice";
import { reducer as vitals } from "@/redux/features/vitals/slice";
/* eslint-enable import/no-cycle */

export const store = configureStore({
  reducer: {
    descriptors,
    characteristics,
    narrative,
    vitals,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = Readonly<ReturnType<typeof store.getState>>;
export type AppDispatch = typeof store.dispatch;
