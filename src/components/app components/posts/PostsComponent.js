import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPostRequest } from "../../../redux/actions/postActions/postActions";

const PostsComponent = () => {
    const posts = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    console.log(posts);

    const handleItemClick = (id) => {
        dispatch(setSelectedPostRequest(id));
    };

    return (
        <div className="posts__component">
            <ul className="posts__list">
                <h2>Posts</h2>
                {posts.map((item) => (
                    <li key={item.id} onClick={() => handleItemClick(item.id)}>
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
