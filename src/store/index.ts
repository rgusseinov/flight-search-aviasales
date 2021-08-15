
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import filters from '../features/filters/reducer';
import sort from '../features/sort/reducer';
import tickets from '../features/tickets/reducer';

const rootReducer = combineReducers({
  filters: filters,
  sort: sort,
  tickets: tickets,
});


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const useTypedSelector: TypedUseSelectorHook<ReturnType <typeof rootReducer>> = useSelector;

export default store;
