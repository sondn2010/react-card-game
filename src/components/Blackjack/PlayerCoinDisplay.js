import React from "react";

const PlayerCoinDisplay = props => {
  return (
    <>
      <span className="badge badge-info">${props.coin}</span>
    </>
  );
};

export default PlayerCoinDisplay;
