import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyOrder = () => {

    const { user } = useContext(AuthContext);

    const { data: items = [] } = useQuery({
        queryKey: ['/bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://vagetable-server.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    console.log(items);

    return (
        <div className="overflow-x-auto">
            <table className="table lg:w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Category</th>
                        <th>Product-Name</th>
                        <th>Quantity</th>
                        <th>Total-Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items?.data?.map((item, i) => <tr key={item._id}>
                            <th>{i + 1}</th>
                            <th>{item.cetagory_name}</th>
                            <td>{item.productName}</td>
                            <td>{item.count}</td>
                            <td>{item.newPrice}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <div className='lg:ml-96 ml-32'>
                <h1 className='text-2xl font-bold text-emerald-500'>Total Amouunt Is: {items?.data?.reduce((prv, next) => prv + next.newPrice, 0)}</h1>
                <Link to='/myshop'><button className='border-emerald-500 btn btn-primary bg-emerald-500 '>Update Product</button></Link>
                <button className='btn btn-primary ml-8 px-16'>Pay</button>

            </div>
        </div>
    );
};

export default MyOrder;