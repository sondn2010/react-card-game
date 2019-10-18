import React from "react";
import CardDisplay from "./CardDisplay";

const PlayerCardsDisplay = props => {
  return (
    <div className="clearfix">
      {props.cards.map((card, index) => (
        <div key={index} className="d-inline">
          <CardDisplay key={index} card={card} />
        </div>
      ))}
    </div>
  );
};

export default PlayerCardsDisplay;
