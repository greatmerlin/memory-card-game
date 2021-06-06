import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SetPlayerNamePage from "./pages/setPlayerNamePage";
import Game from "./pages/Game";
import SetDifficultyPage from "./pages/setDifficultyPage";
import Highscores from "./components/Highscores/index.js";
import About from "./components/About/index.js";
import HowToPlay from "./components/HowToPlay/index.js";

function App() {
  const [playerName, setPlayerName] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/highscores" component={Highscores} />
        <Route path="/about" component={About} />
        <Route path="/howtoplay" component={HowToPlay} />
        <Route
          path="/setplayername"
          render={(props) => (
            <SetPlayerNamePage
              {...props}
              playerName={playerName}
              setPlayerName={setPlayerName}
            />
          )}
        />
        <Route
          path="/setdifficulty"
          render={(props) => (
            <SetDifficultyPage {...props} playerName={playerName} />
          )}
        />
        <Route
          path="/game"
          render={(props) => <Game {...props} playerName={playerName} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
