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
    [actionTypes.GOODS_INFO]: {//获取首页商品
        apiFn: Fetch.goodsInfo
    },
    [actionTypes.GOODS_DETAIL_INFO]: {//获取商品详情
        apiFn: Fetch.goodsDetailInfo
    },
    [actionTypes.CITY_NAME_INFO]: {//获取城市名称
        apiFn: Fetch.cityNameInfo
    },
    //我的
    [actionTypes.USER_INFO]: {//获取用户信息
        apiFn: Fetch.userInfo
    },
    [actionTypes.STORE_INVITE_INFO]: {//推荐店铺
        apiFn: Fetch.storeInviteInfo
    },
    [actionTypes.JSSDK_CONFIG_INFO]: {//推荐店铺
        apiFn: Fetch.jsSdkConfigInfo
    },


};
