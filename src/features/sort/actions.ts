import { SET_SORT_BY } from "./actionTypes";

export const setSortType = (type: string) => ({
  type: SET_SORT_BY,
  payload: type
});
