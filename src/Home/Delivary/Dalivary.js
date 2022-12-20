import React from 'react';
import image from '../Delivary/delivary-boy.webp'

const Dalivary = () => {
    return (
        <div className='border-8 border-emerald-500 mx-8 mt-16'>
            <div className='bg-emerald-500 p-16'>
                <div className="bg-white p-5">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image} alt='' className="rounded-lg" width='350px' />
                        <div>
                            <h3 className='text-xl font-medium'>Organic Products and Food</h3>
                            <h1 className="text-2xl font-bold mt-2">Quick Delivery to <span className='text-emerald-600'>Your Home</span></h1>
                            <p className='mt-2'>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and <br /> get some special offer. See Our latest discounted products from here and get a special discount.</p>
                            <button className="rounded-full px-10 btn btn-success bg-emerald-400 text-white mt-5">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dalivary;