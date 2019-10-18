import React from "react";
import CardDisplay from "./CardDisplay";

const PlayerCardsDisplay = props => {
  return (
    <>
      {props.cards.map((card, index) => (
        <div key={index}>
          <CardDisplay key={index} card={card} />
        </div>
      ))}
    </>
  );
};

export default PlayerCardsDisplay;
