
/* <------------------------------------ **** ACTION TYPES START **** ------------------------------------ */
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
const LOGIN_FAILED = 'LOGIN_FAILED'

export { LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAILED }
/* <------------------------------------ **** ACTION TYPES END **** ------------------------------------ */

/* <------------------------------------ **** ACTION INTERFACE START **** ------------------------------------ */
const Login_Request_Initial = {
    email:'',
    password:''
}
const User_Info_Initial = {
    email:'',
    userId:'',
    username:'',
    token:'',
}

export interface Login_Request_Action{
    type: typeof LOGIN_REQUEST;
    payload: typeof Login_Request_Initial;
}
export interface Login_Success_Action{
    type: typeof LOGIN_SUCCEED,
    payload: typeof User_Info_Initial
}
export interface Login_Failed_Action{
    type: typeof LOGIN_FAILED
}
export type ModuleUserTypes = Login_Request_Action|Login_Success_Action|Login_Failed_Action
/* <------------------------------------ **** ACTION INTERFACE END**** ------------------------------------ */

/* <------------------------------------ **** STATE INTERFACE START **** ------------------------------------ */
export interface UserState {
    auth: boolean,
    email:string
    username: string,
    userId: string,
    token: string
}
export interface UserStateFailed {
    auth: boolean
}
/* <------------------------------------ **** STATE INTERFACE END **** ------------------------------------ */