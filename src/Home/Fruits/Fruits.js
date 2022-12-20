import React, { useEffect, useState } from 'react';
import Fruit from './Fruit';
import FruitModal from './FruitModal';

const Fruits = () => {

    const [fruits, setFruits] = useState([]);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])

    return (
        <div>
            <div className='text-center mt-16 mb-8'>
                <h2 className='text-2xl font-bold'>Popular Products for Daily Shopping</h2>
                <p className='text-gray-500 mt-2'>See all our popular products in this week. You can choose your daily needs <br /> products from this list and get some special offer with free shipping.</p>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>
                {
                    fruits.map(fruites => <Fruit setItems={setItems} key={fruites.cetagory_id} fruites={fruites}></Fruit>)
                }
            </div>
            {
                items &&
                <FruitModal items={items}></FruitModal>
            }
        </div>
    );
};

export default Fruits;