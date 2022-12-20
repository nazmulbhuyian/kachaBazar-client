import React from 'react';

const ProductTitle = () => {
    return (
        <div className='flex items-center justify-between bg-pink-100 p-7 mx-8 rounded-lg'>
            <div>
                <h3 className='text-xl font-medium'><span className='text-emerald-600 font-bold'>100% Natural Quality</span> Organic Product</h3>
                <p>See Our latest discounted products from here and get a special <span className='text-emerald-600'>discount product</span></p>
            </div>
            <div>
            <button className='btn btn-success text-white'>Shop Now</button>
            </div>
        </div>
    );
};

export default ProductTitle;