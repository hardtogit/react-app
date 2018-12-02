import Immutable,{Map} from 'immutable';
import * as actionTypes from '../../actions/actionTypes';
import actionMap from '../../actions/listActionMap';


const defaultState = Immutable.Map();
const defaultDataSchema = Immutable.fromJS({
    data: [],
    pending: false,
    limit:5,
    page: 0,
    pageEnd: false
});

const initState=Object.keys(actionMap).reduce((total,currentValue)=>{return {...total,[currentValue]:defaultDataSchema}; },{});
export default (state = Map(initState), action) => {
    switch (action.type) {

        // 发起请求时检查state内key是否初始化
        case actionTypes.FETCH_LIST_DATA_REQUEST:
            if (state.has(action.key)) {
                return state.setIn([action.key, 'pending'], true);
            }else {
                return state.withMutations(i => {
                    i
                        .set(action.key, defaultDataSchema)
                        .setIn([action.key, 'pending'], true);
                });
            }
            break;
        case actionTypes.FETCH_LIST_DATA_SUCCESS:
            if (action.data.length) {
                let Iddata={};
                if(action.key=='FETCH_ANNOUNCEMENT_S'){
                    const IdAgo=state.getIn(['FETCH_ANNOUNCEMENT_S','idData']);
                    if(IdAgo){
                        Object.keys(IdAgo).map((item)=>{
                            Iddata[item]=IdAgo[item];
                        });
                    }
                    action.data.map((item)=>{
                        const Id=item.id;
                        Iddata[Id]=item;
                    });
                    return state.withMutations(i => {
                        i
                            .setIn([action.key, 'pending'], false)
                            .updateIn([action.key, 'data'], list => list.concat(action.data))
                            .setIn([action.key, 'idData'],Iddata)
                            .updateIn([action.key, 'page'], num => num + 1);
                    });
                }
                return state.withMutations(i => {
                    i
                        .setIn([action.key, 'pending'], false)
                        .updateIn([action.key, 'data'], list => list.concat(action.data))
                        .updateIn([action.key, 'page'], num => num + 1);
                });
            }else {
                return state.withMutations(i => {
                    i
                        .setIn([action.key, 'pending'], false)
                        .setIn([action.key, 'pageEnd'], true);
                });
            }
            break;

        case actionTypes.FETCH_LIST_DATA_FAIL:
            return state.setIn([action.key, 'error'], action.error);
            break;
        case actionTypes.CLEAR_LIST_DATA:
            return state.set(action.key,defaultDataSchema);
        default:
            return state;
    }
};