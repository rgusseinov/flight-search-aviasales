const initialState = {
    sortBy: {
        type: 'price',
        order: 'desc'
    },
    filterBy: {
        direct: false,
        oneStop: false,
        twoStop: false,
        threeStop: false
    }
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload
        };
    }

    if (action.type === 'SET_FILTER_BY'){

        const newState = { ...state['filterBy'] };
        const prevState = state['filterBy'];
        newState[action.payload] = !prevState[action.payload];
        

        return {
            ...state['filterBy'],
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



/*         const checked = e.target.checked;
        if (checked){
          setFilters({
            direct: true,
            oneStop: true,
            twoStop: true,
            threeStop: true
          });
        } else {
          setFilters({
            direct: false,
            oneStop: false,
            twoStop: false,
            threeStop: false
          });  
        } */


    }

/*     setFilters((prevState: IChecked) => {
        const newState = { ...prevState };
        newState[filterName] = !prevState[filterName];
        return newState;
      });
 */


    return state;
};

export default filters;
