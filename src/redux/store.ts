import { configureStore } from "@reduxjs/toolkit";
import stageSlice from "./slices/stage";
import timerSlice from "./slices/timer";

export const store = configureStore({
  reducer: {
    stage: stageSlice,
    timer: timerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
