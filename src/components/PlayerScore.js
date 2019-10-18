import React from "react";

const PlayerScore = props => {
  return (
    <>
      score: <span className="badge badge-success">{props.score}</span>
    </>
  );
};

export default PlayerScore;
