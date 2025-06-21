import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL: 'http://ec2-52-66-222-172.ap-south-1.compute.amazonaws.com:8080/bloghorizon',
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;
