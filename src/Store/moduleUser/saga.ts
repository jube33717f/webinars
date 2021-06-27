import { put, takeLatest, fork,  call } from 'redux-saga/effects';
import * as actionType from './types';
import * as actions from './actions';
import cookie from"react-cookies";
import { userLogin } from '../../Apis';


const setCookie=(id:string, token:string) => {
    let d = new Date();
    d.setTime(d.getTime() + (5*60*24*60*1000));//set cookie expire time: 5 day
    cookie.save("userId", id, {path:"/", expires: d});
    cookie.save("userToken", token, {path:"/", expires: d});
};

const login = async (email:string, password:string):Promise<actionType.UserState|actionType.UserStateFailed>=>{
    try{
        const req = await userLogin(email,password)
  
        if(req.status === 200){
            setCookie(req.data.user.id,req.data.token)
            const data = {
                email:email,
                userId:req.data.user.id,
                username:req.data.user.name,
                token:req.data.token,
                auth:true
            }
            return data
        }
    }catch(e){
        return {auth:false}
    }
    return {auth:false}
    
}

export function* login_user (action: actionType.Login_Request_Action):any{


    const req = yield call( login, action.payload.email, action.payload.password)
    if(req.auth){
        yield put(actions.loadUserSucceed(req.username,req.email,req.userId,req.token))
        return
    }
    yield put(actions.loadUserFailed())
    

}

export function* watchIncrementAsync(){
    yield takeLatest(actionType.LOGIN_REQUEST,login_user)
}

const user_sagas = [fork(watchIncrementAsync)]
export default user_sagas;