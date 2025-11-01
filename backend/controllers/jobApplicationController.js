import JobApplication from "../models/jobApplicationSchema.js";

export const createJobApplication = async (req, res) => {
    try {
        const formData = req.body;
        console.log('formData', formData, req.file);
        const jobApplication = await JobApplication.create(formData);
        res.status(201).json(jobApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};