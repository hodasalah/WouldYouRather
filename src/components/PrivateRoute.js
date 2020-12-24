import React from 'react'
import {Route ,Redirect } from 'react-router-dom'
import LogIn from './LogIn';

export function PrivateRoute({ component:Component, authedUser, ...rest}){
    
    return <Route {...rest} render={(props)=>(
        authedUser === null
            ? <Redirect component={LogIn} />
            : <Component { ...props} />
    )} />
}
