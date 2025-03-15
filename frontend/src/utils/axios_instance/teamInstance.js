import axios from 'axios';

const teamInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/team',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000
})

export default teamInstance;