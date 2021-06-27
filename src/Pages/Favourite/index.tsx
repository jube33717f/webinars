/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependence import ***/
import React,{ useState, useEffect } from 'react'
import cookie from"react-cookies";
/*** styles import ***/
import style from './style.module.scss'
/*** functions/variables import ***/
import { getFavouritePostList,unfavouriteAPost } from '../../Apis'
/*** interfaces import */
import { webinarsList }  from '../../Store/moduleWebinars/types'
/*** components import ***/
import Card from '../../Components/Card'
import PageContainer from '../../Container'
import Alert from '../../Components/Alert'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const FavouritePage = ()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const [ list, setList ] = useState<webinarsList[]>([])
    const [ success, setSuccess] = useState<boolean>(true)
    const [ showAlert, setShowAlert] = useState<boolean>(false)

    useEffect(()=>{
        fetchFavourite()
    },[ ])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */

    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /*** handle alter close ***/
    const closeHandler = ()=>{
        setShowAlert(false)
    }
    /*** unregister request ***/
    const unregisterAPost = async (id:number)=>{
        try{
            const res = await unfavouriteAPost(id)
            if( res.status === 200 ){
                setSuccess(true)
                setShowAlert(true)
            }
        }catch(e){
            setSuccess(false)
            setShowAlert(true)
        }
    }
    /*** favourite list request ***/
    const fetchFavourite =async ()=>{
        try{
            const res = await getFavouritePostList()
            console.log(res.data)
            if(res.status === 200){
                let result= res.data.data.map((post:any)=>{
                    return{
                        id:post.id,
                        author:post.creator.username,
                        avatar:post.creator.avatar,
                        created_at:post.created_at,
                        title:post.title,
                        content:post.content,
                        favourited:post.favourited
                    }
                })
                
            setList(result.filter((i:webinarsList)=>i.favourited))

            }
        }catch(e){
            setSuccess(false)
            setShowAlert(true)
        }
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <><PageContainer><section className={style.webinar}>

    {cookie.load('userId')?<div className={style.webinarContent}>
    
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
                <span onClick={()=>{
                    console.log(i.id)
                    unregisterAPost(i.id)
                }}>Unregister</span>
                <div className={style.registerButton}>
                    {`>`}
                </div>
            </div>
            </div></Card>
                </div>
            )
        })}

       
    </div>:<div>Please log in first</div>}
</section></PageContainer>
{showAlert&&<Alert success={success} onClose={closeHandler}/>}
</>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default FavouritePage