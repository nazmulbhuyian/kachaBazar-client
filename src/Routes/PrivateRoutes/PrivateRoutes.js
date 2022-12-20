import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation()


    if(loading){
        return <progress className="progress w-56 lg:ml-96 lg:mt-96"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    // return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoutes;