import careerInstance from "../axios_instance/careerInstance";
import { toast } from "react-toastify"; // Ensure toast notifications are used

// Get all jobs
const getJobsApi = async () => {
    try {
        const response = await careerInstance.get("/");
        console.log("Get careers response:", response);
        return response.data;
    } catch (error) {
        console.log("Error fetching jobs:", error.response?.data);
    }
};

// Create a new job
const createJobApi = async (data) => {
    try {
        const response = await careerInstance.post("/", data);

        if (response.status === 201) {
            console.log("Success Response Data:", response.data);
            toast.success(response.data.message);
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error creating job:", error);
        toast.error("Failed to create job");
    }
};

// Update an existing job
const updateJobApi = async (id, data) => {
    try {
        const response = await careerInstance.put(`/${id}`, data);

        if (response.status === 200) {
            toast.success(response.data.message);
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error updating job:", error);
        toast.error("Failed to update job");
    }
};

// Delete a job
const deleteJobApi = async (id) => {
    try {
        const response = await careerInstance.delete(`/${id}`);

        if (response.status === 200) {
            toast.success(response.data.message);
            console.log("job deleted successfully");
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error deleting job:", error);
        toast.error("Failed to delete job");
    }
};

export { getJobsApi, createJobApi, updateJobApi, deleteJobApi };