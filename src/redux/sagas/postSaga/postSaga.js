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
import { getPostsApi } from "./postApi";

function* fetchPosts() {
    try {
        //yield call(getPostsApi()); I was not sending function, but was sending the function call, hence it was failing now its correct
        const data = yield call(
            getPostsApi,
            "https://jsonplaceholder.typicode.com/posts"
        );
        yield put(setPostsSuccess(data));
    } catch (error) {
        yield put(setPostsFailure(error));
    }
}

function* postSaga() {
    yield takeLatest(SET_POSTS_REQUEST, fetchPosts);
}

export default postSaga;
