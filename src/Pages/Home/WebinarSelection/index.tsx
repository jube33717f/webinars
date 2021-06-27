/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/*** dependence import */
import React,{useState, useEffect, useRef, useCallback,memo} from 'react'
import { useHistory } from "react-router-dom";
/*** styles import */
import style from './style.module.scss'
/*** components import */
import Card from '../../../Components/Card'
/*** hooks import */
import useFetch from '../../../Hooks/useFetch'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
interface propsInterface  {
    goToRegister:()=>void
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const WebinarSection = (props:propsInterface)=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const history = useHistory()

    const loader = useRef<any>(null);
    
    const [ page, setPage ] = useState(0)

    const { loading , error, list } = useFetch(page)
    
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
        
    },[]);

    useEffect(()=>{
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
            };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    },[ handleObserver ])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
 
    return <section className={style.webinar}>

        <div className={style.webinarContent}>
        
            {list.map((i, index) => {
                const date_new = new Date(i.created_at)
                date_new.setDate(date_new.getDate()+10) 
                const formattedDate = date_new.getFullYear()+'/'+date_new.getMonth()+'/'+date_new.getDay()+' '+date_new.getHours()+":"+date_new.getMinutes()
                return (
                    <div key={index}>
                <Card><div className={style.cardContent} key={index}>
                <p className={style.date}>{i.created_at}</p>
                <div className={style.title}><h3>{i.title}</h3></div>
                <div className={style.content} dangerouslySetInnerHTML={{__html: `${i.content.replace('<br>','')}`}} />
                <p>{formattedDate}</p>
                <div className={style.register}>
                    <span onClick={props.goToRegister}>Register now</span>
                    <div 
                    className={style.registerButton}
                    onClick={()=>{
                        history.replace(`/webinar/${i.id}`)
                    }}
                    >
                        {`>`}
                    </div>
                </div>
                </div></Card>
                    </div>
                )
            })}
        {loading && <p >loading...</p>}
        {error && <p>Error!</p>}
        <div ref={loader} />
           
        </div>
    </section>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default memo(WebinarSection);