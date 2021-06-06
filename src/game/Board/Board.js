import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import firebase from "../../Service/Firebase";
import uuid from "react-uuid";

const Board = (props) => {
  const [lastCard, setlastCard] = useState(null);
  const [deck, setdeck] = useState([]);
  const [foundCard, setfoundCard] = useState(0);

  // define how many cards each difficulty should have ( x2 )
  const EASY = 4;
  const MEDIUM = 6;
  const HARD = 10;

  // suffle deck, set to backflip (INIT)
  useEffect(() => {
    if (props.playing) {
      const ref = firebase.firestore().collection("emojis");

      function getEmojis() {
        ref.get().then((item) => {
          const items = item.docs.map((doc) => doc.data());
          const Emojis = items[0].emojis;
          let usedEmojis = [];

          switch (props.difficulty) {
            case "easy":
              usedEmojis = Emojis.slice(0, EASY);
              break;
            case "medium":
              usedEmojis = Emojis.slice(0, MEDIUM);
              break;
            case "hard":
              usedEmojis = Emojis.slice(0, HARD);
              break;
            default:
              usedEmojis = [];
          }

          setdeck(
            usedEmojis
              .concat(usedEmojis)
              .sort(() => Math.random() - 0.5)
              .map((emoji) => {
                return {
                  content: emoji,
                  faceUp: false,
                  found: false,
                };
              })
          );
        });
      }
      getEmojis();
    } else {
      // Game ends because playing was set to false
    }
  }, [props.difficulty, props.playing]);

  // if the card is faced up, do nothing - not allow to turn the card back
  const cardReveal = (cardIndex, faceUp) => {
    if (faceUp) {
      return;
    }

    // each time a card is faceUP increment the acc by 1
    const countFaceUpCards = (cardList) => {
      return cardList.reduce((acc, card) => {
        return card.faceUp ? acc + 1 : acc;
      }, 1);
    };

    // for easy diff -> max 2 cards open at a time
    if (props.difficulty === "easy") {
      if (countFaceUpCards(deck) > 2 && foundCard === 0) {
        return;
      } else if (countFaceUpCards(deck) > 4 && foundCard === 1) {
        return;
      } else if (countFaceUpCards(deck) > 6 && foundCard === 2) {
        return;
      } else {
      }
    } else if (props.difficulty === "medium") {
      if (countFaceUpCards(deck) > 2 && foundCard === 0) {
        return;
      } else if (countFaceUpCards(deck) > 4 && foundCard === 1) {
        return;
      } else if (countFaceUpCards(deck) > 6 && foundCard === 2) {
        return;
      } else if (countFaceUpCards(deck) > 8 && foundCard === 3) {
        return;
      } else if (countFaceUpCards(deck) > 10 && foundCard === 4) {
        return;
      } else {
      }
    } else if (props.difficulty === "hard") {
      if (countFaceUpCards(deck) > 2 && foundCard === 0) {
        return;
      } else if (countFaceUpCards(deck) > 4 && foundCard === 1) {
        return;
      } else if (countFaceUpCards(deck) > 6 && foundCard === 2) {
        return;
      } else if (countFaceUpCards(deck) > 8 && foundCard === 3) {
        return;
      } else if (countFaceUpCards(deck) > 10 && foundCard === 4) {
        return;
      } else if (countFaceUpCards(deck) > 12 && foundCard === 5) {
        return;
      } else if (countFaceUpCards(deck) > 14 && foundCard === 6) {
        return;
      } else if (countFaceUpCards(deck) > 16 && foundCard === 7) {
        return;
      } else if (countFaceUpCards(deck) > 18 && foundCard === 8) {
        return;
      } else if (countFaceUpCards(deck) > 20 && foundCard === 9) {
        return;
      } else {
      }
    }

    // now flip the current card using this method
    flipCard(cardIndex);

    // with this we solve the problem of the first card (and card after a match up)
    if (lastCard === null) {
      setlastCard(cardIndex);
    }

    // if we found a match, mark the cards and set the last card to null
    if (foundMatchingPair(cardIndex, lastCard)) {
      markCardAsFound(cardIndex, lastCard);
      setlastCard(null);
    } else if (lastCard === null) {
      return;

      // if we did't find a match, flip the 2 cards back
    } else {
      props.setCoins(props.coins - 1);
      // game ends when the coins are 0
      if (props.coins === 1) {
        // store the data if the player has a score greater than 0
        if (props.score > 0) {
          endGame();
        }
        setTimeout(() => {
          props.setplaying(false);
        }, 1000);
      }
      setlastCard(null);
      setTimeout(() => {
        flipCard(cardIndex);
        flipCard(lastCard);
      }, 2000);
    }
  };

  // help function to flip the selected card setting the faceUp attribute to the opposite
  const flipCard = (cardIndex) => {
    setdeck(
      deck.map((emoji, i) => {
        if (i === cardIndex) {
          return {
            content: emoji.content,
            faceUp: !emoji.faceUp,
            found: emoji.found,
          };
        } else {
          return emoji;
        }
      })
    );
  };

  // help function to determine if 2 cards have the same emoji
  const foundMatchingPair = (currentIndex, previousIndex) => {
    if (previousIndex === null) {
      return false;
    }
    const currentEmoji = deck[currentIndex].content;
    const previousEmoji = deck[previousIndex].content;

    return currentEmoji === previousEmoji;
  };

  // mark 2 cards as found, turn their found attribute to the opposite
  const markCardAsFound = (card1, card2) => {
    setdeck(
      deck.map((emoji, i) => {
        if (i === card1 || i === card2) {
          setfoundCard(foundCard + 1);
          if (
            (props.difficulty === "easy" && foundCard === 3) ||
            (props.difficulty === "medium" && foundCard === 5) ||
            (props.difficulty === "hard" && foundCard === 9)
          ) {
            // each round ends here
            props.setScore(props.score + 1);
            props.setCoins(props.coins + 1);
            setTimeout(() => {
              props.setplaying(false);
            }, 1000);
            
          }
          return {
            content: emoji.content,
            faceUp: true,
            found: !emoji.found,
          };
        } else {
          return emoji;
        }
      })
    );
  };

  function endGame() {
    firebase.database().ref(`highscores/ + ${uuid()}`).set({
      player: props.playerName,
      difficulty: props.difficulty,
      score: props.score,
    });
  }

  // maps the deck and renders the cards
  return deck.map((emoji, i) => {
    return (
      <Card
        key={i}
        content={emoji.content}
        faceUp={emoji.faceUp}
        found={emoji.found}
        flip={() => {
          cardReveal(i, emoji.faceUp);
        }}
      />
    );
  });
};

export default Board;
