import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    const {login} = useAuth()
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        // console.log(email, pass);
        login(email, pass)
        .then(res =>{
            const user = res.user;
            console.log(user);
            // prompt("logged in")
            toast.success("Logged in Successfully")
            navigate(from, {replace: true})
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name='pass'
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <input type="submit" value="Login" className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200'/>
                </form>
                <p className='my-2'>Don't have any account? <Link to='/register' className='underline'>Create new one</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
