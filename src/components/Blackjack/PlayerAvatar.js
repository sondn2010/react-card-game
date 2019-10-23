import React from "react";
import ImageToggleOnMouseOver from "./ImageToggleOnMouseOver"

const PlayerAvatar = props => {
  return (
    <>
      <ImageToggleOnMouseOver primaryImg={props.src} alt="something"/>
    </>
  );
};

export default PlayerAvatar;
