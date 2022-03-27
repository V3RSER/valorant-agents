import { combineReducers } from "redux";

import { default as character } from "./character";
import { default as view } from "./view";

const rootReducer = combineReducers({
  character,
  view,
});

export default rootReducer;
