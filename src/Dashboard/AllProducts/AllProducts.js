import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AllProducts = () => {

    const {user} = useContext(AuthContext);

    const { refetch, isLoading, error, data: items = [] } = useQuery({
        queryKey: [ 'allBookings'],
        queryFn: async () =>{
          const res =  await fetch('http://localhost:5000/allBookings')
          const data = res.json();
          return data;
        }
      })

    return (
        <div className="overflow-x-auto">
            <table className="table lg:w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Category</th>
                        <th>Product-Name</th>
                        <th>Quantity</th>
                        <th>Total-Price</th>
                        <th>Payment</th>
                        <th>Situation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items?.map((item, i) => <tr key={item._id}>
                            <th>{i + 1}</th>
                            <th>{item.email}</th>
                            <th>{item.cetagory_name}</th>
                            <td>{item.productName}</td>
                            <td>{item.count}</td>
                            <td>{item.newPrice}</td>
                            <td>No</td>
                            <td><button className='btn bg-emerald-500'>Delivery</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;