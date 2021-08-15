import { SET_FILTER_ALL, SET_FILTER_BY } from "./actionTypes";

const initialState = {
  direct: true,
  oneStop: false,
  twoStop: false,
  threeStop: false
};

const filters = (state:any = initialState, action: any) => {

  if (action.type === SET_FILTER_BY){
      
      const newState = {...state};
      const prevState = state;
      newState[action.payload] = !prevState[action.payload];
      
      return {
          ...newState
      };
  }

  if (action.type === SET_FILTER_ALL){
      if (action.payload){
          return {
            direct: true,
            oneStop: true,
            twoStop: true,
            threeStop: true
          };
      } else {
          return {
            direct: false,
            oneStop: false,
            twoStop: false,
            threeStop: false
          };
      }
  }
  return state;
};

export default filters;
