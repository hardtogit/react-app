import {put, call} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import actionMap from '../actions/infoActionMap'
import * as actionTypes from '../actions/actionTypes'
import {GET_EDUCATION_INFO} from "../actions/actionTypes";
function* takeRequest (action) {
    yield put({
        type: actionTypes.FETCH_INFO_DATA_REQUEST,
        key: action.type
    });
    if (action.params && !Array.isArray(action.params)) {
        throw new TypeError(`params must be Array, now it's ${typeof action.params}`)
    }
    const args = action.params ? action.params : [];
    const {response, error} = yield call(actionMap[action.type].apiFn, ...args);
    console.log(response)
    if (response) {
        console.log(response)
        if(action.id){//当组件会发送多次相同的请求是，根据id避免陷入循环
            response.id = action.id;
        }
        yield put({
            type: actionTypes.FETCH_INFO_DATA_SUCCESS,
            data: response,
            key:　action.type
        })
    }else {
        yield put({
            type: actionTypes.FETCH_INFO_DATA_FAIL,
            error,
            key:　action.type
        })
    }
}
export function* watchInfoActions() {
    yield* takeEvery(Object.keys(actionMap), takeRequest)
}
