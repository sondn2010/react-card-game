import React, { useState } from "react";

import utils from "./cardgame-utils";
import GameState from "./GameState";
import GameButton from "./GameButton";
import PlayerDisplay from "./PlayerDisplay";

const CardGame = () => {
  const [dealerCoin, setDealerCoin] = useState(1000);
  const [playerCoin, setPlayerCoin] = useState(300);

  const [deck, setDeck] = useState(utils.createDeck());
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);

  const [gameStatus, setGameStatus] = useState({
    message: "Wanna play? Only 50 coin each.",
    emo: "warning"
  });

  const updateScores = (newPlayerCards, newDealerCards) => {
    setDealerScore(utils.getScore(newDealerCards));
    setPlayerScore(utils.getScore(newPlayerCards));
  };

  const resetGame = () => {
    setGameStarted(false);
  };

  const showStatus = playerWon => {
    let newDealerCoin = dealerCoin;
    let newPlayerCoin = playerCoin;

    if (playerWon) {
      newDealerCoin = dealerCoin - 50;
      newPlayerCoin = playerCoin + 50;

      setGameStatus({ message: "OK. You win this time.", emo: "danger" });
    } else {
      newDealerCoin = dealerCoin + 50;
      newPlayerCoin = playerCoin - 50;

      setGameStatus({
        message: "Ha ha, I win! Don't you dare to try one more.",
        emo: "warning"
      });
    }

    if (newPlayerCoin <= 0) {
      setGameStatus({
        message: "Ha ha haaaa.., stupid man! Get out of here.",
        emo: "danger"
      });
    }
    if (dealerCoin <= 0) {
      setGameStatus({
        message: "I own you my life, please give me money back.",
        emo: "dark"
      });
    }

    setDealerCoin(newDealerCoin);
    setPlayerCoin(newPlayerCoin);
    resetGame();
  };

  const checkForEndOfGame = (newPlayerCards, newDealerCards, gameOver) => {
    let newPlayerScore = utils.getScore(newPlayerCards);
    let newDealerScore = utils.getScore(newDealerCards);

    if (gameOver) {
      // let dealer take cards
      while (
        newDealerScore < newPlayerScore &&
        newPlayerScore <= 21 &&
        newDealerScore <= 21
      ) {
        newDealerCards.push(utils.getNextCard(deck));
        newDealerScore = utils.getScore(dealerCards);
      }

      setDealerCards(newDealerCards);
      updateScores(newPlayerCards, newDealerCards);
    }

    if (newPlayerScore > 21) {
      showStatus(false);
    } else if (newDealerScore > 21) {
      showStatus(true);
    } else if (gameOver) {
      if (newPlayerScore > newDealerScore) {
        showStatus(true);
      } else {
        showStatus(false);
      }
    }

    updateScores(newPlayerCards, newDealerCards);
  };

  const onNewClick = () => {
    setGameStarted(true);

    setGameStatus({ message: "More or stay?", emo: "info" });

    setDeck(utils.createDeck());
    setDeck(utils.shuffleDeck(deck));

    var cards2p = [utils.getNextCard(deck), utils.getNextCard(deck)];
    setPlayerCards(cards2p);

    var cards2d = [utils.getNextCard(deck), utils.getNextCard(deck)];
    setDealerCards(cards2d);

    updateScores(cards2p, cards2d);
  };

  const onHitClick = () => {
    var cards = playerCards;
    cards.push(utils.getNextCard(deck));

    setGameStatus({ message: "Draw more, good job.", emo: "info" });

    setPlayerCards(cards);

    checkForEndOfGame(cards, dealerCards);
  };
  const onStayClick = () => {
    setGameStatus({ message: "Stay here. Let's see.", emo: "info" });

    setTimeout(function() {
      checkForEndOfGame(playerCards, dealerCards, true);
    }, 2000);
  };

  return (
    <>
      <h1 className="text-center">Blackjack</h1>

      <div className="container">
        <div className="row text-center">
          <div className="col-sm">
            <PlayerDisplay
              playerCoin={playerCoin}
              playerCards={playerCards}
              playerScore={playerScore}
              playerAvatar="https://www.w3schools.com/w3images/avatar1.png"
            />
            {!gameStarted && (
              <GameButton text="Ok, let's play." onClick={onNewClick} />
            )}
            {gameStarted && (
              <>
                <GameButton text="Draw" onClick={onHitClick} />
                <GameButton text="Stay" onClick={onStayClick} />
              </>
            )}
          </div>
          <div className="col-sm">
            <PlayerDisplay
              playerCoin={dealerCoin}
              playerCards={dealerCards}
              playerScore={dealerScore}
              playerAvatar="http://www.newdesignfile.com/postpic/2013/08/cool-gaming-avatars_87678.jpg"
            />
            <GameState state={gameStatus} />
          </div>
        </div>
      </div>
    </>
  );
};

export function App({ initialData }) {
  return <CardGame />;
}
