import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { startSetExpenses } from './actions/expenses';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const app = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, app);

store.dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(jsx, app);
  });
