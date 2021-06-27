import FinLogix from './config'
import cookie from"react-cookies";


/* <------------------------------------ **** AUTH START **** ------------------------------------ */
export const userLogin = (email:string , password: string) =>
    FinLogix.post(`/auth/email/login`,{
        email,
        password
    })

export const userLogout = () =>
    FinLogix.post(`/auth/logout`,{},{
        headers:{
            "Authorization": 'Bearer '+ cookie.load('userToken'),
        }
    })
    

export const checkUser = () =>
    FinLogix.post(`/auth/me`,{},{
        headers:{
            "Authorization": 'Bearer '+ cookie.load('userToken'),
    }
    })
/* <------------------------------------ **** AUTH END **** ------------------------------------ */



/* <------------------------------------ **** ALL POSTS LIST START **** ------------------------------------ */
export const getList = (page:number) =>
    FinLogix.get(`/posts?per_page=12&page=${page}`)
/* <------------------------------------ **** ALL POSTS LIST END **** ------------------------------------ */



/* <------------------------------------ **** FAVOURITE LIST START **** ------------------------------------ */
export const favouriteAPost = (postId:number)=>
    FinLogix.post(`/favourites`,{
        ids:[postId],
        model:'post'
    },{
        headers:{
            "Authorization": 'Bearer '+ cookie.load('userToken'),
        }
    })

export const unfavouriteAPost = (postId: number)=>
    FinLogix.delete(`/favourites/post/${postId}`,{
        headers:{
            "Authorization": 'Bearer '+ cookie.load('userToken'),
        }
    })

export const getFavouritePostList = () =>
    FinLogix.get(`/posts?favorited=1&author=${cookie.load('userId')}}`,{
        headers:{
            "Authorization": 'Bearer '+ cookie.load('userToken'),
        }
    })
/* <------------------------------------ **** FAVOURITE LIST END **** ------------------------------------ */
