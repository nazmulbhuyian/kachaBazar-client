import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";
import { FaStamp } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Calculations from '../../../Calculation/Calculations';
import { useQuery } from '@tanstack/react-query';

const Navbar1 = () => {

    const { user } = useContext(AuthContext)

    const { refetch, error, data: items = [] } = useQuery({
        queryKey: ['/booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://kacha-bazar-server.vercel.app/booking?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="navbar bg-emerald-500">
                <div className="flex-1">
                    <div className='flex text-white lg:text-xl items-center justify-items-center'>
                        <HiOutlineShoppingBag className='text-white lg:mr-3' size={30}></HiOutlineShoppingBag>
                        <div className=''>
                            <h3 className='font-bold'>KACHA</h3>
                            <h5>BAZAR</h5>
                        </div>
                    </div>
                </div>
                <div className="flex lg:gap-2">

                    <div className="form-control lg:mr-96">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered lg:ml-3 lg:w-96" />
                            <button className="btn btn-square border-none bg-white">
                                <FaSistrix className='text-gray-500 lg:mr-3' size={30}></FaSistrix>
                            </button>
                        </div>
                    </div>


                    <div>
                        <h3><HiOutlineBell className='text-white lg:mr-3' size={30}></HiOutlineBell></h3>
                    </div>
                    <div>

                        {/* <button className="btn indicator tab tab-lifted bg-emerald-500 border-none">
                            <label htmlFor="shopping-cart" className="drawer-button btn p-0 btn-primary"><HiShoppingCart className='lg:mr-3 text-white' size={30}></HiShoppingCart>
                                <span className="indicator-item badge bg-red-600 border-none">8</span>
                                </label>
                        </button> */}

                    </div>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    {/* <button className='btn btn-success'>Sign Out</button> */}
                                    <h3><FaStamp className='text-white lg:mr-3' size={30}></FaStamp></h3>
                                </>
                                :
                                <h3><FaStamp className='text-white lg:mr-3' size={30}></FaStamp></h3>
                        }
                    </div>
                </div>
            </div>

            {/* <Calculations items={items}></Calculations> */}

        </div>
    );
};

export default Navbar1;