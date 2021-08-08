import { FILTER_TICKETS_BY_STOPS, FILTER_TYPES, SET_TICKETS } from "./types";

export function fetchTickets(tickets){
  return {
    type: SET_TICKETS,
    payload: tickets
  };
}

export function filterTickets(tickets){
  return {
    type: FILTER_TICKETS_BY_STOPS,
    payload: tickets
  };
}

export function filterTypes(filterTypes){
  return {
    type: FILTER_TYPES,
    payload: filterTypes
  };
}
