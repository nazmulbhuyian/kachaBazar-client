import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddProoducts = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const imageHostKey = process.env.REACT_APP_imagebb_key;
    const imageHostKey = '14f1e107e329b44a04c4481b2e76451e';

    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData) {
                    const addProduct = {
                        img: imgData.data.url,
                        cetagory_name: data.category,
                        name: data.product,
                        price: data.price,
                        about: data.about,
                        email: user?.email
                    }
                    console.log(addProduct);
                    fetch('https://vagetable-server.vercel.app/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.status === 'Successfully') {
                                toast.success('Product added successfully')
                                navigate('/dashboard/myProduct')
                            }
                        })
                }
            })
    };

    return (
        <div className='flex w-80 mx-auto'>

            <div>
                <h1 className='text-emerald-500 text-3xl font-bold'>Please Add A Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-emerald-500">Product Name</span>
                        </label>
                        <input {...register("product", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-emerald-500">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" className="input input-bordered input-lg w-full max-w" />
                    </div>

                    <div>
                        <label className="label"><span className="label-text text-bold text-2xl text-emerald-500">Which Type Product Add</span></label>
                        <select {...register('category')} className="select input-bordered w-full text-emerald-500">
                            <option>vagetable Item</option>
                            <option>Fruits Item</option>
                            <option>Fish Item</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-emerald-500">About Product</span>
                        </label>
                        <textarea {...register("about", { required: true })} className="textarea textarea-accent w-full" placeholder="About Product"></textarea>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-bold text-2xl text-emerald-500">Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-success w-full" />
                    </div>

                    <input className='text-2xl btn btn-accent w-full mt-5 text-white bg-emerald-500' value='Add Product' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProoducts;