import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const FishModal = ({ items }) => {

    const { img, name, price, about, cetagory_name} = items;
    const { user } = useContext(AuthContext)

    const [count, setCount] = useState(1)
    const newPrice = price * count;

    const handleIncrease = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    const handleDecrease = () => {
        const newCount = count - 1
        setCount(newCount)
    }

    const handleBookings = (event) =>{
        event.preventDefault();

        const bookings = {
            productName: name,
            img,
            old_price: price,
            cetagory_name,
            newPrice,
            count,
            email: user.email
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data =>{
            toast.success(`${name} booking successfuly added`)
        })
    }

    return (
        <div>

            < input type="checkbox" id="fish-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="fish-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={img} className="max-w-sm rounded-lg shadow-2xl" height='350px' width='100px' alt='' />
                            <div>
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <p className='py-2 text-gray-400'>{about ? about.slice(0, 200) : ''}</p>
                                <p className='text-2xl pb-2 font-bold'>price: ${newPrice}</p>
                                <div className='flex justify-between'>
                                    <div className='flex justify-between align-center'>
                                        <button onClick={handleIncrease} className='btn rounded-lg text-emerald-500 bg-white border-emerald-500 hover:text-white hover:bg-emerald-500 mr-2'>+</button>
                                        <p className='p-3'>{count}</p>
                                        <button onClick={handleDecrease} className='btn rounded-lg text-emerald-500 bg-white border-emerald-500 hover:text-white hover:bg-emerald-500 ml-2'>-</button>
                                    </div>
                                    <button  onClick={handleBookings} className="btn text-emerald-500 bg-white border-emerald-500 hover:text-white hover:bg-emerald-500">Add To Cart</button>
                                </div>
                                <p className='mt-3 font-bold'>Category-Name: {cetagory_name}</p>
                                <p className='mt-3'>Your-Email: {user?.email}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FishModal;