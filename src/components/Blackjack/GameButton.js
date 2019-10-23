import React from "react";

const GameButton = props => (
  <>
    <button
      type="button"
      className="btn btn-primary btn-block"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  </>
);

export default GameButton;
