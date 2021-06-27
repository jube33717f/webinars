/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependency import ***/
import { memo } from 'react'
/*** styles import ***/
import style from './style.module.scss'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
interface propsInterface{
    success:boolean,
    onClose:()=>any
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Alert = (props:propsInterface)=>{
    return <div className={props.success?`${style.success} ${style.alertWrapper}`:`${style.error} ${style.alertWrapper}`}>
        <div className={style.alertIcon}>
            {props.success?`✅`:`❗️`}
        </div>
        <div className={style.alertMessage}>
            {props.success?'success':'Something error: please try again'}
        </div>
        <div className={style.alertAction}>
                <button onClick={props.onClose}>
                <span>✖️</span>
                </button>
        </div>
    </div>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default memo(Alert);
