import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../types";

interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    getHomePage: () => {}
  },
});

export const {decrement, increment, getHomePage} = homeSlice.actions;

export const selectCount = (state: RootState) => state.home.value;

export default homeSlice.reducer;
