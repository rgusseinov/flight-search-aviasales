import { combineReducers } from 'redux';
import filters from './filters';
import tickets from './tickets';

const rootReducer = combineReducers({
    filters: filters,
    tickets: tickets,
});

export default rootReducer;
