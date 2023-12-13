import {
    SET_POSTS_REQUEST,
    SET_POSTS_FAILURE,
    SET_POSTS_SUCCESS,
} from "../../actions/actionConstants";

const initialState = { posts: [], loading: false, error: null };

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS_REQUEST:
            return { ...state, loading: true, error: null };
        case SET_POSTS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SET_POSTS_FAILURE:
            return { ...state, loading: false, data: action.payload };
        default:
            return state;
    }
};
