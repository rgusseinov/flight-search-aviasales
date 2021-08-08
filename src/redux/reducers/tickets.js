const initialState = {
    items: [],
    isLoaded: false
};

const tickets = (state = initialState, action) => {

    switch (action.type){
        case 'SET_TICKETS':
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        };
        
        default: return state;
    }
};

export default tickets;
