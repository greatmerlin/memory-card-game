import React from "react";
import Card from "./Card";

class Board extends React.Component {
  constructor(props) {
    super(props);

    const fronts = [
      "💩",
      // "🧞",
      // "🐅",
      // "🐍",
      // "🎃",
      // "⛄",
      // "🌞",
      // "🤨",
      // "😈",
      // "💓",
      // "🐔",
      "🐋",
    ];

    const deck = fronts
      .concat(fronts)
      .sort(() => Math.random() - 0.5)
      .map((emoji) => {
        return {
          content: emoji,
          faceUp: false,
        };
      });

    this.state = {
      deck: deck,
      firstCard: null,
    };

    this.flip = this.flip.bind(this);
  }

  flipCardTo(cardIdx, faceUp) {
    this.setState({
      deck: this.state.deck.map((emoji, i) => {
        if (i === cardIdx) {
          return {
            content: emoji.content,
            faceUp: !emoji.faceUp,
          };
        } else {
          return emoji;
        }
      }),
    });
  }

  flip(cardIdx) {
    if (this.state.firstCard === null) {
      this.setState({
        firstCard: cardIdx,
      });
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIdx].content;
      if (firstCardContent === secondCardContent) {
        this.setState({
          firstCard: null,
        });
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false);
          this.flipCardTo(cardIdx, false);
          this.setState({
            firstCard: null,
          });
        }, 2000);
      }
    }

    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp);
  }

  render() {
    return this.state.deck.map((emoji, i) => {
      return (
        <div>
          <Card
            content={emoji.content}
            faceUp={emoji.faceUp}
            flip={() => {
              this.flip(i);
            }}
          />
        </div>
      );
    });
  }
}

export default Board;
