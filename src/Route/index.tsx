 /* <------------------------------------ **** IMPORT START **** ------------------------------------ */
 /*** dependence import ***/
 import React, { Suspense, useEffect } from 'react';
 import { Route, HashRouter as Router, Switch } from 'react-router-dom'; 
 import { Dispatch } from 'redux';
 import { useDispatch } from 'react-redux';
 import cookie from"react-cookies";
 /*** function import ***/
 import { loadUserSucceed } from '../Store/moduleUser/actions'
 import { checkUser } from '../Apis'
/*** styles import ***/
 import style from './style.module.scss'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */
 const HomePage = React.lazy(() => import('../Pages/Home'));
 const LoginPage = React.lazy(()=>import('../Pages/Login'));
 const PostPage = React.lazy(()=>import('../Pages/Post'));
 const FavouritePage = React.lazy(()=>import('../Pages/Favourite'))
 /* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
 const RootRouter = () :JSX.Element =>{
     /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const dispatch: Dispatch = useDispatch();
    useEffect(()=>{
        if(cookie.load('userId')){
            checkUserLoginStatus()
        }
    },[])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /*** check cookie if user has been logged in ***/
    const checkUserLoginStatus = async()=>{
        try{
            const req = await checkUser()
            if(req.status === 200) {
                dispatch(loadUserSucceed(
                    req.data.user.username,
                    req.data.user.email,
                    req.data.user.id,
                    cookie.load('userToken')))
            }    
                
        }catch(e){
            console.error(e)
        }

    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <Suspense
        fallback={
        /* <------------------------------------ **** Loading Animation START **** ------------------------------------ */
        <div>
        <div>
                <div className={style.loadingPageWrapper}>
                    <div className={style.loadingAnimation}>
                        <div className={style.cubeGrid}>
                            <div className={style.loadingCube1} />
                            <div className={style.loadingCube2} />
                            <div className={style.loadingCube3} />
                            <div className={style.loadingCube4} />
                            <div className={style.loadingCube5} />
                            <div className={style.loadingCube6} />
                            <div className={style.loadingCube7} />
                            <div className={style.loadingCube8} />
                            <div className={style.loadingCube9} />
                        </div>
                    </div>
                </div>
        </div>
    </div>
    /* <------------------------------------ **** Loading Animation END **** ------------------------------------ */
        }
    >
        <Router>
            <Switch>
                <Route path="/" exact component={ HomePage } />
                <Route path='/login' component={ LoginPage } />
                <Route path='/webinar' component={ PostPage } />
                <Route path='/registered' component={ FavouritePage }/>
            </Switch>
        </Router>
    </Suspense>
 }
 /* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
 export default RootRouter;
