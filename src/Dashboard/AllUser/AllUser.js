import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AllUser = () => {

    const { user, removeUser } = useContext(AuthContext);

    const { isLoading, refetch, error, data: allUsers = [] } = useQuery({
        queryKey: ['alluser'],
        queryFn: async () => {
            const res = await fetch('https://vagetable-server.vercel.app/user')
            const data = await res.json();
            return data;
        }
    })

    const handleAdmin = (id) => {
        fetch(`https://vagetable-server.vercel.app/user/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.acknowledged) {
                    toast.success("Make Admin successfully");
                    refetch()
                }
            })
    }

    const handleDelete = (id) => {
        // removeUser(email);
        fetch(`https://vagetable-server.vercel.app/user/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.deletedCount) {
                    toast.success("User deleted successfully");
                    refetch()
                }
            })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table lg:w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers?.data?.map((item, i) => <tr key={item._id}>
                            <th>{i + 1}</th>
                            <th>{item.email}</th>
                            <th>{item.name}</th>
                            <th>{item.role}</th>
                            <td><button onClick={() => handleAdmin(item._id)} className='btn bg-emerald-500'>Make Admin</button></td>
                            <td><button onClick={() => handleDelete(item._id)} className='btn bg-emerald-500'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;