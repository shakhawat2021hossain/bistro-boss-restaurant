import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const ContactForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        toast.success("Congratulations, Message has sent.")
        reset()
    }
    return (
        <div className='my-8'>
            <SectionTitle heading={"Contact Form"} subHeading={"Send Us Message"}></SectionTitle>
            <div className='max-w-7xl mx-auto bg-base-200 p-6 rounded-lg my-8'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="lg:flex gap-6">
                        {/* name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text"> Name*</span>
                            </div>
                            <input {...register("name")} type="text" placeholder="Name" className="rounded-md input input-bordered w-full" required/>
                        </label>
                        {/* email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email*</span>
                            </div>
                            <input {...register("email")} type="email" placeholder="Enter email" className="rounded-md input input-bordered w-full" required/>
                        </label>
                    </div>
                    {/* phone number */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Phone*</span>
                        </div>
                        <input {...register("number")} type="number" placeholder="Enter phone number" className="rounded-md input input-bordered w-full" required/>
                    </label>
                    {/* message */}
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Message*</span>
                        </div>
                        <textarea {...register("message")} className='textarea textarea-bordered rounded-md h-24' placeholder='Write message'></textarea>
                    </label>

                    <button className='btn bg-orange-600 hover:bg-slate-800 rounded-md text-white px-6 py-2'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;