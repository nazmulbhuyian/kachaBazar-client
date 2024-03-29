import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseToken from '../../Hooks/UseToken';
import Google from '../../Shared/Google/Google';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = UseToken(createdUserEmail)

    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.error(err))
            })
            .then(error => console.error(error))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch('https://vagetable-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                toast.success('User Created Successfully')
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                                // pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[$@])/, message: 'Passwor should be strong'}
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Role</span></label>
                        <select {...register('role')} className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Please select a Option</option>
                            <option>seller</option>
                            <option>bayer</option>
                        </select>
                    </div>

                    <input className='btn btn-accent w-full mt-5 bg-emerald-500' value='Sign Up' type="submit" />

                </form>
                <p>Already have an account <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <Google></Google>
            </div>
        </div>
    );
};

export default Register;