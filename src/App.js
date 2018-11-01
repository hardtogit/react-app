import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Router,Redirect,Route,IndexRoute,browserHistory} from 'react-router'
import { createStore,applyMiddleware,compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import RootComponent from './compnents/common/RootComponent'
import reducer from './store/reducers'
import './App.css';

import Home from './pages/Home'
import Find from './pages/Find'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
              <Route  path="/" component={RootComponent}>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/find" component={Find}></Route>
              </Route>
          </Router>
      </Provider>
    );
  }
}


export default App;
