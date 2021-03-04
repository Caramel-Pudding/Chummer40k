import { configureStore } from "@reduxjs/toolkit";

import characteristics from "./features/characteristics/slice";

export const store = configureStore({
  reducer: {
    characteristics,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
