import { call, put, takeLatest } from "redux-saga/effects";
import { fetchHomePage, getHomeDataError, getHomePageData } from "./homeSlice";
import type { IProductsResp } from "./types";
import { fetchProductsAPI } from "../../api/productsAPI";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchHomeData(_actions: PayloadAction<string | number>) {
  try {
    const data: IProductsResp = yield call(fetchProductsAPI);
    yield put(getHomePageData(data.products));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    yield put(getHomeDataError(message));
  }
}

export default function* homePageSaga() {
  yield takeLatest(fetchHomePage, fetchHomeData);
}
