import "core-js/stable";
import "regenerator-runtime/runtime";

import { actionMap  } from "./actions";

import '../css/index.scss';

const actions = Object.keys(actionMap);

const playerActionItems = actions.map((key) => {
  const li = document.createElement("li");
  const buttonElement = document.createElement("button");
  buttonElement.id = key;
  buttonElement.title = actionMap[key].helpText;
  buttonElement.innerHTML = actionMap[key].display;
  buttonElement.addEventListener("click", () => console.log('do something'))
  li.append(buttonElement);
  return li;
});

const playerActionList = document.getElementById("player-actions");
playerActionList.append(...playerActionItems);