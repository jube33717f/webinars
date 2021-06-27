/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** styles import ***/
import style from './style.module.scss'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Card = (props:{children:JSX.Element}):JSX.Element=>{
    return <div className={style.cardWrapper}>
        <div className={style.card}>
        {props.children}
        </div>
    </div>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Card;