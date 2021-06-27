/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** styles import ***/
import style from './style.module.scss'
/*** interfaces import */
import { webinarsList } from '../../Store/moduleWebinars/types';
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
interface propsInterface {
    list:webinarsList[],
    clickHandler:(title:string|null,id:number)=>any;

}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const DropDown = (props:propsInterface)=>{
    return <div className={style.dropdownwrapper}>
        <ul>
            {props.list.map((item:webinarsList,index:number)=>(
                <li key={item.id}
                onClick={(e)=>{props.clickHandler(e.currentTarget.textContent,item.id)}}
                >{item.title}</li>
            ))}
        </ul>
    </div>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default DropDown;