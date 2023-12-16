import { call, put, takeLatest } from "redux-saga/effects";
import {
    SET_POSTS_REQUEST,
    SET_SELECTED_POST_REQUEST,
} from "../../actions/actionConstants";
import {
    setPostsSuccess,
    setPostsFailure,
    setSelectedPost,
} from "../../actions/postActions/postActions";
import { getPostsApi, getPostById } from "./postApi";

function* fetchPosts() {
    try {
        //yield call(getPostsApi()); I was not sending function, but was sending the function call, hence it was failing now its correct
        const response = yield call(
            getPostsApi,
            "https://jsonplaceholder.typicode.com/posts"
        );
        yield put(setPostsSuccess(response.data));
    } catch (error) {
        yield put(setPostsFailure(error));
    }
}

function* postSaga() {
    yield takeLatest(SET_POSTS_REQUEST, fetchPosts);
}

function* fetchSelectedPost(action) {
    try {
        const response = yield getPostById(
            `https://jsonplaceholder.typicode.com/posts/${action.payload}`
        );
        yield put(setSelectedPost(response?.data));
    } catch (error) {
        console.log(error);
    }
}

function* selectedPostSaga() {
    yield takeLatest(SET_SELECTED_POST_REQUEST, fetchSelectedPost);
}

export { postSaga, selectedPostSaga };
