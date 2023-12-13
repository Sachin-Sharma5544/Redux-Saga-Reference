import { SET_POSTS } from "../actionConstants";

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts,
    };
};
