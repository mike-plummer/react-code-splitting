import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './store/reducer';
import { App } from './app/app';
import sagas from './store/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
// sagaMiddleware.run(sagas);


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);