import { Dispatch } from 'redux';
import { getTickets } from "../../api/api";
import { LOAD_TICKETS_START, LOAD_TICKETS_SUCCESS, TicketsDispatchTypes } from "./actionTypes";

export const loadTickets = () => async (dispatch: Dispatch<TicketsDispatchTypes>) => {
  dispatch({
    type: LOAD_TICKETS_START
  });

  const items = await getTickets();
  dispatch({
    type: LOAD_TICKETS_SUCCESS,
    payload: items
  });
  
};
