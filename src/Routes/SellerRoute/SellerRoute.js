import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseSeller from '../../Hooks/UseSeller';

const SellerRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = UseSeller(user?.email)

    const location = useLocation()

    if(loading || isSellerLoading){
        return <progress className="progress w-56 lg:ml-96 lg:mt-96"></progress>
    }

    if(user && isSeller){
        return children
    }


    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SellerRoute;