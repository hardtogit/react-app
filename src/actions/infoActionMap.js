import * as actionTypes from './actionTypes'
import Fetch from '../request/fetch'
export default {
    [actionTypes.USER_INFO]: {//获取刮刮卡详情
        apiFn: Fetch.userInfo
    }
}
