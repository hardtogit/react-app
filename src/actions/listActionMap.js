import * as actionTypes from './actionTypes';
import Fetch from '../request/fetch';
export default {
    //抢购
    [actionTypes.GOODS_EVALUATE_LIST]: {
    apiFn:  Fetch.goodsEvaluateList
    },
    //附近
    [actionTypes.STORE_LIST]: {
        apiFn:  Fetch.storeList
    },
    //我的
    // [actionTypes.GOODS_LIST]: {
    //     apiFn:  Fetch.directInvestProjects
    // },
    [actionTypes.BILL_LIST]: {
        apiFn:  Fetch.billList
    },
    [actionTypes.AWARD_ACCEPT_LIST]: {
        apiFn:  Fetch.awardAcceptList
    },
    [actionTypes.AWARD_WAIT_LIST]: {
        apiFn:  Fetch.awardWaitList
    },
    [actionTypes.TEAM_LIST]: {
        apiFn:  Fetch.teamList
    },
    [actionTypes.CLIENT_LIST]: {
        apiFn:  Fetch.clientList
    }
};
