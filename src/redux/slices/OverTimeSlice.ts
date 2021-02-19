import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import axios from "axios";

// Using "any" here because throwing index error;
export interface TimeObject {
  month: number;
  sales: string;
  profit: string;
}

export interface OverTimeState {
  [year: string]: Array<TimeObject>;
}

const initialState: OverTimeState = {};

export const OverTimeSlice = createSlice({
  name: "overTime",
  initialState,
  reducers: {
    getDataOverTime: (state, action) => {
      for (let i in action.payload) {
        state[i] = action.payload[i];
      }
    },
  },
});

export const { getDataOverTime } = OverTimeSlice.actions;

export const getDataOverTimeAsync = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get("https://restdashboard.herokuapp.com/plot2");
    dispatch(getDataOverTime(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const selectOverTime = (state: RootState) => state.overTime;

export default OverTimeSlice.reducer;
