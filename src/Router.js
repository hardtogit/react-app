import React,{Component} from 'react'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router,Redirect,Route,IndexRoute,hashHistory} from 'react-router'
const history = syncHistoryWithStore(hashHistory, store);
