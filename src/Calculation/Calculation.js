import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Calculation = ({ item, refetch }) => {

    const { img, productName, old_price, count, _id } = item;

    const [quantity, setQuantity] = useState(count);
    const newPrices = old_price * quantity;

    const handleIncrease = () => {
        const newCount = quantity + 1
        setQuantity(newCount)
        const update = {
            _id,
            newPrice: old_price * newCount,
            newCount
        }
        fetch('https://kacha-bazar-server.vercel.app/updatePrice', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                refetch()
            })
    }

    const handleDecrease = () => {
        const newCount = quantity - 1
        setQuantity(newCount)
        const update = {
            _id,
            newPrice: old_price * newCount,
            newCount
        }
        fetch('https://kacha-bazar-server.vercel.app/updatePrice', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                refetch()
            })
    }

    const handleDelete = (id) => {
        fetch(`https://kacha-bazar-server.vercel.app/deleteBooking/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${productName} deleted successfully`)
                    refetch()
                }
            })
    }


    return (
        <div>
            <div className='flex align-center justify-around mt-7'>
                <div className='flex align-center'>
                    <img src={img} alt="" width='50px' />
                    <div className='ml-2'>
                        <p>{productName}</p>
                        <p>Item-Price: ${old_price}</p>
                        <strong>${newPrices}</strong>
                    </div>
                </div>
                <div className='flex justify-between align-center'>
                    <button onClick={handleIncrease} className='btn rounded-lg text-emerald-500 bg-white border-emerald-500 hover:text-white hover:bg-emerald-500 mr-2'>+</button>
                    <p className='p-2'>{quantity}</p>
                    <button onClick={handleDecrease} className='btn rounded-lg text-emerald-500 bg-white border-emerald-500 hover:text-white hover:bg-emerald-500 ml-2'>-</button>
                </div>
                <button className='btn bg-emerald-500' onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>

    );
};

export default Calculation;