import React, { useEffect, useState } from 'react';
import VagetableCatagorys from './VagetableCatagorys';
import VagetableModal from './VagetableModal';


const Vagetable = () => {

    const [vagetables, setVagetables] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://vagetable-server.vercel.app/vagetable')
            .then(res => res.json())
            .then(data => setVagetables(data))
    }, [])

    return (
        <div>
            <div className='text-center mt-16'>
                <h2 className='text-2xl font-bold'>Popular Products for Daily Shopping</h2>
                <p className='text-gray-500 mt-2'>See all our popular products in this week. You can choose your daily needs <br /> products from this list and get some special offer with free shipping.</p>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 my-16'>
                {
                    vagetables?.data?.map(vagetable => <VagetableCatagorys
                        key={vagetable.cetagory_id}
                        vagetable={vagetable}
                        setItems={setItems}
                    ></VagetableCatagorys>)
                }
            </div>
            {
                items &&
                <VagetableModal items={items}></VagetableModal>
            }
        </div>
    );
};

export default Vagetable;