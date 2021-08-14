import { SET_FILTER_ALL, SET_FILTER_BY } from "./actionTypes";

export const setFilterBy = (type: string) => ({
  type: SET_FILTER_BY,
  payload: type
});

export const setFilterAll = (type: boolean) => ({
  type: SET_FILTER_ALL,
  payload: type
});
