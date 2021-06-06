import "./Game.css";
import Board from "../game/Board/Board";
import Sidebar from "../components/Sidebar";
import SilentNavbar from "../components/SilentNavbar/index.js";
import Footer from "../components/Footer";
import {
  Container,
  ContainerWin,
  WinButton,
  ContainerWinText,
} from "../game/Difficulty/DifficultyElements";
import React, { useState } from "react";

function Game(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [playing, setplaying] = useState(true);
  const [coins, setCoins] = useState(
    props.location.state.difficulty === "easy"
      ? 16
      : props.location.state.difficulty === "medium"
      ? 24
      : 40
  );
  const [score, setScore] = useState(0);

  function activatePlayAgain() {
    setplaying(true);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("ISOPEN---> ", isOpen);
  };

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SilentNavbar toggle={toggle} />
      <header className="App-header">
        <div>score: {score} </div>
        <div>🧠 Test Your Memory 🧠 </div>
        <div>coins: {coins} </div>
      </header>

      <Container>
        {playing ? (
          <Board
            difficulty={props.location.state.difficulty}
            playerName={props.playerName}
            playing={playing}
            setplaying={setplaying}
            coins={coins}
            setCoins={setCoins}
            score={score}
            setScore={setScore}
          />
        ) : coins === 0 ? (
          <ContainerWin>
            <ContainerWinText>
              Unfortunately {props.playerName}, you don't have any coins left!
              If your score is high enough, you will take a place in our hall of
              fame! If not, start a new game and try this time to reach the top!
            </ContainerWinText>
            <WinButton to="/"> Back to Main Menu </WinButton>
          </ContainerWin>
        ) : (
          <ContainerWin>
            <ContainerWinText>
              Congratulations {props.playerName}, you won this round! Your score
              is {score} and you have {coins} coins left! You can either
              continue playing at the same difficulty and aim for a higher
              score, or give up and go back to the main menu. If you give up, no
              matter how high your score is, you will not take a place in the
              highscores.
            </ContainerWinText>
            <WinButton to="/"> Give up & go back to Main Menu </WinButton>
            <WinButton
              to={{
                pathname: "/game",
                state: { difficulty: props.location.state.difficulty },
              }}
              onClick={activatePlayAgain}
            >
              {" "}
              Continue playing{" "}
            </WinButton>
          </ContainerWin>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default Game;
