import { fork } from 'redux-saga/effects'
import listSagas from './list.saga'
import * as infoSagas from './info.saga'

/**
  将导入的sagas（Array || Object）合并为fork effect Array
*/
const combineSagas = (...groups) => {
  let arr = []
  groups.forEach(group => {
    if (typeof group !== 'object') {
      throw new TypeError('sagas to be combined must be Object or Array')
    }
    if (Array.isArray(group)) {
      arr = arr.concat(group.map(g => fork(g)))
    }else {
      Object.keys(group).forEach(saga => arr.push(fork(group[saga])))
    }
  })
  return arr
}

/**
  默认在App启动时启动所有action监听
*/
export default function* root() {
  yield combineSagas(
    listSagas,
    infoSagas,
  )
}
