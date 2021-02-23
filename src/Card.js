import React, { useState } from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faceUp: false,
    };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({ faceUp: !this.state.faceUp });
  }

  render() {

    let content;
    if(this.state.faceUp) {
        content = this.props.content;
    } else {
        content = "Back";
    }

    return (
      <div className="Card" onClick={this.flip}>
        {content}
      </div>
    );
  }
}

export default Card;
