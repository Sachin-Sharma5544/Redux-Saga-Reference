import React from "react";
import { useSelector } from "react-redux";

const PostComponent = () => {
    const selectedPost = useSelector((state) => state.post.selectedPost);
    console.log("Selected post ", selectedPost);

    return (
        <div className="post__component">
            <h2>Selected Post</h2>
            {selectedPost && (
                <>
                    <h4>Post title</h4>
                    <p>{selectedPost?.title}</p>
                    <h4>Post Summary</h4>
                    <p>{selectedPost?.body}</p>
                </>
            )}
        </div>
    );
};

export default PostComponent;
