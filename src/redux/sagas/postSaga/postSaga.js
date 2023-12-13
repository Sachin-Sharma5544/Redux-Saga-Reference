import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
    SET_POSTS_FAILURE,
    SET_POSTS_REQUEST,
    SET_POSTS_SUCCESS,
} from "../../actions/actionConstants";
import axios from "axios";
import {
    setPostsSuccess,
    setPostsFailure,
} from "../../actions/postActions/postActions";

function* fetchPosts() {
    try {
        const data = yield call(
            axios.get("https://jsonplaceholder.typicode.com/posts")
        );
        yield put(setPostsSuccess(data));
    } catch (error) {
        yield put(setPostsFailure(error));
    }
}

function* postSaga() {
    yield takeEvery(SET_POSTS_SUCCESS, fetchPosts);
}

export default postSaga;
