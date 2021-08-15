import { LOAD_TICKETS_START, LOAD_TICKETS_SUCCESS, TicketsDispatchTypes } from "./actionTypes";

interface IDefaultState {
  items: [],
  isLoaded: boolean
}

const initialState: IDefaultState = {
  items: [],
  isLoaded: false
};

const tickets = (state: IDefaultState = initialState, action: TicketsDispatchTypes): IDefaultState => {

  switch (action.type){
      case LOAD_TICKETS_START:
      return {
          ...state,
          isLoaded: false
      };
      case LOAD_TICKETS_SUCCESS:
        return {
          ...state,
          items: action.payload,
          isLoaded: true
        };      
      default: return state;
  }
};

export default tickets;
