import React, { Component } from 'react';
import reducer from './store/reducers'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createStore,applyMiddleware,compose} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import './App.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ())
const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>ss</div>
      </Provider>
    );
  }
}


export default App;
