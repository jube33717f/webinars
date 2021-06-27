/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependence import ***/
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import cookie from"react-cookies";
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
/*** components import ***/
import  DropdownButton  from './DropdownButton'
import Alert from '../../Components/Alert'
/*** styles import ***/
import style from './style.module.scss'
/*** functions/variables import ***/
import { userLogout } from '../../Apis/index'
import { loadUserFailed } from '../../Store/moduleUser/actions'
import { RootState } from '../../Store/rootReducer';
/*** images import ***/
import logo from '../../Asserts/logo.png'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Navigation = ()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const dispatch: Dispatch = useDispatch();
    const user = useSelector((state:RootState)=>state.userReducer)

    const [refresh, setRefresh] = useState(!user.auth)
    const [showNav , setShowNav ] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(true)
    const [showAlert, setShowAlert] = useState<boolean>(false)

    useEffect(()=>{
            setRefresh(!user.auth)
    },[user.auth])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /*** log out handle***/
    const logoutHandler = async ()=>{
        try{
            const req = await userLogout();
            if(req.status === 200){
                sessionStorage.clear()
                cookie.remove('userToken', { path: '/' })
                cookie.remove('userId', { path: '/' })
                dispatch(loadUserFailed())
                setRefresh(true)
                setSuccess(true)
                setShowAlert(true)
                
            }
        }catch(e){
            setSuccess(false)
            setShowAlert(true)
        }
    }
    /*** handle alter close ***/
    const closeHandler = ()=>{
        setShowAlert(false)
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <>
    <div className={style.nav}>
        <div className={style.navLogo}>
            <Link to='/'><img src= {logo}/></Link>
        </div>
        <div className={style.navContent}>
            <nav >
                <Link to=''>Why ACY<DropdownButton/></Link>
                <Link to=''>Products<DropdownButton/></Link>
                <Link to=''>Platforms<DropdownButton/></Link>
                <Link to=''>Education<DropdownButton/></Link>
                <Link to=''>Partners<DropdownButton/></Link>
            </nav>
        </div>
        <div className={style.navButtons}>
            {refresh?<Link to='/login'><button>Login</button></Link>:<Link to='/registered'><button>Favourite</button></Link>}
            <button onClick={logoutHandler}>Logout</button>
        </div>
    </div>
    <div className={style.navFold}>
        <section>
            <div className={style.left}>
                <div className={style.navFoldLogo}>
                    <Link to='/'><img src= {logo}/></Link>
                </div>
                <Link to=''>EN<DropdownButton/></Link>  </div>
            <div className={style.right}>{refresh?<Link to='/login'><button >Login</button></Link>:<Link to='/registered'><button>Favourite</button></Link>}</div>
        </section>
        <section>
            <div className={style.left}> 
                <div onClick={()=>{setShowNav(!showNav)}}>
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="3" rx="1" fill="#013B81"/>
                <rect y="9" width="24" height="3" rx="1" fill="#013B81"/>
                <rect y="18" width="24" height="3" rx="1" fill="#013B81"/>
                </svg>
                </div>
            </div>
            <div className={style.right}><button onClick={logoutHandler} className={style.button2}>Logout</button></div>
        </section>
        {showNav &&<div className={style.navUnfold}>
            <nav>
                <Link to=''><div>Why ACY</div><DropdownButton/></Link>
                <Link to=''><div>Products</div><DropdownButton/></Link>
                <Link to=''><div>Platforms</div><DropdownButton/></Link>
                <Link to=''><div>Education</div><DropdownButton/></Link>
                <Link to=''><div>Partners</div><DropdownButton/></Link>
            </nav>
            <div className={style.others}>
                    Know more here ...
            </div>
        </div>}

    </div>
    {showAlert&&<Alert success={success} onClose={closeHandler}/>}
    </>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Navigation;