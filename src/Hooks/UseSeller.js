import React, { useEffect, useState } from 'react';

const UseSeller = (email) => {

    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://kacha-bazar-server.vercel.app/user/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false)
                })
        }
    }, [email])

    return [isSeller, isSellerLoading]
};

export default UseSeller;