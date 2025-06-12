import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {  RootState } from "../types";
import { IProduct } from "./types";

interface HomeState {
  data: IProduct[];
  error: string | null;
  loading: boolean;
}

const initialState: HomeState = {
  data: [],
  error: null,
  loading: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    fetchHomePage: (state, _payload: PayloadAction<string>) => {
      state.loading = true;
    },
    getHomePageData: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.loading = false;
      state.data = payload;
    },
    getHomeDataError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { fetchHomePage, getHomePageData, getHomeDataError } =
  homeSlice.actions;

export const selectHome = (state: RootState) => state.home.data;

export default homeSlice.reducer;
