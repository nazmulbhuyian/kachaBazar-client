import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Calculations from '../../../Calculation/Calculations';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyShop = () => {


    const { user } = useContext(AuthContext)

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://kacha-bazar-server.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='lg:w-3/5 lg:mx-auto'>
            <Calculations items={items} refetch={refetch}></Calculations>
        </div>
    );
};

export default MyShop;