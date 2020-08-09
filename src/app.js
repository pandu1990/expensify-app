import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill', amount: 87 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 20 }));
store.dispatch(setTextFilter('water'));
const { expenses, filters } = store.getState();
console.log(getVisibleExpenses(expenses, filters));

ReactDOM.render((
  <Provider store={store}>
    <AppRouter/>
  </Provider>
),
document.getElementById('app')
);
