import teamInstance from "../axios_instance/teamInstance";
import { toast } from "react-toastify"; // Ensure toast notifications are used

// Get all team members
const getTeamApi = async () => {
    try {
        const response = await teamInstance.get("/");
        console.log("Get team response:", response);
        return response.data;
    } catch (error) {
        console.log("Error fetching team members:", error.response?.data);
    }
};

// Create a new team member
const createTeamMemberApi = async (formData) => {
    const data = new FormData();

    // Append text fields
    data.append("name", formData.name);
    data.append("role", formData.role);

    // Append image file
    data.append("image", formData.image);

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {
        const response = await teamInstance.post("/", data, config);
        console.log("Full Response:", response);

        if (response.status === 201) {
            console.log("Success Response Data:", response.data);
            toast.success(response.data.message);
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error creating team member:", error);
        toast.error("Failed to create team member");
    }
};

// Update an existing team member
const updateTeamMemberApi = async (id, formData) => {
    const data = new FormData();

    // Append text fields
    data.append("name", formData.name);
    data.append("role", formData.role);

    // Append image file only if a new image is provided
    if (formData.image) {
        data.append("image", formData.image);
    }

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {
        const response = await teamInstance.put(`/${id}`, data, config);
        console.log("Update Response:", response);

        if (response.status === 200) {
            toast.success(response.data.message);
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error updating team member:", error);
        toast.error("Failed to update team member");
    }
};

// Delete a team member
const deleteTeamMemberApi = async (id) => {
    try {
        const response = await teamInstance.delete(`/${id}`);

        if (response.status === 200) {
            toast.success(response.data.message);
            console.log("Team member deleted successfully");
            return response.data;
        } else {
            console.log("Unexpected Response:", response);
        }
    } catch (error) {
        console.error("Error deleting team member:", error);
        toast.error("Failed to delete team member");
    }
};

export { getTeamApi, createTeamMemberApi, updateTeamMemberApi, deleteTeamMemberApi };