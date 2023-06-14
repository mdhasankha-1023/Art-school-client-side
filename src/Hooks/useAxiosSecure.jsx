import axios from "axios";
import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    // const navigate = useNavigate();

    axiosSecure.interceptors.request.use((config) => {

        const token = localStorage.getItem('jwt_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    });

    axiosSecure.interceptors.response.use(
        (res) => res,
        async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut();
                // navigate('/login');
            }
            return Promise.reject(error);
        });




    return [axiosSecure]    
};

export default useAxiosSecure;