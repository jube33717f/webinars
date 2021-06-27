import * as actionType from './types';

export const loginRequest = (email:string, password: string):actionType.Login_Request_Action =>({
    type: actionType.LOGIN_REQUEST,
    payload:{
        email,
        password
    }
})

export const loadUserSucceed = (email:string, username:string ,userId:string, token:string):actionType.Login_Success_Action =>({
    type: actionType.LOGIN_SUCCEED,
    payload:{
        username,
        email,
        userId,
        token
    }
})

export const loadUserFailed = ():actionType.Login_Failed_Action =>({
    type: actionType.LOGIN_FAILED
})