import { LOAD_TICKETS_START, LOAD_TICKETS_SUCCESS } from "./actionTypes";

const initialState = {
  items: [],
  isLoaded: false
};

const tickets = (state = initialState, action) => {

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
