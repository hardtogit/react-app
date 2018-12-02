import Immutable,{Map} from 'immutable';
import * as actionTypes from '../../actions/actionTypes';
import actionMap from '../../actions/infoActionMap';


const defaultState=Immutable.fromJS({
    loading:false,
    data:{}
});
const initState=Object.keys(actionMap).reduce((total,currentValue)=>{return {...total,[currentValue]:defaultState}; },{});
export default (state =Map(initState), action)=> {
    switch (action.type){
        case actionTypes.FETCH_INFO_DATA_REQUEST:
             return state.setIn([action.key,'loading'],true);
        case actionTypes.FETCH_INFO_DATA_SUCCESS:
            return state.setIn([action.key,'data'],action.data).setIn([action.key,'loading'],false);
    }
    return state;
};
