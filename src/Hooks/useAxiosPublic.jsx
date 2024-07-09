import axios from 'axios';

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: "https://bistro-boss-server-mu-six.vercel.app"
    })
    return axiosPublic;
};

export default useAxiosPublic;