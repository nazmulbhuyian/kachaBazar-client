import React from 'react';
import first from '../Banner/first.jpg'
import div1 from '../Banner/div1.jpg'
import div2 from '../Banner/div2.jpg'

const Banner = () => {
    return (
        <div className='lg:flex md:block'>

            <div className="hero bg-pink-100 w-3/5 lg:m-8 ml-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={first} alt='' width='450px' />
                    <div>
                        <h1 className="text-5xl font-bold">Quality Freshness Guranted</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success bg-emerald-400 text-white">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className='border-2 border-orange-500 lg:max-h-[370px] m-8'>

                <div>
                    <p className='bg-rose-100 text-center p-3'>Latest Super Discount Active Coupon Code</p>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={div1} width='150px' className="rounded-lg" alt='' />
                            <div>
                                <p className='text-xl text-gray-500'><span className='text-xl text-red-500 font-bold'>10%</span> Off <span className="border-none bg-pink-100 indicator-item badge text-red-500">Inactive</span> </p>
                                <h3 className='font-bold'>October Gift Voucher</h3>
                                <span className="countdown font-mono text-xl">
                                    <span className='bg-red-500 text-white rounded-md' style={{ "--value": 10 }}></span>:
                                    <span className='bg-red-500 text-white rounded-md' style={{ "--value": 24 }}></span>:
                                    <span className='bg-red-500 text-white rounded-md' style={{ "--value": 54 }}></span>
                                </span>
                            </div>
                            <div>
                                <button className="border-dashed border-emerald-300 btn bg-emerald-50 text-emerald-400 font-bold">December22</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={div2} width='150px' className="rounded-lg" alt='' />
                            <div>
                                <p className='text-xl text-gray-500'><span className='text-xl text-red-500 font-bold'>15%</span> Off <span className="border-none bg-emerald-100 indicator-item badge text-emerald-500">Active</span> </p>
                                <h3 className='font-bold'>December Gift Voucher</h3>
                                <span className="countdown font-mono text-xl">
                                    <span className='bg-red-500 text-white rounded-md' style={{ "--value": 10 }}></span>:
                                    <span className='bg-red-500 text-white rounded-md' style={{ "--value": 24 }}></span>:
                                    <span className='bg-red-500 text-white rounded-md' style={{ "--value": 54 }}></span>
                                </span>
                            </div>
                            <div>
                                <button className="border-dashed border-emerald-300 btn bg-emerald-50 text-emerald-400 font-bold">Winter22</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;