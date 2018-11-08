import animateType   from '../../compnents/common/RootComponent/animateType'
const initialState={
    animateType:animateType.FADE
};
export default (state = initialState, action)=> {
    switch (action.type){
        case 'CHANGE_ANIMATE_TYPE':
            return {...state,animateType:action.payload};
        default:
            break
    }
    return state
};
