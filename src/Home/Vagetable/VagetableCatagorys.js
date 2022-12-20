import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const VagetableCatagorys = ({ vagetable, setItems }) => {

    const { img, name, price, about } = vagetable;

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
                <motion.span>< label htmlFor="vagetable-modal" onClick={() =>setItems(vagetable)} ><figure><img src={img} width='240px' alt="Shoes" /></figure></label ></motion.span>
            </motion.button>
            <div className="">
                <h2 className="text-xl">{name}</h2>
                <div className="flex justify-between items-center">
                    <p className='font-bold'>${price}</p>
                    < label htmlFor="vagetable-modal" className="btn border-emerald-500 bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white" onClick={() =>setItems(vagetable)} ><FaCartArrowDown size={40}></FaCartArrowDown></label >
                    
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

export default VagetableCatagorys;