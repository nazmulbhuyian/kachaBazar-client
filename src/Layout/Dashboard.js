import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import UseSeller from '../Hooks/UseSeller';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Order</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUser'>All User</Link></li>
                                <li><Link to='/dashboard/allProducts'>All User Products</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>

        // <div>
        //     <Navbar></Navbar>
        //     <div className='lg:flex justify-start w-11/12'>
        //         <div className='w-1/5'>
        //             <ul>
        //                 <li><Link to='/dashboard'>My Order</Link></li>
        //             </ul>
        //         </div>
        //         <div>
        //             <Outlet></Outlet>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Dashboard;