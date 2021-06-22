import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 3000, createdAt: 200 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000, createdAt: 300 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 400 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
