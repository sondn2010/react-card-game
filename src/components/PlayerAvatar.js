import React from "react";

const PlayerAvatar = props => {
  return (
    <>
      <img
        src={props.src}
        className="avatar img-fluid img-thumbnail mx-auto d-block"
        alt="avatar"
      />
    </>
  );
};

export default PlayerAvatar;
