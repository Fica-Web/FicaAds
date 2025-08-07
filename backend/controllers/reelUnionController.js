import axios from 'axios';

export const CreatorOnboardingForm = async (req, res) => {
    try {
        const formData = req.body;
        console.log('Sending data to Google Apps Script...', formData);

        const response = await axios.post(
            process.env.REEL_UNION_API_URL,
            formData,
            { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.status === 200 && response.data?.success) {
            return res.status(200).json({
                message: 'Form submitted successfully via Apps Script',
                data: response.data,
            });
        } else {
            console.warn('Apps Script responded with non-success:', response.data);
            return res.status(502).json({
                error: 'Google Apps Script responded with an error',
                details: response.data,
            });
        }
    } catch (error) {
        console.error('Error sending to Google Apps Script:', error?.response?.data || error.message);
        return res.status(500).json({
            error: 'Failed to send to Google Sheet',
            details: error?.response?.data || error.message,
        });
    }
};