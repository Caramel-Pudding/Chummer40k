import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import characteristics from "./redux/features/characteristics/slice";
import descriptors from "./redux/features/descriptors/slice";

// Import your own reducer
const reducer = combineReducers({ descriptors, characteristics });

function render(
  ui,
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
