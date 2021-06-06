import React, { useState } from "react";
import Sidebar from "../Sidebar";
import SilentNavbar from "../SilentNavbar/index.js";
import Footer from "../Footer";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  BlackContainer,
  Text,
  BackButton,
} from "./AboutElements.js";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("ISOPEN---> ", isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SilentNavbar toggle={toggle} />
      <Container>
        <FormWrap>
          <Icon>About this game</Icon>
          <FormContent>
            <BlackContainer>
              <Text>
                Memory UP is a card game in which all cards are laid face down
                on a surface and two cards are flipped face up over each turn.
                The object of the game is to turn over pairs of matching cards.
                However, this is a special version of the game. The difference
                is that each player gets some coins, depending on the difficulty
                he selects. If he doen't find a matching pair, he loses a coin.
                The game finishes as soon as the player has lost all of his
                coins.
                <br />
                This game was developed from "Theologos Baxevanos" as part of a
                semester exercise for the Fernfachhochschule Schweiz, university
                of applied sciences in Switzerland.
                <br />
                The project could not have been finished without the support of
                the advanced web technologies lecturer "Philipp Lauwiner". A
                huge thank you for making this subject fun and interesting to
                every single one of us.
                <br />
                Have fun playing the game! :)
              </Text>
              Î
            </BlackContainer>
          </FormContent>
        </FormWrap>
        <br />
        <BackButton to="/"> Back </BackButton>
      </Container>
      <Footer />
    </>
  );
}

export default About;
