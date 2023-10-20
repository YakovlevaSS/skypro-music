/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import trackReducer from './reducers/player';

export const store = configureStore({
  reducer: {
    player: trackReducer,
  }
});