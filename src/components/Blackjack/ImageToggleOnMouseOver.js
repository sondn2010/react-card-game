import React, { useRef } from "react";

export default ({primaryImg}) => {

    const imageRef = useRef(null);
    return (
        <img
            onMouseOver={() => {
                imageRef.current.src = primaryImg.replace(/\.[^.]+$/, "-hover$&");
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
            src={primaryImg}
            alt="avatar" ref={imageRef}
            className="avatar img-fluid img-thumbnail mx-auto d-block"
        />
    );
};