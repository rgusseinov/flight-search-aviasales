const initialState = {
  sortBy: null,
  filterBy: {
      direct: false,
      oneStop: false,
      twoStop: false,
      threeStop: false
  }
};

const filters = (state = initialState, action) => {
  // TOP sort
  if (action.type === 'SET_SORT_BY'){
      return {
          ...state,
          sortBy: action.payload
      };
  }

  // Left sidebar
  if (action.type === 'SET_FILTER_BY'){
      
      const newState = {...state['filterBy']};
      const prevState = state['filterBy'];
      newState[action.payload] = !prevState[action.payload];
      
      return {
          filterBy: newState
      };
  }

  if (action.type === 'SET_FILTER_ALL'){
      if (action.payload){
          return {
              filterBy: {
                  direct: true,
                  oneStop: true,
                  twoStop: true,
                  threeStop: true
              }
          };
      } else {
          return {
              filterBy: {
                  direct: false,
                  oneStop: false,
                  twoStop: false,
                  threeStop: false
              }
          };
      }
  }
  return state;
};

export default filters;
