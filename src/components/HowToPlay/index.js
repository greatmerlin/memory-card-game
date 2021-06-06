import React, { useState } from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SilentNavbar from "../SilentNavbar/index.js";
import {
  Img,
  Container,
  FormWrap,
  Icon,
  FormContent,
  BlackContainer,
  Text,
  BackButton,
} from "./HowToPlayElements.js";

function HowToPlay() {
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
          <Icon>Memory UP Tutorial</Icon>
          <FormContent>
            <BlackContainer>
              <Text>Welcome to the Tutorial of the the Memory Up game!</Text>
              <br />
              <Text>
                First, you need to select "get started" from the main page
              </Text>
              <br />
              <Img
                src={require("../../images/tutorial_1.png").default}
                alt="tutorial 1"
              />
              <br />
              <Text>
                Then, you can write your nickname and select "next". Even if the
                name has already been used, you will be able to select the same
                name. There is not only one "Theo" in the world, right? We don't
                operate here with the principle "First come, first serve".
              </Text>
              <br />
              <Img
                src={require("../../images/tutorial_2.png").default}
                alt="tutorial 1"
              />
              <br />
              <Text>
                Now you can select the difficulty. If you choose "easy", 8 cards
                will be shown and you will get 4 coins. That means that you need
                to find 4 matching pairs and you can turn 4 times 2 not-matching
                cards in a turn. If you choose medium, 12 cards will be shown
                and you will get 6 coins. If you choose hard, 20 cards will be
                shown and you will get 10 coins. Thus, select the difficulty
                very carefully.
              </Text>
              <br />
              <Img
                src={require("../../images/tutorial_3.png").default}
                alt="tutorial 1"
              />
              <br />
              <Text>
                {" "}
                Now you see the cards. On the top left of the screen you can
                check your current score and on the top right of the screen you
                can check your remaining coins. To reveal a card, just click on
                it or if you use a touch screen device tip on top of it. You can
                turn maximum 2 cards in each turn. If they match, they turn blue
                and you are allowed to open 2 new cards. In this case your coins
                remain the same. If they do not match, then you lose a coin and
                the cards turn automatically back after 2 seconds. Once they are
                turned again, you are again allowed to open 2 cards.
              </Text>
              <br />
              <Img
                src={require("../../images/tutorial_4.png").default}
                alt="tutorial 1"
              />
              <br />
              <Img
                src={require("../../images/tutorial_5.png").default}
                alt="tutorial 1"
              />
              <br />
              <Text>
                {" "}
                If you find all the the matching cards, then you will be
                transfered on the next page. There, you can select either to
                give up and go back to the main menu, or continue and pursuit a
                place in the hall of fame page. To do that, you just select the
                "play again" button. If you do so, a new game of the same
                difficulty will beginn and the amount of coins you had before,
                will remain the same. The game will end once you lose all your
                coins.
              </Text>
              <br />
              <Img
                src={require("../../images/tutorial_6.png").default}
                alt="tutorial 1"
              />
              <br />
              <Img
                src={require("../../images/tutorial_7.png").default}
                alt="tutorial 1"
              />
              <br />
              <Text>
                If you lose all of your coins don't get discouraged. Your name
                will be on the hall of fame list and you can always start a new
                game and try to break your old record!
              </Text>
              <br />
              <Text>Have fun playing Memory UP!</Text>
              <br />
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

export default HowToPlay;
