import {
    SET_POSTS_REQUEST,
    SET_POSTS_SUCCESS,
    SET_POSTS_FAILURE,
    SET_SELECTED_POST,
    SET_SELECTED_POST_REQUEST,
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

export const setSelectedPostRequest = (postId) => {
    return {
        type: SET_SELECTED_POST_REQUEST,
        payload: postId,
    };
};

export const setSelectedPost = (post) => {
    return {
        type: SET_SELECTED_POST,
        payload: post,
    };
};
