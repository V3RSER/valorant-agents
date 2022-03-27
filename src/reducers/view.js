import { view as ViewTypes } from "../constants/viewActionTypes";

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ViewTypes.LOADING: {
      return { loading: true };
    }
    case ViewTypes.LOADED: {
      return { loading: false };
    }
    default:
      return state;
  }
};
