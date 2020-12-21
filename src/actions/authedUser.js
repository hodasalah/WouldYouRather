import { showLoading, hideLoading } from "react-redux-loading";

export const SET_AUTHED_USER = 'SET_AUTHED_USER';

function setAuthedUser (id){
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function handleSetAuthedUser (authedUser){
    return (dispatch)=>{
        dispatch (showLoading())
        setTimeout(()=>{
            dispatch(setAuthedUser(authedUser))
            dispatch(hideLoading())
        }, 1000)
    }
}