import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        // resume: {
        //     type: String,
        //     // required: true,
        // },
        // resumeId: {
        //     type: String,
        //     unique: true,
        //     required: true,
        // },
    },
    { timestamps: true }
);

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

export default JobApplication;