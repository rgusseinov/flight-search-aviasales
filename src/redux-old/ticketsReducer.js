import { FETCH_TICKETS, FILTER_TICKETS_BY_STOPS } from "./types";

const initialState = {
  tickets: []
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_TICKETS:
      return { ...state, tickets: action.payload };
    case FILTER_TICKETS_BY_STOPS:
      return { ...state, tickets: action.payload };
    default: return state;
  }
};

/* export const filterByStops = (tickets:ITicket[], stops: number) => {
  return tickets.filter(ticket => {
    const [first, second] = ticket.segments;
    return first.stops.length === stops && second.stops.length === stops;
  });
}; */