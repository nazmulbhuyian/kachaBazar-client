import React, { useEffect, useState } from 'react';
import FishModal from './FishModal';
import SingleFish from './SingleFish';

const Fish = () => {

    const [fishes, setFishes] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://kacha-bazar-server.vercel.app/fish')
            .then(res => res.json())
            .then(data => setFishes(data))
    }, [])

    return (
        <div>
            <div className='text-center mt-16 mb-8'>
                <h2 className='text-2xl font-bold'>Popular Products for Daily Shopping</h2>
                <p className='text-gray-500 mt-2'>See all our popular products in this week. You can choose your daily needs <br /> products from this list and get some special offer with free shipping.</p>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4'>
                {
                    fishes.map(fish => <SingleFish setItems={setItems} key={fish.cetagory_id} fish={fish}></SingleFish>)
                }
            </div>
            {
                items &&
                <FishModal items={items}></FishModal>
            }
        </div>
    );
};

export default Fish;