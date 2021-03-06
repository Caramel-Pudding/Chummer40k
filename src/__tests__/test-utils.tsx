import React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
  Queries,
} from "@testing-library/react";
import { createStore, combineReducers, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { RootState } from "@/redux/store";
import { reducer as characteristics } from "@/redux/features/characteristics/slice";
import { reducer as descriptors } from "@/redux/features/descriptors/slice";

// Import your own reducer
const reducer = combineReducers({ descriptors, characteristics });

const render = (
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: {
    initialState: RootState;
    store?: Store<RootState>;
    renderOptions?: RenderOptions;
  }
): RenderResult<Queries, HTMLElement> => {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
