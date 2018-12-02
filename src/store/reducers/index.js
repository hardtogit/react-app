import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';
import infoData from './info.reducer';
import listData from './list.reducer';
import global from './global.reducer';
export default combineReducers({
    routing:routerReducer,
    global,
    infoData,
    listData
});