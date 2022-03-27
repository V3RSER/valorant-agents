import { characterType } from "../constants/characterActionType";
import { viewType } from "../constants/viewActionType";

import axios from "../services/config";

export const setCharacterList = () => async (dispatch) => {
  dispatch({ type: viewType.LOADING });

  try {
    await axios
      .get("/agents?language=es-ES&&isPlayableCharacter=true")
      .then(function (response) {
        dispatch({
          type: characterType.SET_LIST,
          payload: response.data.data,
        });
        dispatch({ type: viewType.LOADED });
      });
  } catch (error) {
    console.error(error);
  }
};
