import { SET_POSTS } from "../../actions/actionConstants";

const initialState = { posts: [] };

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload };
        default:
            return state;
    }
};
