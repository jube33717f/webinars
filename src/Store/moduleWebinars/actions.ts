import * as actionType from './types';





export const getWebinarsSucceed = (list:actionType.webinarsList[]):actionType.Get_Webinars_Success_Action =>({
    type: actionType.GET_WEBINARS_LIST_SUCCEED,
    payload:list
})

export const getWebinarsFailed = ():actionType.Get_Webinars_Failed_Action =>({
    type: actionType.GET_WEBINARS_LIST_FAILED
})