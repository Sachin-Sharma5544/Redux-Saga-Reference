import {
    SET_POSTS_REQUEST,
    SET_POSTS_SUCCESS,
    SET_POSTS_FAILURE,
} from "../actionConstants";

export const setPostsRequest = () => {
    return {
        type: SET_POSTS_REQUEST,
    };
};

export const setPostsSuccess = (data) => {
    return {
        type: SET_POSTS_SUCCESS,
        payload: data,
    };
};

export const setPostsFailure = (error) => {
    return {
        type: SET_POSTS_FAILURE,
        payload: error,
    };
};
