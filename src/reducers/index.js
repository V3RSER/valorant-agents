import { combineReducers } from "redux";

import { default as character } from "./character";
import { default as view } from "./view";

export default combineReducers({
  character,
  view,
});
