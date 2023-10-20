/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import trackReducer from './reducers/player';

export const store = configureStore({
  reducer: {
    player: trackReducer,
  },
  middleware: [thunk],
});