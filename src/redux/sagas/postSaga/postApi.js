import axios from "axios";

export const getPostsApi = async (url) => {
    return await axios.get(url);
};
