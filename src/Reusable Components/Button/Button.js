import React from "react";

const Button = (props) => {
    const { clickHandler, buttonName, buttonClass } = props;

    return (
        <>
            <button onClick={clickHandler} className={buttonClass}>
                {buttonName}
            </button>
        </>
    );
};

export default Button;
