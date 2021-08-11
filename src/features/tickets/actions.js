import { getTickets } from "../../api/api";
import { LOAD_TICKETS_START, LOAD_TICKETS_SUCCESS } from "./actionTypes";

export const loadTickets = () => async dispatch => {
  dispatch({
    type: LOAD_TICKETS_START
  });

  const items = await getTickets();
  dispatch({
    type: LOAD_TICKETS_SUCCESS,
    payload: items
  });
  
};
