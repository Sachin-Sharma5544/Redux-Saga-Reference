import { all } from "redux-saga/effects";
import { postSaga, selectedPostSaga } from "./postSaga/postSaga";

export function* rootSaga() {
    yield all([postSaga(), selectedPostSaga()]);
}
