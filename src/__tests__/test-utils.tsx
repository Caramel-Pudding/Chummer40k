import React, { ReactElement, FC } from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
  Queries,
} from "@testing-library/react";
import { createStore, combineReducers, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { RootState } from "@/redux/store";

import {
  reducer as characteristics,
  getInitialState as getCharacteristicsInitialState,
} from "@/redux/features/characteristics/slice";
import {
  reducer as descriptors,
  initialState as descriptorsInitialState,
} from "@/redux/features/descriptors/slice";
import {
  reducer as narrative,
  initialState as narrativeInitialState,
} from "@/redux/features/narrative/slice";

import { BCCharacteristic } from "@/redux/features/characteristics/consts";

import client, { Session } from "next-auth/client";

jest.mock("next-auth/client");

// CreateInitialState
export const initialStateMock: RootState = {
  characteristics: getCharacteristicsInitialState(BCCharacteristic),
  descriptors: descriptorsInitialState,
  narrative: narrativeInitialState,
};

interface RenderProps {
  readonly initialState?: RootState;
  readonly store?: Store<RootState>;
  readonly renderOptions?: RenderOptions;
}

// Import your own reducer
const reducer = combineReducers({ descriptors, characteristics, narrative });

const mockSession: Session = {
  expires: "1",
  user: {
    email: "fakemail@fakemails.com",
    name: "It's me, Horus!",
    image: "none",
  },
};

const render = (
  ui: ReactElement,
  {
    initialState = initialStateMock,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: RenderProps
): RenderResult<Queries, HTMLElement> => {
  (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
