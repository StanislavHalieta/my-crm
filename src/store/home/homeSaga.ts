import { call, put, takeLatest } from "redux-saga/effects";
import { fetchHomePage, getHomeDataError, getHomePageData } from "./homeSlice";
import type { IProductsResp } from "./types";
import { fetchProductsAPI } from "../../api/productsAPI";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchHomeData(actions?: PayloadAction<string | number>) {
  try {
    // if (actions?.payload) console.log("Payload: ", actions?.payload);
    const data: IProduct[] = yield call(fetchProductsAPI);
    console.log("On saga: ", data);
    
    yield put(getHomePageData(data));
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    yield put(getHomeDataError(message));
  }
}

export default function* homePageSaga() {
  yield takeLatest(fetchHomePage, fetchHomeData);
}
