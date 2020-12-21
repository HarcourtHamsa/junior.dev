
import React, { useContext } from 'react'
import { AppContext } from './context'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useContext(AppContext)
    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated()
                    ? <Component {...props} />
                    : <Redirect to="/login" />;
            }}
        />
    );
};



export default ProtectedRoute;