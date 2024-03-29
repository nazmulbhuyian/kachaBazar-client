import React, { useEffect, useState } from 'react';

const UseAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminloading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://vagetable-server.vercel.app/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin)
                    setIsAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminloading]
};

export default UseAdmin;