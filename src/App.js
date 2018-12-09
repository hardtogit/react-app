import React, { Component } from 'react';
import {Provider} from 'react-redux';
import qs from 'qs';
import {Router,Redirect,Route,IndexRedirect,IndexRoute,hashHistory} from 'react-router';
import { createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore ,routerMiddleware} from 'react-router-redux';
import * as actionTypes from './actions/actionTypes';
import RootComponent from './compnents/common/RootComponent';
import BottomTab from './compnents/common/BottomTab';
import reducer from './store/reducers';
import rootSaga from './sagas/';
import './App.css';
import Home from './pages/Home';
import Near from './pages/Near';
import Circle  from './pages/Circle';
import Me from './pages/Me';

//抢购
import GoodsDetail from './pages/Home/GoodsDetail';
import Search from './pages/Home/Search';
import Address from './pages/Home/Address';
import Evaluate from './pages/Home/Evaluate';
//我的
import Withdraw from './pages/Me/Withdraw';
import Collaborate from './pages/Me/Collaborate';
import Order from './pages/Me/Order';
import Team from './pages/Me/Team';
import Introduce from './pages/Me/Introduce';
import Teach from './pages/Me/Teach';
import Inform from './pages/Me/Inform';
import Bill from './pages/Me/Bill';
import AwardAccept from './pages/Me/AwardAccept';
import AwardWait from './pages/Me/AwardWait';
import Client from './pages/Me/Client';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(sagaMiddleware,routerMiddleware(hashHistory))));
const history = syncHistoryWithStore(hashHistory, store);
sagaMiddleware.run(rootSaga);

// const queryParams = qs.parse(window.location.href.split('?')[1],{ ignoreQueryPrefix: true });
//获取授权配置
store.dispatch({
    type:actionTypes.JSSDK_CONFIG_INFO,
    params:[{url:window.location.href}]
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
              <Route  path="/" component={RootComponent}>
                  <IndexRedirect to="home" />
                  <Route path="home" component={BottomTab}>
                      <IndexRoute component={Home}/>
                      <Route path="near" component={Near} />
                      <Route path="circle" component={Circle} />
                      <Route path="me" component={Me} />
                  </Route>
                  {/*抢购*/}
                  <Route path="goodsDetail/:id" component={GoodsDetail} />
                  <Route path="search" component={Search} />
                  <Route path="address" component={Address} />
                  <Route path="evaluate/:id" component={Evaluate} />

                  {/*个人中心*/}
                  <Route path="withdraw" component={Withdraw} />
                  <Route path="collaborate" component={Collaborate} />
                  <Route path="order" component={Order} />
                  <Route path="team" component={Team} />
                  <Route path="introduce" component={Introduce} />
                  <Route path="teach" component={Teach} />
                  <Route path="inform" component={Inform} />
                  <Route path="bill" component={Bill} />
                  <Route path="awardAccept" component={AwardAccept} />
                  <Route path="awardWait" component={AwardWait} />
                  <Route path="client" component={Client} />

              </Route>
              <Redirect from="/*" to="/" />
          </Router>
      </Provider>
    );
  }
}


export default App;
