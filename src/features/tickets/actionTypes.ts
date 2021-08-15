export const LOAD_TICKETS_START = 'LOAD_TICKETS_START';
export const LOAD_TICKETS_SUCCESS = 'LOAD_TICKETS_SUCCESS';

interface loadTickets {
  type: typeof LOAD_TICKETS_START
}

interface loadTicketsSuccess {
  type: typeof LOAD_TICKETS_SUCCESS
  payload: any
}

export type TicketsDispatchTypes = loadTickets | loadTicketsSuccess;