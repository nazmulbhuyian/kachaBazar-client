import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Fruit = ({ fruites, setItems }) => {

    const { img, name, price, price_old, about } = fruites;

    const [isHover, setIsHover] = useState(false);

    return (
        <div className="card bg-white shadow-xl mx-auto p-5">
            <motion.button
                    initial={false}
                    animate={[isHover ? "hover" : "rest"]}
                    whileTap="press"
                    variants={buttonVariants}
                    onHoverStart={() => setIsHover(true)}
                    onHoverEnd={() => setIsHover(false)}
                    className="star"
                >
                    <motion.span>< label htmlFor="fruit-modal" onClick={() =>setItems(fruites)} ><figure><img src={img} width='240px' alt="Shoes" /></figure></label ></motion.span>
                </motion.button>
            <div className="">
                <h2 className="text-xl mt-2">{name}</h2>
                <div className="flex justify-between items-center">
                    <div className='flex'>
                        <p className='font-bold mr-2'>${price}</p>
                        <p className='font-bold text-gray-400'>${price_old}</p>
                    </div>
                    < label htmlFor="fruit-modal" className="btn border-emerald-500 bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white" onClick={() =>setItems(fruites)} ><FaCartArrowDown size={40}></FaCartArrowDown></label >
                </div>
            </div>
        </div>
    );
    
};
const buttonVariants = {
    hover: {
        scale: 1.1
    }
}

export default Fruit;
