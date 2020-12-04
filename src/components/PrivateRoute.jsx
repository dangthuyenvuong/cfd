import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Login from '../pages/login';
import Register from '../pages/register';

export default function PrivateRoute({component, ...prop}) {

    let { login } = useAuth();
    return <Route {...prop} render={(props) => {
        if(login){
            return <component {...props} />
        }

        return <Login {...props}/>
    }}/>
}