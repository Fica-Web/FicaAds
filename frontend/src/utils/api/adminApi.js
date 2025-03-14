import adminInstance from '../axios_instance/adminInstance';
import { toast } from 'react-toastify';

const adminLoginApi = async (data) => {
    try {
        const response = await adminInstance.post('/login', data);
        console.log('admin login response:', response.data)
        return response.data;
    } catch (error) {
        console.log("error during login:", error.response.data);
        return toast.error(error.response.data.error);
    }
}

const isAdminAuthenticatedApi = async () => {
    try {
        const response = await adminInstance.get('/is-admin-protected');
        return response.data;
    } catch (error) {
        console.log("error admin authentication:", error.response);
        return error.response;
    }
}

const adminLogoutApi = async () => {
    try {
        const response = await adminInstance.get('/logout');
        return response.data;
    } catch (error) {
        console.log("error admin logout:", error.response);
        return error.response;
    }
}

const fetchStatsApi = async () => {
    try {
        const response = await adminInstance.get('/stats');
        return response.data;
    } catch (error) {
        console.log("error fetching stats:", error.response);
        return error.response;
    }
}

const fetchLatestDataApi = async () => {
    try {
        const response = await adminInstance.get('/latest-data');
        return response.data;
    } catch (error) {
        console.log("error fetching latest data:", error.response);
        return error.response;
    }
}

export {
    adminLoginApi,
    isAdminAuthenticatedApi,
    adminLogoutApi,
    fetchStatsApi,
    fetchLatestDataApi,
}