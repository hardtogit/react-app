import * as actionTypes from './actionTypes';
import Fetch from '../request/fetch';
export default {

    [actionTypes.GOODS_LIST]: {
        apiFn:  Fetch.directInvestProjects
    }
};
