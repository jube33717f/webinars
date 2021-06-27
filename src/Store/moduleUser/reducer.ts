import * as actionType from './types'

const initialState: actionType.UserStateFailed = {
    auth: false
}
const userReducer = (
    state = initialState,
    action: actionType.ModuleUserTypes
):actionType.UserState|actionType.UserStateFailed => {

    switch(action.type){
        case actionType.LOGIN_SUCCEED:
            return{
                auth: true,
                email:action.payload.email,
                username: action.payload.username,
                userId: action.payload.userId,
                token: action.payload.token
            }
        case actionType.LOGIN_FAILED:
            return{
                auth:false
            }
        default:
            return state
    }
}
export default userReducer;