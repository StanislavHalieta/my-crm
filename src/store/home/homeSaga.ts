import { put, takeEvery } from "redux-saga/effects"
import { getHomePage } from "./homeSlice";

function* fetchHomeData(action: any) {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId)
    // yield put({ type: counte, user: user })
  } catch (e: any) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* homePageSaga() {
  yield takeEvery(getHomePage.name, fetchHomeData);
}

export default homePageSaga;
