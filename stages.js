import {
  initialStage,
  stageOne,
  stageTwo,
  stageThree,
  stageFour,
  stageFive,
  stageSix,
  stageSeven,
  stageEight,
} from "./stages/index.js";

import { storage } from "./storage.js";

export const stages = [
  {
    descricao: "Welcome",
    stage: initialStage,
  },
  {
    descricao: "Menu",
    stage: stageOne,
  },
  {
    descricao: "MenuItens",
    stage: stageTwo,
  },
  {
    descricao: "Address",
    stage: stageThree,
  },
  {
    descricao: "Payment",
    stage: stageFour,
  },
  {
    descricao: "Summary",
    stage: stageFive,
  },
  {
    descricao: "Thing",
    stage: stageSix,
  },
  {
    descricao: "Thing2",
    stage: stageSeven,
  },
  {
    descricao: "attendant",
    stage: stageEight,
  }
];

export function setStage({ from }) {
  storage[from] = {
    stage: 0,
    itens: [],
    address: "",
  };

  return storage[from].stage;
}

export function getStage({ from }) {
  if (storage[from]) {
    return storage[from].stage;
  } else {
    storage[from] = {
      stage: 0,
      itens: [],
      address: "",
    };

    return storage[from].stage;
  }
}
