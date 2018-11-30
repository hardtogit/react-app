import Immutable,{Map} from 'immutable';
import * as actionTypes from '../../actions/actionTypes';

const initialState=Immutable.fromJS({
    loading:true,
    data:{}
});
export default (state =Map(), action)=> {
    switch (action.type){
        case actionTypes.FETCH_INFO_DATA_REQUEST:
            if(state.has(action.key)){
                return state.setIn([action.key,'loading'],true);
            }
            return state.set(action.key,initialState);
        case actionTypes.FETCH_INFO_DATA_SUCCESS:
            return state.setIn([action.key,'data'],action.data).setIn([action.key,'loading'],false);
    }
    return state;
};
