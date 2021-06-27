import * as actionType from './types';
const initialState: actionType.WebinarsStateFailed = {
    webinarsList:[]
}

const webinarsReducer = (
    state = initialState,
    action: actionType.ModuleWebinarsTypes
):actionType.WebinarsState|actionType.WebinarsStateFailed=> {
    switch(action.type){        
        case actionType.GET_WEBINARS_LIST_SUCCEED:
            return {
                webinarsList:action.payload
            }
        default:
            return state
    }
}
export default webinarsReducer;