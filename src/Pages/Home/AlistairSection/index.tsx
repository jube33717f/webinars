/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** styles import ***/
import style from './style.module.scss'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const AlistairSection = ()=>{
    return <section className={style.alistair}>
        <div className={style.alistairContent}>
            <div className={style.alistairContentText}>
                <h2>Meet Your Host - Alistair Schultz</h2>
                <p>{`
With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.

As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.

At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.

`}</p>
                <div className={style.more}><p>{`See more >`}</p></div>
            </div>
            
        </div>
        <div className={style.alistairContent}>
            <div className={style.videoWrapper}>
                <div className={style.video}>
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube-nocookie.com/embed/rODU4LVsrS0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Youtobe video player"
                />
                </div>
            </div>
        </div>
    </section>
}
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default AlistairSection;