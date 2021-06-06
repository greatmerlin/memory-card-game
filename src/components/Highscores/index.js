import React, { useState, useEffect } from "react";
import firebase from "../../Service/Firebase.js";
import Sidebar from "../../components/Sidebar";
import SilentNavbar from "../../components/SilentNavbar/index.js";
import Footer from "../../components/Footer";

import {
  Container,
  PlayerNameDiv,
  DifficultyDiv,
  ScoreDiv,
  HallOfFame,
  BackButton,
} from "./HighscoreElements.js";

function Highscores() {
  const [highscores, setHighscores] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ref = firebase.database().ref("highscores");

    ref.on("value", getData, errData);

    function getData(data) {
      const arrays = data.val();
      const keys = Object.keys(arrays);

      setHighscores([]);

      for (let i = 0; i < keys.length; i++) {
        const eachArray = keys[i];
        const arraysItems = arrays[eachArray];

        setHighscores((prev) => {
          return [
            ...prev,
            {
              playername: arraysItems.player,
              difficulty: arraysItems.difficulty,
              score: arraysItems.score,
            },
          ];
        });
      }
    }
  }, []);

  function errData(err) {
    console.log("Error");
    console.log(err);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("ISOPEN---> ", isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SilentNavbar toggle={toggle} />
      <HallOfFame>Hall of Fame</HallOfFame>
      <Container>
        <ul>
          {highscores.map((item) => {
            return (
              <div style={{ padding: 10 }}>
                <PlayerNameDiv>Playername: {item.playername}</PlayerNameDiv>
                <DifficultyDiv>Difficulty: {item.difficulty}</DifficultyDiv>
                <ScoreDiv>Score: {item.score}</ScoreDiv>
              </div>
            );
          })}
        </ul>
        <br />
        <BackButton to="/"> Back </BackButton>
      </Container>
      <Footer />
    </>
  );
}

export default Highscores;
