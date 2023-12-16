import axios from "axios";

export const getPostsApi = async (url) => {
    return await axios.get(url);
};

export const getPostById = async () => {
    return await axios.get();
};
