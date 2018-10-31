import {combineReducers} from 'redux'
import {routerReducer } from 'react-router-redux'
import infoData from './info.reducer'
import listData from './list.reducer'
export default combineReducers({
    routing:routerReducer,
    infoData,
    listData
})