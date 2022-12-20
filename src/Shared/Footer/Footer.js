import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";


const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content mt-16">
             <div className="navbar">
                <div className="flex-1">
                    <div className='flex  text-xl items-center justify-items-center'>
                        <HiOutlineShoppingBag className='text-emerald-500 mr-3' size={30}></HiOutlineShoppingBag>
                        <div className=''>
                            <h3 className='font-bold'>KACHA</h3>
                            <h5>BAZAR</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='' className="link link-hover">Branding</Link>
                <Link to='' className="link link-hover">Design</Link>
                <Link to='' className="link link-hover">Marketing</Link>
                <Link to='' className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='' className="link link-hover">About us</Link>
                <Link to='' className="link link-hover">Contact</Link>
                <Link to='' className="link link-hover">Jobs</Link>
                <Link to='' className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to='' className="link link-hover">Terms of use</Link>
                <Link to='' className="link link-hover">Privacy policy</Link>
                <Link to='' className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;