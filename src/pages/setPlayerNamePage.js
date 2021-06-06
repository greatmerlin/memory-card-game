import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SilentNavbar from "../components/SilentNavbar/index.js";
import Footer from "../components/Footer";
import ToastValidation from "../components/ToastValidation.js";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormBackButton,
} from "../game/Player/PlayerElements.js";

const SetPlayerNamePage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function handleChange(event) {
    props.setPlayerName(event.target.value);

    if (props.playerName === "") {
      setValidated(false);
    } else if (props.playerName !== "") {
      setValidated(true);
    }
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (validated === false) {
      setShowToast(true);
    }
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SilentNavbar toggle={toggle} />
      <Container>
        <FormWrap>
          <Icon>Memory UP!</Icon>
          <ToastValidation showToast={showToast} setShowToast={setShowToast} />
          <FormContent>
            <Form onSubmit="" noValidate validated={validated}>
              <FormH1>Hello Hero, what is your name?</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput
                type="text"
                name="playerName"
                maxlength="10"
                required
                onChange={handleChange}
              />
              <FormBackButton
                type="submit"
                id="submitButton"
                onClick={handleClick}
                to={validated ? "/setdifficulty" : "/setplayername"}
              >
                next
              </FormBackButton>
              <FormBackButton to="/">Cancel and go back</FormBackButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default SetPlayerNamePage;
