import * as actionTypes from './actionTypes';
import Fetch from '../request/fetch';
export default {
    //抢购
    [actionTypes.GET_CITY]: {//获取城市数据
        apiFn: Fetch.getCity
    },
    [actionTypes.GET_GOODS]: {//获取首页商品
        apiFn: Fetch.getGoods
    },

    //我的
    [actionTypes.USER_INFO]: {//获取用户信息
        apiFn: Fetch.userInfo
    }
};
