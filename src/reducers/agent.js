import { agentType } from "../types/agentActionType";

const INITIAL_STATE = {
  agentList: [],
  agent: { abilities: [] },
  ability: "Ability1",
  favorites: JSON.parse(localStorage.getItem("favorites")),
};

export default function reducerAgent(state = INITIAL_STATE, action) {
  switch (action.type) {
    case agentType.SET_LIST: {
      return { ...state, agentList: action.payload };
    }
    case agentType.SET: {
      return { ...state, agent: action.payload };
    }

    case agentType.SET_ABILITY: {
      return { ...state, ability: action.ability };
    }

    case agentType.CHANGE_FAVORITE: {
      let favoritesChange = state.agent?.favorites ? state.agent.favorites : [];
      console.log(favoritesChange);
      let favorite = favoritesChange.find((f) => f === action.id);

      if (favorite) {
        favoritesChange = favoritesChange.filter((f) => f !== action.id);
      } else {
        favoritesChange.push(action.id);
      }

      localStorage.setItem("favorites", JSON.stringify(favoritesChange));
      return { ...state, favorites: favoritesChange };
    }
    default:
      return state;
  }
}
