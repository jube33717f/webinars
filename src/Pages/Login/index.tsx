/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependence import ***/
import React,{ useState,useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
/*** functions/variables import ***/
import {loginRequest} from '../../Store/moduleUser/actions'
import { RootState } from '../../Store/rootReducer';
/*** styles import ***/
import style from './style.module.scss'
/*** images import ***/
import visible from '../../Asserts/visible.png'
import visibleFilled from '../../Asserts/visible-filled.png'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const LoginPage = ()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    let history = useHistory();
    const dispatch: Dispatch = useDispatch();
    const user = useSelector((state:RootState)=>state.userReducer)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] =useState<string>('')
   
    const [showPassword, setShowPassword ] = useState(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)
    
    useEffect(()=>{
        if(user.auth){
            
            history.replace('/')
        }
    },[user.auth])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    const loginHandler = ()=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(! re.test(email)) {
            setEmailError(true)
            return
        }
        dispatch(loginRequest(email,password))
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <><div className = {style.loginWrapper}>
            <div className = {style.leftPart}>
                <div>
                    <img src="https://image.zerologixtesting.com/form/3c4cb81207cec04c3464173421ff691f.png" alt="logo"/>
                </div>
                
            </div>
            <div className = {style.rightPart}>
                <div className={style.container}>
                    <h1>LOG IN</h1>
                    <div className={style.grid}>
                        <form onSubmit={loginHandler}>
                            <div className={emailError?`${style.formInput} ${style.inputError}`:`${style.formInput} ${style.inputNormal}`}>
                                <label>Email address *</label>
                                <div className={style.input}>
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value);setEmailError(false);}}></input>
                                </div>
                                {emailError&&<span>Please enter a valid email address</span>}
                            </div>
                            <div className={passwordError?`${style.formInput} ${style.inputError}`:`${style.formInput} ${style.inputNormal}`}>
                                <label>Password *</label>
                                <div className={style.input}>
                                    <input value={password} type={showPassword?'text':'password'} onChange={(e)=>{setPassword(e.target.value)}}></input>
                                    <button className={style.visible} onClick={()=>{setShowPassword(!showPassword)}} type='button'>
                                        {showPassword?<img src={visible}/>:<img src={visibleFilled}/>}
                                    </button>
                                </div>
                                {passwordError&&<span>Please enter a valid password</span>}
                            </div>
                            
                            <button type='submit'>LOG IN</button>
                            
                        </form>
                    </div>
                </div>
            </div>
       </div>
       </>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default LoginPage;