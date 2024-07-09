import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useMenu from '../../Hooks/useMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
const ManageItems = () => {
    const [menu, loading, refetch] = useMenu()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // const { data: menu = [], refetch } = useQuery({
    //     queryKey: ["menu"],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get("/menu")
    //         // console.log(res.data);
    //         return res.data
    //     }
    // })

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this from menu?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            toast.success("product deleted")
                            refetch()

                        }

                    })
                    .catch(err => console.log(err))


            }
        });
    }


    return (
        <div className='my-8'>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up"></SectionTitle>
            <div className='max-w-3xl mx-auto'>
                <div className="overflow-x-auto my-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/update-item/${item._id}`}>
                                            <button className='btn'><FaEdit></FaEdit></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className='btn'><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;