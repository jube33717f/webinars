/* <------------------------------------ **** ACTION TYPES START **** ------------------------------------ */

const GET_WEBINARS_LIST_SUCCEED = 'GET_WEBINARS_LIST_SUCCEED'
const GET_WEBINARS_LIST_FAILED = 'GET_WEBINARS_LIST_FAILED'

export { GET_WEBINARS_LIST_SUCCEED, GET_WEBINARS_LIST_FAILED }
/* <------------------------------------ **** ACTION TYPES END **** ------------------------------------ */



/* <------------------------------------ **** ACTION INTERFACE START **** ------------------------------------ */



export interface Get_Webinars_Success_Action{
    type: typeof GET_WEBINARS_LIST_SUCCEED,
    payload: webinarsList[]
}
export interface Get_Webinars_Failed_Action{
    type: typeof GET_WEBINARS_LIST_FAILED
}
export type ModuleWebinarsTypes = Get_Webinars_Success_Action|Get_Webinars_Failed_Action
/* <------------------------------------ **** ACTION INTERFACE END**** ------------------------------------ */



/* <------------------------------------ **** STATE INTERFACE START **** ------------------------------------ */
export interface webinarsList{
    id:number,
    created_at:string,
    author:string,
    avatar:string,
    title:string,
    content:string,
    favourited:boolean
}

export interface WebinarsState {
    webinarsList:webinarsList[]
}
export interface WebinarsStateFailed {
    webinarsList: webinarsList[]
}
/* <------------------------------------ **** STATE INTERFACE END **** ------------------------------------ */