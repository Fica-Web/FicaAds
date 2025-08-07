import reelUnionInstance from '../axios_instance/reelUnionInstance';

export const sendReelUnionRequest = async (data) => {
    try {
        const response = await reelUnionInstance.post('/create', data);
        console.log('Reel Union onboarding response:', response.data);
        return response.data;
    } catch (error) {
        console.error("Error during Reel Union onboarding:", error?.response?.data);
        return error?.response?.data || { error: 'An error occurred during the request' };
    }
}