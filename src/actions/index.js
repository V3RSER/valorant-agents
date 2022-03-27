import { character as CharacterTypes } from "../constants/characterActionTypes";
import { view as ViewTypes } from "../constants/viewActionTypes";

import axios from "../services/config";

export const getCharacters = () => async (dispatch) => {
  dispatch({ type: ViewTypes.LOADING });

  try {
    await axios.get("/agents?language=es-ES&&isPlayableCharacter=true").then(function (response) {
      dispatch({ type: CharacterTypes.RESPONSE, data: response.data.data });
      dispatch({ type: ViewTypes.LOADED });
    });
  } catch (error) {
    console.error(error);
  }
};
