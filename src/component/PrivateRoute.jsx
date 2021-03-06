import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state=> state.auth);
    // const auth = {isAuthenticated: true}
    return(
    <Route {...rest} render={props => (
        auth.isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)}


