import "core-js/stable";
import "regenerator-runtime/runtime";
import { Game } from '../js/Game';
import { actionMap  } from "./actions";

import '../css/index.scss';

const appMain = document.getElementById("app");
const playSection = document.getElementById("play");

const actions = Object.keys(actionMap);

const removePlaySection = () => {
  if (playSection) {
    playSection.remove();
  }
};

const displayResults = (game) => {
  const results = document.createElement("section");
  results.id = "result";

  const winnerP = document.createElement("p");
  winnerP.id = "winner";
  const player1Summary = document.createElement("p");
  player1Summary.id = 'player-1-summary';
  const player2Summary = document.createElement("p");
  player2Summary.id = 'player-2-summary';

  winnerP.innerHTML = game.result();
  player1Summary.innerHTML = game.player1Summary();
  player2Summary.innerHTML = game.player2Summary();

  const buttonElement = document.createElement("button");
  buttonElement.innerHTML = "🔄&nbsp;Restart";
  buttonElement.addEventListener("click", () =>
    window.location.assign(window.location.toString())
  );

  results.append(winnerP, player1Summary, player2Summary, buttonElement);

  if (appMain) {
    appMain.append(results);
  }
};

const handlePlayerVsComputerActionClick = (action) => {
  const game = new Game(actionMap);
  game.setPlayer1Name("You");
  game.setPlayer2Name("Computer");
  game.play(action);
  removePlaySection();
  displayResults(game);
};

const handleComputerVsComputerClick = () => {
  const game = new Game(actionMap);
  game.setPlayer1Name("Computer 1");
  game.setPlayer2Name("Computer 2");
  game.play();
  removePlaySection();
  displayResults(game);
};

const playerActionItems = actions.map((key) => {
  const li = document.createElement("li");
  const buttonElement = document.createElement("button");
  buttonElement.id = key;
  buttonElement.title = actionMap[key].helpText;
  buttonElement.innerHTML = actionMap[key].display;
  buttonElement.addEventListener("click", () => handlePlayerVsComputerActionClick(key))
  li.append(buttonElement);
  return li;
});

const playerActionList = document.getElementById("player-actions");
playerActionList.append(...playerActionItems);


const simulateButton = document.getElementById("simulate");
simulateButton.addEventListener("click", handleComputerVsComputerClick);
