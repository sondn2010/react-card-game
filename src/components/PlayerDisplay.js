import React from "react";
import PlayerCardsDisplay from "./PlayerCardsDisplay";
import CardPlayerScore from "./PlayerScore";
import CardPlayerAvatar from "./PlayerAvatar";
import PlayerCoinDisplay from "./PlayerCoinDisplay";

const PlayerDisplay = props => {
  return (
    <>
      <PlayerCoinDisplay coin={props.playerCoin} />
      <CardPlayerAvatar src={props.playerAvatar} />
      <CardPlayerScore score={props.playerScore} />
      <PlayerCardsDisplay cards={props.playerCards} />
    </>
  );
};

export default PlayerDisplay;
