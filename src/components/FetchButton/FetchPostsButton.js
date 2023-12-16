import React from "react";
import Button from "../../Reusable Components/Button/Button";
const FetchPostsButton = () => {
    return (
        <>
            <Button
                clickHandler={() => true}
                buttonName="Fetch Posts"
                buttonClass="fetch__button"
            />
        </>
    );
};

export default FetchPostsButton;
