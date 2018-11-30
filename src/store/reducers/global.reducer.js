import animateType   from '../../compnents/common/RootComponent/animateType';
const initialState={
    animateType:animateType.SLIDE,
    token:undefined
};
export default (state = initialState, action)=> {
    switch (action.type){
        case 'CHANGE_ANIMATE_TYPE':
            return {...state,animateType:action.payload};
        case 'SAVE_TOKEN':
            return {...state,token:action.payload};
        default:
            break;
    }
    return state;
};
