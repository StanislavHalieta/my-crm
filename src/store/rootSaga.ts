
import { fork } from "redux-saga/effects";
import homePageSaga from "./home/homeSaga";

export default function* rootSaga() {
     yield fork(homePageSaga)
//   yield spawn(saga1)
//   yield spawn(saga2)
//   yield spawn(saga3)
}