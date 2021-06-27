/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependence import ***/
import React,{useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import cookie from"react-cookies";
/*** styles import ***/
import style from './style.module.scss'
/*** components import ***/
import PageContainer from '../../Container'
import WebinarSection from './WebinarSelection'
import AlistairSection from './AlistairSection'
import RegisterSection from './RegisterSection'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const HomePage = ():JSX.Element=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const myRef = useRef<HTMLDivElement>(null)

    const history = useHistory()

    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /*** open topic dropdown ***/
    const openDropdown = (event:React.MouseEvent)=>{
        event.stopPropagation()
        setShowDropdown(true)
    }

    /*** close top dropdown ***/
    const closeDropdown = ()=>{
        setShowDropdown(false)
    }

    /*** skip to register form section ***/
    const goToRegister= ()=>{
        if (cookie.load('userId')&&myRef.current) {
            window.scrollTo(0, myRef.current.offsetTop || 0)
        }else{
            history.replace('/login')
        }
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <PageContainer>
        <div onClick={closeDropdown}>
        <section className={style.header} >
            <div className={style.headerContent}>
                <h1>Forex Webinars</h1>
                <p>Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.</p>
            </div>
        </section>
        <WebinarSection goToRegister={goToRegister}/>
        <AlistairSection/>
        <div ref={myRef }>
            <RegisterSection showDropdown={showDropdown} openDropdown={openDropdown}/>
        </div>
        
        </div>
    </PageContainer>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default HomePage