import { toast } from 'react-toastify'
import reelUnionInstance from '../axios_instance/reelUnionInstance';

export const sendReelUnionRequest = async (data) => {
    try {
        const response = await reelUnionInstance.post('/create', data);
        console.log('Reel Union onboarding response:', response.data);
        toast.success("Your details have been successfully submitted to The Reel Union!");
        return response.data;
    } catch (error) {
        console.error("Error during Reel Union onboarding:", error?.response?.data);
        toast.error(error?.response?.data?.error || "An error occurred while submitting your details. Please try again.");
        return error?.response?.data || { error: 'An error occurred during the request' };
    }
}