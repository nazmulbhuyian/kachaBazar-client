import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SingleProduct from './SingleProduct';

const MyProduct = () => {

    const { user } = useContext(AuthContext);

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/addProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://kacha-bazar-server.vercel.app/addProduct?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-emerald-500 text-3xl font-bold text-center mt-5 mb-8'>You Added Total {items.length} Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    items?.map(item => <SingleProduct key={item._id} item={item}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyProduct;