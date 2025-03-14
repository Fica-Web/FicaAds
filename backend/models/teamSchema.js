import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        imageId: {
            type: String,
            unique: true,

        },
    },
    { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);

export default Team;