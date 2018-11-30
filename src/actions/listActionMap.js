import * as actionTypes from './actionTypes'
import Fetch from '../request/fetch'
export default {

    [actionTypes.GOOD_LIST]: {
        apiFn:  Fetch.directInvestProjects
    }
}
