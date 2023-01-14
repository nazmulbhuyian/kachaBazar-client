
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseToken from '../../Hooks/UseToken';
import Google from '../../Shared/Google/Google';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = UseToken(loginUserEmail)

    const navigate = useNavigate();
    const location = useLocation()
    // const from = location.state?.from?.pathname || '/';

    if(token){
        navigate('/')
    }

    const handleSignIn = (data) =>{
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            // navigate(from, {replace: true})
            // navigate('/')
            setLoginUserEmail(user.email)
        })
        .then(err => console.error(err));
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1>Email: <strong>nazmul@gmail.com</strong></h1>
                <h1>Password: <strong>123456</strong></h1>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleSignIn)}>


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

                    <input className='btn btn-accent w-full mt-5 bg-emerald-500' value='Log In' type="submit" />
                    {
                        // signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                <p>New to Kacha Bazar <Link className='text-secondary' to='/signup'>Please Sign Up</Link></p>
                <div className="divider">OR</div>
                <Google></Google>
            </div>
        </div>
    );
};

export default Login;