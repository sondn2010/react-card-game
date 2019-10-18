import React from "react";

const CardDisplay = props => {
  return (
    <div className="d-inline card-display">
      <img
        src={`/assets/Playing_card_${props.card.suit}_${props.card.value}.png`}
        alt={`${props.card.value}-${props.card.suit}`}
      />
    </div>
  );
};

export default CardDisplay;
