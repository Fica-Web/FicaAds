import mongoose from "mongoose";
import Team from "../models/teamSchema";
import cloudinary from "../config/cloudinary.js";

const getTeam = async (req, res) => {
    try {
        const team = await Team.find();

        res.status(200).json({ team });
    } catch (error) {
        console.error('Error during fetching team:', error);
        res.status(500).json({ error: error.message });
    }
}

// Create a new team member
const createTeamMember = async (req, res) => {
    try {
        const { name, role } = req.body;

        // Validate required fields
        if (!name || !role || !req.file) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(req.file.path);

        // Create new team member entry
        const newTeamMember = new Team({
            name,
            role,
            imageUrl: imageUpload.secure_url,
            imageId: imageUpload.public_id,
        });

        await newTeamMember.save();
        return res.status(201).json({ message: "Team member added successfully", teamMember: newTeamMember });
    } catch (error) {
        console.error("Error during team member creation:", error);
        res.status(500).json({ error: error.message });
    }
};

// Update an existing team member
const updateTeamMember = async (req, res) => {
    try {
        const { id } = req.params; // Extract team member ID
        let updateData = { ...req.body };

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid team member ID format" });
        }

        // Find the existing team member
        const existingMember = await Team.findById(id);
        if (!existingMember) {
            return res.status(404).json({ error: "Team member not found" });
        }

        // If a new image is uploaded, replace the old one
        if (req.file) {
            console.log("Uploading new image...");

            // Delete old image from Cloudinary
            if (existingMember.imageId) {
                await cloudinary.uploader.destroy(existingMember.imageId);
            }

            // Upload new image
            const newImageUpload = await cloudinary.uploader.upload(req.file.path);
            updateData.imageUrl = newImageUpload.secure_url;
            updateData.imageId = newImageUpload.public_id;
        }

        // Update team member
        const updatedMember = await Team.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        res.status(200).json({ message: "Team member updated successfully", teamMember: updatedMember });
    } catch (error) {
        console.error("Error during updating team member:", error);
        res.status(500).json({ error: error.message });
    }
};

// Delete a team member
const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid team member ID format" });
        }

        // Find team member by ID
        const teamMember = await Team.findById(id);
        if (!teamMember) {
            return res.status(404).json({ error: "Team member not found" });
        }

        // Delete image from Cloudinary
        if (teamMember.imageId) {
            await cloudinary.uploader.destroy(teamMember.imageId, (err, res) => {
                if (err) {
                    console.error("Error deleting image:", err);
                } else {
                    console.log("Image deleted successfully:", res);
                }
            });
        }

        // Delete the team member from database
        await Team.findByIdAndDelete(id);

        res.status(200).json({ message: "Team member and image deleted successfully" });
    } catch (error) {
        console.error("Error during team member deletion:", error);
        res.status(500).json({ error: error.message });
    }
};

export { getTeam, createTeamMember, updateTeamMember, deleteTeamMember };
