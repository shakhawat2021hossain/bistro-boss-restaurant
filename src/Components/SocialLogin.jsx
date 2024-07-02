import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const {googleSignin} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handleGoogleSignin = () =>{
        googleSignin()
        .then(res =>{
            // console.log(res.user);
            const user = res.user;
            const userData = {name: user.displayName, email: user.email, image: user.photoURL}
            axiosPublic.post("/users", userData)
            .then(res => {
                console.log(res.data);
                toast.success("Logged in Successfully")
                navigate('/')
            })
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick={handleGoogleSignin} className="btn btn-outline w-full hover:bg-slate-950 transition duration-200"><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;