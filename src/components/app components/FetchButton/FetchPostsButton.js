import React from "react";
import Button from "../../Reusable Components/Button/Button";
import { useDispatch } from "react-redux";
import { setPostsRequest } from "../../../redux/actions/postActions/postActions";

const FetchPostsButton = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Button
                clickHandler={() => dispatch(setPostsRequest())}
                buttonName="Fetch Posts"
                buttonClass="fetch__button"
            />
        </>
    );
};

export default FetchPostsButton;
