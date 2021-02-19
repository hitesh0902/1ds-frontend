import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import byTypeReducer from "./slices/ByTypeSlice";
import overTimeReducer from "./slices/OverTimeSlice";
import byCityReducer from "./slices/ByCitySlice";
import byStateReducer from "./slices/ByStateSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    byType: byTypeReducer,
    overTime: overTimeReducer,
    byCity: byCityReducer,
    byState: byStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
