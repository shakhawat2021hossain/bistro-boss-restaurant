import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import axios from 'axios';
import toast from 'react-hot-toast';

const imgKey = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const imgAPI = `https://api.imgbb.com/1/upload?key=${imgKey}`;

const UpdateItem = () => {
    const navigate = useNavigate()

    const { id } = useParams();
    const [menuItem, setMenuItem] = useState({});

    useEffect(() => {
        fetch(`https://bistro-boss-server-mu-six.vercel.app/menu/${id}`)
            .then(res => res.json())
            .then(data => setMenuItem(data))
            .catch(err => console.log(err))
    }, [])
    // console.log(menuItem);
    const { name, category, price, recipe, _id } = menuItem

    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data.image[0] }
        // console.log(imgFile);
        const result = await axios.post(imgAPI, imgFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        // console.log(result.data);
        if (result.data.success) {
            const menuData = {
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                category: data.category,
                image: result.data.data.display_url
            }
            const res = await axiosSecure.patch(`/menu/${_id}`, menuData)
            if (res.data.modifiedCount) {
                toast.success("Menu Updated Successfully")
                reset()
                navigate('/dashboard/manage-items')

            }
        }
    }

    return (
        <div>
            <SectionTitle heading={"Update Menu"} subHeading={"Refresh"}></SectionTitle>
            <div className='max-w-5xl mx-auto bg-base-200 p-6 rounded-lg my-8'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name")} type="text" defaultValue={name} placeholder="Recipe Name" className="rounded-sm input input-bordered w-full" />
                    </label>

                    <div className='flex gap-6'>
                        {/* Category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")} className="rounded-sm select select-bordered w-full" defaultValue={category}>
                                <option disabled value="default">Select Food Category</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">drink</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                            </select>

                        </label>

                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="text" defaultValue={price} placeholder="Price" className="rounded-sm input input-bordered w-full" />
                        </label>

                    </div>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe")} defaultValue={recipe} className='textarea textarea-bordered rounded-sm h-24' placeholder='Write details about recipe'></textarea>
                    </label>

                    <input {...register("image")} type="file" className="rounded-sm file-input w-full mb-3" /> <br />

                    <button className='btn bg-orange-600 hover:bg-slate-800 rounded-sm text-white px-6 py-2'>Update Menu Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;