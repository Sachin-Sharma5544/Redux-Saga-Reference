import axios from "axios";

export const getPostsApi = async (url) => {
    return await axios.get(url);
};

export const getPostById = async (url) => {
    return await axios.get(url);
};
