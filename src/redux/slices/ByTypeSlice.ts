import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import axios from "axios";

// Using "any" here because throwing index error;
export interface TypeObject {
  [type: string]: string;
}

// Here "key" is "segment" | "region" | "sub_category" | "category"
export interface ByTypeState {
  [key: string]: {
    [year: string]: Array<TypeObject>;
  };
}

const initialState: ByTypeState = {};

export const ByTypeSlice = createSlice({
  name: "byType",
  initialState,
  reducers: {
    getDataByType: (state, action) => {
      for (let i in action.payload) {
        state[i] = action.payload[i];
      }
    },
  },
});

export const { getDataByType } = ByTypeSlice.actions;

export const getDataByTypeAsync = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get("https://restdashboard.herokuapp.com/plot1");
    dispatch(getDataByType(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const selectByType = (state: RootState) => state.byType;

export default ByTypeSlice.reducer;
