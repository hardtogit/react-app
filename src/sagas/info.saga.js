import {put, call} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import wx from 'weixin-js-sdk';
import actionMap from '../actions/infoActionMap';
import * as actionTypes from '../actions/actionTypes';
function* takeRequest (action) {
    yield put({
        type: actionTypes.FETCH_INFO_DATA_REQUEST,
        key: action.type
    });
    if (action.params && !Array.isArray(action.params)) {
        throw new TypeError(`params must be Array, now it's ${typeof action.params}`);
    }
    const args = action.params ? action.params : [];
    const {response, error} = yield call(actionMap[action.type].apiFn, ...args);
    if (response) {
        if(action.id){//当组件会发送多次相同的请求是，根据id避免陷入循环
            response.id = action.id;
        }
        if(action.type===actionTypes.JSSDK_CONFIG_INFO&&response.code===0){
            wx.config({
                ...response.data
            });
            wx.ready(function(){
               console.log('授权成功');
                wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        put({  // eslint-disable-line
                            type:actionTypes.SAVE_LOCATION,
                            payload:{latitude:res.latitude,longitude:res.longitude}
                        });
                    }
                });
            });
            wx.error(function(res){
                 console.log(res);
            });
        }
        if(response.code===1){
            window.location.href=response.data.url;
        }else{
            yield put({
                type: actionTypes.FETCH_INFO_DATA_SUCCESS,
                data: response,
                key: action.type
            });
        }

    }else {
        yield put({
            type: actionTypes.FETCH_INFO_DATA_FAIL,
            error,
            key: action.type
        });
    }
}
export function* watchInfoActions() {
    yield* takeEvery(Object.keys(actionMap), takeRequest);
}
