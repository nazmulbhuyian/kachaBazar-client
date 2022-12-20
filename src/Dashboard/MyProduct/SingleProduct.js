import React from 'react';

const SingleProduct = ({ item }) => {
    
    const {img, name, price, about, cetagory_name} = item;

    return (
        <div className="card bg-white shadow-xl mx-auto p-5">
                < label><figure><img src={img} width='240px' alt="Shoes" /></figure></label >

            <div className="">
                <h2 className="text-xl font-bold">Name: {name}</h2>
                <p className="font-bold text-gray-400">About: {about}</p>
                    <p className='font-bold'>Price: ${price}</p>
                <p className='font-bold'>Cetagory-Name: {cetagory_name}</p>
            </div>
        </div>
    );
};

export default SingleProduct;