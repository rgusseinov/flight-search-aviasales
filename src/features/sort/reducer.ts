import { ISortType } from "../../interfaces/sort";
import { SET_SORT_BY } from "./actionTypes";

const initialState = {
  sortType: null,
};

const sort = (state:ISortType = initialState, action: any) => {
  if (action.type === SET_SORT_BY){
      return {
          ...state,
          sortType: action.payload
      };
  }
  return state;
};

export default sort;
