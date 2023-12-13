import { call, put, takeLatest } from "redux-saga/effects";
import { SET_POSTS } from "../../actions/actionConstants";
import axios from "axios";
import { setPosts } from "../../actions/postActions/postActions";

function* fetchPosts() {
    try {
        const data = yield call(
            axios.get("https://jsonplaceholder.typicode.com/posts")
        );
        console.log("Data", data);
        yield put(setPosts(data));
    } catch (error) {
        console.log(error);
    }
}

function* postSaga() {
    yield takeLatest(SET_POSTS, fetchPosts);
}

export default postSaga;
