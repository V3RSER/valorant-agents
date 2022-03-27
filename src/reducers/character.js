import { character as CharacterTypes } from "../constants/characterActionTypes";

const INITIAL_STATE = {
  response: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterTypes.RESPONSE: {
      return { response: action.data };
    }
    default:
      return state;
  }
};
