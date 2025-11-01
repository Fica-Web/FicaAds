import axios from 'axios';

const jobApplicationInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/job-applications',
    withCredentials: true,
})

export default jobApplicationInstance;