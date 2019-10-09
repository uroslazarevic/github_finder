import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './App.css';

import reducers from './reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { AppRouter } from 'components';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <AppRouter />
  </Provider>,
  document.querySelector('#root')
);
