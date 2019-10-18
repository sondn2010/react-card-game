import React from "react";

const CardDisplay = props => {
  return (
    <>
      {props.card.value}-{props.card.suit}
    </>
  );
};

export default CardDisplay;
