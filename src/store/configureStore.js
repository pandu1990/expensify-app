import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters';

export default () => createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducers
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
