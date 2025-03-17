import axios from "axios";

const careerInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/careers',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default careerInstance;