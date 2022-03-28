import { agentType } from "../types/agentActionType";

const INITIAL_STATE = {
  agentList: [],
  agent: { abilities: [] },
  ability: "Ability1"
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
    default:
      return state;
  }
}
