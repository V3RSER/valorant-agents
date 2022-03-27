import { characterType } from "../types/characterActionType";

const INITIAL_STATE = {
  characterList: [],
};

export default function reducerCharacter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case characterType.SET_LIST: {
      return { ...state, characterList: action.payload };
    }
    default:
      return state;
  }
}
