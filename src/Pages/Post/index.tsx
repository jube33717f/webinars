/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependence import ***/
import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import cookie from"react-cookies";
/*** functions/variables import ***/
import { RootState } from '../../Store/rootReducer';
import { favouriteAPost } from '../../Apis'
/*** styles import ***/
import style from './style.module.scss'
/*** components import ***/
import PageContainer from '../../Container'
import Alert from '../../Components/Alert'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PostPage = ()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const history = useHistory();
    const list = useSelector((state:RootState)=>state.webinarsReducer.webinarsList)
    const post_id = history.location.pathname.replace('/webinar/','')
    const post = list.filter(i=>i.id+''===post_id)[0]

    const [like, setLike] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(true)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /*** close alert***/
    const closeHandler = ()=>{
        setShowAlert(false)
    }

    /*** register a post ***/
    const registerHandler = async () =>{  
        if (cookie.load('userId')) {
            try{
                const res = await favouriteAPost(parseInt(post_id))
                if(res.status === 200){
                    setLike(true)
                    setSuccess(true)
                    setShowAlert(true)
                }
            }catch(e){
                setSuccess(false)
                setShowAlert(true)
            }
        }else{
            history.replace('/login')
        }
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <><PageContainer><div className={style.post}>
        <section>
            <article className={style.postContainer}>
                    <h2>{post.title}</h2>
                    <div className={style.infoBox}>
                        <div className={style.avatar}>
                            <img src={`https://api.finlogix.com/${post.avatar}`}></img>
                        </div>
                        <div className={style.info}>
                            <span>{post.author}</span>
                            <time>{post.created_at}</time>
                        </div>
                    </div>
                    
                    <div className={style.content} dangerouslySetInnerHTML={{__html: `${post.content.replace('<br>','')}`}} />
                    <div className={like?`${style.like} ${style.favourite}`:style.favourite}>
                        <div className={style.icon} onClick={registerHandler}>♥️</div> <span> Favourite</span>
                    </div>
            </article>
        </section>
    </div></PageContainer>
    {showAlert&&<Alert success={success} onClose={closeHandler}/>}
    </>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default PostPage;