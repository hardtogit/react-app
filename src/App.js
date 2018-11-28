import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Router,Redirect,Route,IndexRoute,browserHistory} from 'react-router'
import { createStore,applyMiddleware,compose} from 'redux'
import { syncHistoryWithStore ,routerMiddleware} from 'react-router-redux'
import wx from 'weixin-js-sdk'
import RootComponent from './compnents/common/RootComponent'
import BottomTab from './compnents/common/BottomTab'
import reducer from './store/reducers'
import './App.css';
import Home from './pages/Home'
import Near from './pages/Near'
import Circle  from './pages/Circle'
import Me from './pages/Me'

//抢购
import GoodsDetail from './pages/Home/GoodsDetail'
import Search from './pages/Home/Search'

//我的
import Withdraw from './pages/Me/Withdraw'
import Collaborate from './pages/Me/Collaborate'
import Order from './pages/Me/Order'
import Team from './pages/Me/Team'
import Introduce from './pages/Me/Introduce'
import Teach from './pages/Me/Teach'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(routerMiddleware(browserHistory))))
const history = syncHistoryWithStore(browserHistory, store);
console.log(wx)
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
                  <Route path="goodsDetail" component={GoodsDetail}></Route>
                  <Route path="search" component={Search}></Route>

                  {/*个人中心*/}
                  <Route path="withdraw" component={Withdraw}></Route>
                  <Route path="collaborate" component={Collaborate}></Route>
                  <Route path="order" component={Order}></Route>
                  <Route path="team" component={Team}></Route>
                  <Route path="introduce" component={Introduce}></Route>
                  <Route path="teach" component={Teach}></Route>
              </Route>
              <Redirect from="*" to="/home/home" />
          </Router>
      </Provider>
    );
  }
}


export default App;
