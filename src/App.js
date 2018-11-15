import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Router,Redirect,Route,IndexRoute,browserHistory} from 'react-router'
import { createStore,applyMiddleware,compose} from 'redux';
import { syncHistoryWithStore ,routerMiddleware} from 'react-router-redux';
import RootComponent from './compnents/common/RootComponent'
import BottomTab from './compnents/common/BottomTab'
import reducer from './store/reducers'
import './App.css';
import Home from './pages/Home'
import Near from './pages/Near'
import Circle  from './pages/Circle'
import Me from './pages/Me'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(routerMiddleware(browserHistory))))
const history = syncHistoryWithStore(browserHistory, store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
              <Route  path="/" component={RootComponent}>
                  <Route path="home" component={BottomTab}>
                      <Route path="home" component={Home}></Route>
                      <Route path="near" component={Near}></Route>
                      <Route path="circle" component={Circle}></Route>
                      <Route path="me" component={Me}></Route>
                  </Route>
              </Route>
              <Redirect from="*" to="/home/home" />
          </Router>
      </Provider>
    );
  }
}


export default App;
