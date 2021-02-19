import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import axios from "axios";

// Using "any" here because throwing index error;
export interface CityObject {
  city: string;
  sales: string;
  profit: string;
}

export interface ByCityState {
  [year: string]: Array<CityObject>;
}

const initialState: ByCityState = {};

export const ByCitySlice = createSlice({
  name: "byCity",
  initialState,
  reducers: {
    getDataByCity: (state, action) => {
      for (let i in action.payload) {
        state[i] = action.payload[i];
      }
    },
  },
});

export const { getDataByCity } = ByCitySlice.actions;

export const getDataByCityAsync = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get("https://restdashboard.herokuapp.com/plot4");
    dispatch(getDataByCity(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const selectByCity = (state: RootState) => state.byCity;

export default ByCitySlice.reducer;
