import jobApplicationInstance from "../axios_instance/jobApplicationInstance";
import { toast } from "react-toastify";

export const createJobApplicationApi = async (formData) => {
    const data = new FormData();

    // Append text fields
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position);

    // Append pdf file
    data.append("resume", formData.resume);

    try {
        const response = await jobApplicationInstance.post("/create", data);
        console.log("Full Response:", response); // 🔍 Debug response
        if (response.status === 201) {
            console.log("Success Response Data:", response.data);
            toast.success(response.data.message);
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error creating job applications:", error);
    }
};