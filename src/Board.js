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

  return fronts.map((emoji) => {
    return (
      <div className="board">
        <Card content={emoji} />
        <Card content={emoji} />
      </div>
    );
  });
}

export default Board;
