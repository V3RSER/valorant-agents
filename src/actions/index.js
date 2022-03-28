import { characterType } from "../types/characterActionType";
import { viewType } from "../types/viewActionType";

import { default as characterServices } from "../services/characterStreaming/index";

export const setCharacterList = () => async (dispatch) => {
  dispatch({ type: viewType.LOADING });

  try {
    await characterServices.getCharacterList()
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

export const setCharacter = (id) => async (dispatch) => {
  dispatch({ type: viewType.LOADING });
  try {
    await characterServices.getCharacter(id)
    .then(function (response) {
      dispatch({
        type: characterType.SET,
        payload: response.data.data,
      });
      dispatch({ type: viewType.LOADED });
    });
  } catch (error) {
    console.error(error);
  }
};

export const setAbility = (ability) => async (dispatch) => {
  dispatch({
    type: characterType.SET_ABILITY,
    ability: ability,
  });
};
