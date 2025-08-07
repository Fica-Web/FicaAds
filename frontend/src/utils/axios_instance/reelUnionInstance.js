import axios from 'axios';

const reelUnionInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/reel-union',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default reelUnionInstance;