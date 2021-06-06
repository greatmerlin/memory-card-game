import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SilentNavbar from "../components/SilentNavbar/index.js";
import Footer from "../components/Footer";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormBackButton,
} from "../game/Difficulty/DifficultyElements.js";

const SetDifficultyPage = (props) => {
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
          <Icon>Memory UP!</Icon>
          <FormContent>
            <Form>
              <FormH1>{`Hello ${props.playerName}, select the difficulty`}</FormH1>
              <FormBackButton
                to={{ pathname: "/game", state: { difficulty: "easy" } }}
              >
                Easy
              </FormBackButton>
              <FormBackButton
                to={{ pathname: "/game", state: { difficulty: "medium" } }}
              >
                Medium
              </FormBackButton>
              <FormBackButton
                to={{ pathname: "/game", state: { difficulty: "hard" } }}
              >
                Hard
              </FormBackButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default SetDifficultyPage;
