import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Router,Redirect,Route,IndexRoute,hashHistory} from 'react-router'
import { createStore,applyMiddleware,compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import RootComponent from './compnents/common/RootComponent'
import reducer from './store/reducers'
import './App.css';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(hashHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
              <Route  path="/" component={RootComponent}>
                
              </Route>
          </Router>
      </Provider>
    );
  }
}


export default App;
