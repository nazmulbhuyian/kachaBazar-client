import React from 'react';
import first from './five.webp'
import second from './second.png'
import { FaCcMastercard } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaDumpster } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";

const ProductTitle2 = () => {
    return (
        <div>
            <div className="hero bg-slate-100 mt-16 mb-8 p-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={second} className="rounded-lg" alt='' width='450px' />
                    <div>
                        <h1 className="text-3xl font-bold">Get Your Daily Needs From Our KachaBazar Store</h1>
                        <p className="py-6 text-center">There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
                        <button className="btn bg-black text-white border-none"><FaApple size={30}></FaApple> App Store</button>
                        <button className="btn bg-black ml-3 text-white border-none"><FcAndroidOs size={30}></FcAndroidOs> Play Store</button>
                    </div>
                    <img src={first} className="rounded-lg" alt='' width='450px' />
                </div>
            </div>
            <div className='flex mx-16 justify-around'>
                <p className='flex items-center'><FaCarSide size={30} className='mr-3 text-emerald-500'></FaCarSide> Free Shipping From $500.00</p>
                <p className='flex items-center'><FaPhoneAlt size={30} className='mr-3 text-emerald-500'></FaPhoneAlt> Support 24/7 At Anytime</p>
                <p className='flex items-center'><FaCcMastercard size={30} className='mr-3 text-emerald-500'></FaCcMastercard> Secure Payment Totally Safe</p>
                <p className='flex items-center'><FaDumpster size={30} className='mr-3 text-emerald-500'></FaDumpster> Latest Offer Upto 20% Off</p>
            </div>
        </div>
    );
};

export default ProductTitle2;