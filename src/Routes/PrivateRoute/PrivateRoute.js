import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <div>Loading....</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;