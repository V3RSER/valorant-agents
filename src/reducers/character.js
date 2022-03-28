import { characterType } from "../types/characterActionType";

const INITIAL_STATE = {
  characterList: [],
  character: { abilities: [] },
  ability: "Ability1"
};

export default function reducerCharacter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case characterType.SET_LIST: {
      return { ...state, characterList: action.payload };
    }
    case characterType.SET: {
      return { ...state, character: action.payload };
    }
    
    case characterType.SET_ABILITY: {
      return { ...state, ability: action.ability };
    }
    default:
      return state;
  }
}
