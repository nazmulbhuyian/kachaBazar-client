import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseToken from '../../Hooks/UseToken';

const Google = () => {

    const { googleSignIn } = useContext(AuthContext);

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = UseToken(createdUserEmail)

    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                // console.log(user)
                saveUser(user.email)
                setCreatedUserEmail(user.email)
            })
            .then(err => console.error(err))

    }

    const saveUser = (email) => {
        const user = { email };
        fetch('https://vagetable-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast.success('Successfull')
                }
            })
    }


    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default Google;