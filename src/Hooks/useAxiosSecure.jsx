import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-mu-six.vercel.app"
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        // console.log("interceptors", localStorage.getItem('access-token'))
        config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status = error.response.status;
        // console.log("status code: ", status);
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;
