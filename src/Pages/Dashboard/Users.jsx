import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            // console.log(res.data);
            return res.data
        }
    })
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this from cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch()
                    })
                    .catch(err => console.log(err))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

            }
        });
    }

    const handleAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make admin ${user.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch()
                    })
                    .catch(err => console.log(err))
                Swal.fire({
                    title: "New Admin Created",
                    text: `${user.name} is admin from now`,
                    icon: "success"
                });

            }
        });
    }
    return (
        <div>
            <h1 className='tex-3xl'>Users {users.length}</h1>
            <div className="overflow-x-auto max-w-3xl mx-auto my-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role == "admin" ? "Admin" :

                                            <button onClick={() => handleAdmin(user)} className='btn'><FaUser></FaUser></button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn'><FaTrash></FaTrash></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Users;