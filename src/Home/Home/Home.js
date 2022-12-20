import React from 'react';
import Banner from '../Banner/Banner';
import Dalivary from '../Delivary/Dalivary';
import Fish from '../Fish/Fish';
import Fruits from '../Fruits/Fruits';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductTitle2 from '../ProductTitle2/ProductTitle2';
import Vagetable from '../Vagetable/Vagetable';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Banner></Banner>
            <ProductTitle></ProductTitle>
            <Vagetable></Vagetable>
            <Dalivary></Dalivary>
            <Fruits></Fruits>
            <Fish></Fish>
            <ProductTitle2></ProductTitle2>
        </div>
    );
};

export default Home;