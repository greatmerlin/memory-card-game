import React, { useState } from "react";
import "./Card.css";

class Card extends React.Component {

  render() {

    let content;
    if(this.props.faceUp) {
        content = this.props.content;
    } else {
        content = "";
    }

    return (
      <div className={`Card ${this.props.faceUp ? 'face-up' : ''}`} onClick={this.props.flip}>
        {content}
      </div>
    );
  }
}

export default Card;
