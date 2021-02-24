import React from "react";
import Card from "./Card";

function Board() {
  const fronts = [
    "💩",
    "🧞",
    "🐅",
    "🐍",
    "🎃",
    "⛄",
    "🌞",
    "🤨",
    "😈",
    "💓",
    "🐔",
    "🐋",
  ];

  const deck = fronts.concat(fronts).sort(() => Math.random() -0.5);

  return deck.map((emoji) => {
    return (
      <div>
        <Card content={emoji} />
      </div>
    );
  });
}

export default Board;
