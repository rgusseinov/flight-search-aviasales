import { combineReducers } from "redux";
import { filterTypeReducer } from "./filterTypeReducer";
import { ticketsReducer } from "./ticketsReducer";

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filterTypes: filterTypeReducer
});

export type rootState = ReturnType<typeof rootReducer>