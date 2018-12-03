import * as actionTypes from './actionTypes';
import Fetch from '../request/fetch';
export default {
    [actionTypes.GOODS_LIST]: {
        apiFn:  Fetch.directInvestProjects
    },
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
