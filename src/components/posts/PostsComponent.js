import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPostsRequest } from "../../redux/actions/postActions/postActions";

const PostsComponent = () => {
    const posts = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPostsRequest());
    }, [dispatch]);

    console.log(posts);
    return (
        <div className="posts__component">
            <ul className="posts__list">
                <h2>Posts</h2>
                {posts.map((item) => (
                    <li>
                        <input type="radio" name="post"></input>
                        <span>Title: {item.title}</span>
                        <p>Description: {item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
