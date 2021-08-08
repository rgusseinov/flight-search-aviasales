import { FILTER_TYPES } from "./types";

const initialState = {
    direct: false,
    oneStop: false,
    twoStop: false,
    threeStop: false
};

export const filterTypeReducer = (state = initialState, action) => {
  switch (action.type){
    case FILTER_TYPES:
      return { ...state, filterTypes: action.payload};
    default: return state;
  }
};

