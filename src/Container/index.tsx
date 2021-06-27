/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** components import ***/
import Navigation from '../Components/Navigation'
/*** styles import ***/
import style from './style.module.scss'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const PageContainer = (props:{children:JSX.Element}):JSX.Element=>{
    return<>
    <Navigation/>
    <div className={style.containerWrapper}>{props.children}</div>
    </>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default PageContainer;