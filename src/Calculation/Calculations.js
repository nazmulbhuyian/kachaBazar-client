import React, { useContext } from 'react';
import Calculation from './Calculation';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Calculations = ({ items, refetch }) => {

    const {user} = useContext(AuthContext)

    return (

        <div>
            <h1 className='text-center text-3xl font-bold text-emerald-600 mt-3 underline'>Your Order</h1>
                {
                    user?.email ?
                    <div>
                        {
                            items?.data?.map(item => <Calculation item={item} refetch={refetch}></Calculation>)
                        }
                    </div>
                    :
                    <h3 className='text-green-500 text-center mt-5'>Please go to <Link to='/login' className='text-2xl'>Login page</Link> and loged your email</h3>
                }
            <h1 className='text-2xl font-bold text-emerald-500'>Total Amouunt Is: {items?.data?.reduce((prv, next) => prv + next.newPrice, 0)}</h1>

            <Link to='/dashboard'><button className='btn text-center flex mx-auto font-bold bg-emerald-600 mt-3'>Go To CheckOut</button></Link>

        </div>

    );
};

export default Calculations;