import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar2 = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex align-center lg:justify-between md:justify-start my-3'>
            <div>
                <Link className='lg:font-medium lg:mx-8 mx-1 hover:text-emerald-500' to='/'>Home</Link>
                <Link className='lg:font-medium lg:mx-8 mx-1 hover:text-emerald-500' to='/myshop'>My Shop</Link>
                <Link to='/contact' className='lg:font-medium hover:text-emerald-500'>Contract Us</Link>
            </div>
            <div>
                {
                    user?.uid ?
                    // <button onClick={handleLogOut} className='btn btn-success bg-white'>Sign Out</button>
                    <button onClick={handleLogOut} className='ml-1 lg:font-medium hover:text-emerald-500'>Sign Out</button>
                        :
                        <Link to='/login' className='font-medium mx-1 hover:text-emerald-500'>Login</Link>
                }
                {/* <Link to='login' className='font-medium mx-1 hover:text-emerald-500'>Login</Link> */}
                <Link className='lg:font-medium lg:mx-8 mx-1 hover:text-emerald-500' to='/dashboard'>Dashboard</Link>
            </div>
        </div>
    );
};

export default Navbar2;