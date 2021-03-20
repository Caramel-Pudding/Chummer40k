import React, { ReactElement, FC } from "react";
import {
  render as defaultRender,
  RenderOptions,
  RenderResult,
  Queries,
} from "@testing-library/react";

import { createStore, Store } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState } from "@/redux/store";

import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

import client from "next-auth/client";

import { reducer, initialStateMock, mockSession, mockRouter } from "./mocks";

jest.mock("next-auth/client");
interface RenderProps {
  readonly initialState?: RootState;
  readonly store?: Store<RootState>;
  readonly router?: Partial<NextRouter>;
  readonly renderOptions?: RenderOptions;
}

const render = (
  ui: ReactElement,
  {
    initialState = initialStateMock,
    store = createStore(reducer, initialState),
    router,
    ...renderOptions
  }: RenderProps
): RenderResult<Queries, HTMLElement> => {
  (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
  const wrapper: FC = ({ children }) => {
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <Provider store={store}>{children}</Provider>
      </RouterContext.Provider>
    );
  };
  return defaultRender(ui, { wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
