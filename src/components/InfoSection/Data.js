export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About",
  headline: "About the game",
  description:
    "This is a web-based game, created as a semester work for the modul FWebT from the Fern Fachhochschule Schweiz university",
  buttonLabel: "Learn more",
  imgStart: false,
  img: require("../../images/svg-1.svg").default,
  alt: "Cards",
  dark: true,
  primary: true,
  darkText: false,
  buttonDestination: "/about"
};

export const homeObjTwo = {
  id: "howtoplay",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Tutorial",
  headline: "How to play",
  description:
    "Are you new to this game? Do you want to learn more about it, about the rules and how to play? Then you are at the right place! We wrote a detailed tutorial for you, which might give answers to your questions.",
  buttonLabel: "To the tutorial",
  imgStart: true,
  img: require("../../images/svg-2.svg").default,
  alt: "play",
  dark: false,
  primary: false,
  darkText: true,
  buttonDestination: "/howtoplay"
};

export const homeObjThree = {
  id: "highscores",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Highscores",
  headline: "The hall of fame",
  description:
    "This is where you will find the most skilled 'memoryUP' players! Are you already one of them or do you plan to become one?",
  buttonLabel: "Show me the legends",
  imgStart: false,
  img: require("../../images/svg-7.svg").default,
  alt: "tutorial",
  dark: true,
  primary: true,
  darkText: false,
  buttonDestination: "/highscores"
};
