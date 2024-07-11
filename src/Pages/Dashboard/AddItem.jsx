import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';


const imgKey = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const imgAPI = `https://api.imgbb.com/1/upload?key=${imgKey}`;
const AddItem = () => {
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data.image[0] }
        console.log(imgFile);
        const result = await axios.post(imgAPI, imgFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(result.data);
        if (result.data.success) {
            const menuData = {
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                category: data.category,
                image: result.data.data.display_url
            }
            const res = await axiosSecure.post('/menu', menuData)
            if (res.data.insertedId) {
                toast.success("Menu added Successfully")
            }
        }
        reset()

    }

    return (
        <div className='my-8'>
            <SectionTitle heading={"Add an Item"} subHeading={"Whats new?"} />
            <div className='max-w-5xl mx-auto bg-base-200 p-6 rounded-lg my-8'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Recipe Name" className="rounded-sm input input-bordered w-full" />
                    </label>

                    <div className='flex gap-6'>
                        {/* Category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category")} className="rounded-sm select select-bordered w-full" defaultValue="default">
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
                            <input {...register("price")} type="text" placeholder="Price" className="rounded-sm input input-bordered w-full" />
                        </label>

                    </div>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe")} className='textarea textarea-bordered rounded-sm h-24' placeholder='Write details about recipe'></textarea>
                    </label>

                    <input {...register("image")} type="file" className="rounded-sm file-input w-full mb-3" /> <br />

                    <button className='btn bg-orange-600 hover:bg-slate-800 rounded-sm text-white px-6 py-2'>Submit <FaUtensils></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItem;