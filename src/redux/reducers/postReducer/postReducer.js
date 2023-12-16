import {
    SET_POSTS_FAILURE,
    SET_POSTS_SUCCESS,
    SET_SELECTED_POST,
} from "../../actions/actionConstants";

const initialState = {
    posts: [],
    loading: false,
    error: null,
    selectedPost: null,
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case SET_POSTS_FAILURE:
            return { ...state, loading: false, posts: action.payload };
        case SET_SELECTED_POST:
            return { ...state, loading: false, selectedPost: action.payload };
        default:
            return state;
    }
};
