/* <------------------------------------ **** IMPORT START **** ------------------------------------ */
/*** dependence import ***/
import { useState, useEffect, useCallback } from "react";
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
/*** functions/variables import ***/
import { getList } from '../Apis'
import * as actionType from '../Store/moduleWebinars/types'
import { getWebinarsSucceed, getWebinarsFailed } from '../Store/moduleWebinars/actions'
/* <------------------------------------ **** IMPORT END **** ------------------------------------ */

/* <------------------------------------ **** CUSTOMIZE HOOK START **** ------------------------------------ */
const useFetch = (page : number )=>{
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [ list, setList ] = useState<actionType.webinarsList[]>([])
    const dispatch: Dispatch = useDispatch();
    const loadMore = useCallback(async()=>{
        try{
            await setLoading(true);
            await setError(false);
            const res = await getList( page )
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
                
                result = result.filter((i:actionType.webinarsList)=>!i.favourited)
                
                await setList((prev:actionType.webinarsList[]) =>[
                    ...prev,...result
                ])
                
                dispatch(getWebinarsSucceed([...list,...result]))

            }else{
                dispatch(getWebinarsFailed())
            }
        }catch(e){
            setError(e)
        }

    },[page])
    useEffect(()=>{
        loadMore()
    },[loadMore, page])

    return { loading , error, list}
    
}
/* <------------------------------------ **** CUSTOMIZE HOOK END **** ------------------------------------ */

export default useFetch;