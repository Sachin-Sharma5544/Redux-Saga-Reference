import React from "react";
import { useSelector } from "react-redux";

const PostsComponent = () => {
    const posts = useSelector((state) => state.post.posts);

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
