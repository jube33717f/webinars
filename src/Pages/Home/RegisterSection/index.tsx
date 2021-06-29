/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
import React,{useState,memo} from 'react';
import { useSelector } from 'react-redux';
import cookie from"react-cookies";
import { useHistory } from "react-router-dom";
/*** functions/variables import ***/
import { RootState } from '../../../Store/rootReducer';
import { favouriteAPost } from '../../../Apis'
/*** interfaces import */
import { webinarsList } from '../../../Store/moduleWebinars/types';
/*** styles import ***/
import style from './style.module.scss'
/*** components import ***/
import DropdownButton from '../../../Components/Navigation/DropdownButton';
import DropDown  from '../../../Components/Dropdown'
import Alert from '../../../Components/Alert'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
interface propsInterface {
    showDropdown:boolean
    openDropdown:(e:React.MouseEvent)=>any
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const RegisterSection = (props:propsInterface)=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const history = useHistory()
    const webinars : webinarsList[]= useSelector((state:RootState)=>state.webinarsReducer.webinarsList)

    const [ topic, setTopic ] =useState<string>('')
    const [ firstName , setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ topicId, setTopicId ] = useState<number>()

    const [topicError, setTopicError]  = useState<boolean>(false)
    const [firstNameError, setFirstNameError] = useState<boolean>(false)
    const [lastNameError, setLastNameError]= useState<boolean>(false)
    const [emailError, setEmailError ] = useState<boolean>(false)

    const [success, setSuccess] = useState<boolean>(true)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /*** handle alter close ***/
    const closeHandler = ()=>{
        setShowAlert(false)
    }

    /*** check inputs form error (before submit) ***/
    const hasErrors = ()=>{
        if(firstNameError|| lastNameError ||emailError) return true
        if(email===''||firstName===''||lastName===''||topic==='') return true
        return false
    }
    
    /*** update selected title: store the post id for register request ***/
    const selectorHandler = (title:string|null, id:number) =>{       
        if(title) {
            setTopic(title)
            setTopicError(false)
            setTopicId(id) 
        }  
    }
    /*** onsubmit handler: register a post ***/
    const registerHandler = async () =>{
        
        if (cookie.load('userId')) {
            if(topicId){
                try{
                    const res = await favouriteAPost(topicId)
                    if(res.status === 200){
                        setTopic('')
                        setEmail('')
                        setFirstName('')
                        setLastName('')
                        setSuccess(true)
                        setShowAlert(true)
                    }
                }catch(e){
                    setSuccess(false)
                    setShowAlert(true)
                }
            }
        }else{
            history.push('/login')
        }
        
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <><section>
        <div className = {style.registerWrapper}>
            <div className={style.header}>
                <h2>Register for a Webinar now</h2>
                <p>Please fill in the form below and you will be contacted by one of our professional business experts.</p>
            </div>
            <form className={style.registerForm} onSubmit={registerHandler}>
                <div>
                    <label>Topic{topicError&&<span>*required</span>}</label>
                    <input value={topic} readOnly></input>
                    <button 
                        className={style.registerFormButton} 
                        type='button'
                        onClick={(e)=>{
                            props.openDropdown(e)
                        }}
                    >
                        <DropdownButton/>
                    </button>
                    <div className={style.dropdownWrapper}>
                    {props.showDropdown&&<DropDown list={webinars} clickHandler={selectorHandler}/>}
                    </div>
                </div>
                <div>
                    <label>First Name {firstNameError&&<span>*required</span>}</label>
                    <input value={firstName} onChange={(e)=>{
                        setFirstName(e.target.value)
                        if(firstName!=='') setFirstNameError(false)
                        if(topic===''){
                            setTopicError(true)
                        }
                    }}></input>
                </div>
                <div>
                    <label>Last Name {lastNameError&&<span>*required</span>}</label>
                    <input value={lastName} onChange={(e)=>{
                        setLastName(e.target.value)
                        if(topic===''){
                            setTopicError(true)
                        }
                        if(firstName === ''){
                            setFirstNameError(true)
                        }
                        if(lastName !== '') setLastNameError(false)

                    }}></input>
                </div>
                <div>
                    <label>Email {emailError&&<span>*required</span>}</label>
                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                        if(topic===''){
                            setTopicError(true)
                        }
                        if(firstName === ''){
                            setFirstNameError(true)
                        }
                        if(lastName === ''){
                            setLastNameError(true)
                        }
                        if(email!=='') setEmailError(false)
                        
                        
                    }}></input>
                </div>
                <div>
                    <label>Phone</label>
                    <div className={style.phoneInput}>
                    <input placeholder={`   + 61`} readOnly></input><input readOnly></input>
                    </div>
                </div>
                <div>
                    <label>Mobile Authentication</label>
                    <div className={style.phoneInput}>
                    <button>Get Code</button><input readOnly></input>
                    </div>
                </div>
                
                <button 
                className={style.submitButton} 
                type='submit'
                disabled={hasErrors()}
                >
                    Register
                </button>
                
            </form>
        </div>
    </section>
    {showAlert&&<Alert success={success} onClose={closeHandler}/>}

    </>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default memo(RegisterSection);