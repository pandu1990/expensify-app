import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const app = document.getElementById('app');
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, app);
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, app);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses())
      .then(() => {
        renderApp();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
