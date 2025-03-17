import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Job title
    employmentType: { type: String, required: true }, // e.g., Full-time, Part-time
    location: { type: String, required: true }, // e.g., Calicut, Remote
    description: { type: String, required: true }, // Job overview
    responsibilities: { type: [String], required: true }, // List of responsibilities
    qualifications: { type: [String], required: true }, // List of qualifications
    createdAt: { type: Date, default: Date.now } // Timestamp
});

const Career = mongoose.model("Career", careerSchema);

export default Career;