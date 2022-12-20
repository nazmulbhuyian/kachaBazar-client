import React from 'react';
import Calculation from './Calculation';
import { Link } from 'react-router-dom';

const Calculations = ({ items, refetch }) => {
    

    return (

        <div>
            <h1 className='text-center text-3xl font-bold text-emerald-600 mt-3 underline'>Your Order</h1>
            <div>
                {
                    items?.map(item => <Calculation item={item} refetch={refetch}></Calculation>)
                }
            </div>

              <h1 className='text-2xl font-bold text-emerald-500'>Total Amouunt Is: {items.reduce((prv, next) => prv + next.newPrice, 0)}</h1>

            <Link to='/dashboard'><button className='btn text-center flex mx-auto font-bold bg-emerald-600 mt-3'>Go To CheckOut</button></Link>
        </div>

    );
};

export default Calculations;