import Career from "../models/careerSchema.js";

// Get all job listings
export const getJob = async (req, res) => {
    try {
        const careers = await Career.find();
        
        res.status(200).json({ success: true, careers });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ success: false, message: "Failed to fetch job listings." });
    }
};

// Add a new job
export const addJob = async (req, res) => {
    try {
        const careerData = req.body;

        const newCareer = await Career.create(careerData);

        res.status(201).json({ success: true, message: "Job added successfully!", job: newCareer });
    } catch (error) {
        console.error("Error adding job:", error);
        res.status(400).json({ success: false, message: "Failed to add job.", error });
    }
};

// Update a job listing
export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Check if job exists
        const existingJob = await Career.findById(id);
        if (!existingJob) {
            return res.status(404).json({ success: false, message: "Job not found." });
        }

        // Update the job
        const updatedJob = await Career.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        res.status(200).json({ success: true, message: "Job updated successfully!", job: updatedJob });
    } catch (error) {
        console.error("Error updating job:", error.message);
        res.status(500).json({ success: false, message: "Failed to update job.", error: error.message });
    }
};

// Delete a job listing
export const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if job exists
        const existingJob = await Career.findById(id);
        if (!existingJob) {
            return res.status(404).json({ success: false, message: "Job not found." });
        }

        // Delete the job
        await Career.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Job deleted successfully!" });
    } catch (error) {
        console.error("Error deleting job:", error.message);
        res.status(500).json({ success: false, message: "Failed to delete job.", error: error.message });
    }
};