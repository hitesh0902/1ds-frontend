import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import axios from "axios";

// Using "any" here because throwing index error;
export interface StateObject {
  [type: string]: string;
}

// Here "key" is "segment" | "region" | "sub_category" | "category"
export interface ByStateState {
  [year: string]: Array<StateObject>;
}

const initialState: ByStateState = {};

export const ByStateSlice = createSlice({
  name: "byState",
  initialState,
  reducers: {
    getDataByState: (state, action) => {
      for (let i in action.payload) {
        state[i] = action.payload[i];
      }
    },
  },
});

export const { getDataByState } = ByStateSlice.actions;

export const getDataByStateAsync = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get("https://restdashboard.herokuapp.com/plot3");
    dispatch(getDataByState(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const selectByState = (state: RootState) => state.byState;

export default ByStateSlice.reducer;
