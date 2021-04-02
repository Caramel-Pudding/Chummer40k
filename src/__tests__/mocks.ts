import { RootState } from "@/redux/store";

import { combineReducers } from "@reduxjs/toolkit";

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
import {
  reducer as vitals,
  initialState as vitalsInitialState,
} from "@/redux/features/vitals/slice";

import { BCCharacteristic } from "@/redux/features/characteristics/consts";

import { Session } from "next-auth";

import { NextRouter } from "next/router";

// Redux reducer mock
export const reducer = combineReducers({
  descriptors,
  characteristics,
  narrative,
  vitals,
});

// Redux initial state mock
export const initialStateMock: RootState = {
  characteristics: getCharacteristicsInitialState(BCCharacteristic),
  descriptors: descriptorsInitialState,
  narrative: narrativeInitialState,
  vitals: vitalsInitialState,
};

// NextAuth session mock
export const mockSession: Session = {
  expires: "1",
  user: {
    email: "fakemail@fakemails.com",
    name: "It's me, Horus!",
    image: "none",
  },
};

// NextRouter mock
export const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  isLocaleDomain: true,
  isReady: true,
  isPreview: false,
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
