import {take, put, call, fork, select} from 'redux-saga/effects'
import actionMap from '../actions/listActionMap'
import * as actionTypes from '../actions/actionTypes'
import {push,replace} from 'react-router-redux'
function* fetchListData({type: key, params,OtherKey}) {
  if (params && !Array.isArray(params)) {
    throw new TypeError(`params must be Array, now it's ${typeof params}`)
  }
  let keyWithId = key;
  if (OtherKey){
      keyWithId = OtherKey;
  }
  yield put({
    type: actionTypes.FETCH_LIST_DATA_REQUEST,
    key: keyWithId,
  })
  const pageNum = yield select(state => state.listdata.getIn([keyWithId, 'curPage'], 0) + 1)
  const args = params ? params : []
  const {response, error} = yield call(actionMap[key].apiFn, pageNum, ...args)
  if (response.code == 100) {
    yield put({
      type: actionTypes.FETCH_LIST_DATA_SUCCESS,
      key: keyWithId,
      data: response.data,
    })
  }
  else {
    yield put({
      type: actionTypes.FETCH_LIST_DATA_FAIL,
      key: keyWithId,
      error,
      response,
    })
  }
}

/**
  遍历actionMap，为每一个action生成saga（监听actionType，然后执行相似逻辑）
*/
export default Object.keys(actionMap).map(key => {
  return function* () {
    while (true) {
      const action = yield take(key)
      yield* fetchListData(action)
    }
  }
})
