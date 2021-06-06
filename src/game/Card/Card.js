import React from "react";
import "./Card.css";
var classNames = require("classnames");

class Card extends React.Component {
  render() {
    // content of the card (from props, see "board.js")
    let content;
    // if the card is faced up, how the emoji, if not, show nothing.
    if (this.props.faceUp) {
      content = this.props.content;
    } else {
      content = "";
    }

    var cardClas = classNames({
      Card: true,
      "face-up-turn": this.props.faceUp,
      "face-up-found": this.props.found,
    });

    return (
      <div className={cardClas} onClick={this.props.flip}>
        {content}
      </div>
    );
  }
}

export default Card;
