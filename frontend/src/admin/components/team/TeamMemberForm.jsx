import React, { useState } from "react";
import LoadingButton from "../reusable/LoadingButton";

const TeamMemberForm = ({ formData, setFormData, loading, handleSubmit, editingMemberId }) => {
    const [errors, setErrors] = useState({});
    const [previewImage, setPreviewImage] = useState(formData.imageUrl || ""); // For image preview

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.role.trim()) newErrors.role = "Role is required";
        if (!editingMemberId && !formData.image) newErrors.image = "Image is required"; // Image required only for new entries

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image" && files.length > 0) {
            const file = files[0];

            // Validate image size (limit: 2MB)
            if (file.size > 2 * 1024 * 1024) {
                setErrors({ ...errors, image: "Image size must be less than 2MB" });
                return;
            }

            setPreviewImage(URL.createObjectURL(file)); // Show preview
            setFormData({ ...formData, image: file });
            setErrors({ ...errors, image: "" });
        } else {
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) handleSubmit(e);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label className="block font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-3">
                <label className="block font-medium">Role</label>
                <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                />
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>

            <div className="mb-3">
                <label className="block font-medium">Image</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

                {/* Show preview if an image is selected */}
                {previewImage && (
                    <div className="mt-2">
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="max-h-40 rounded-lg border"
                        />
                    </div>
                )}
            </div>

            <LoadingButton
                loading={loading}
                text={editingMemberId ? "Update Member" : "Submit Member"}
                loadingText={editingMemberId ? "Updating..." : "Submitting..."}
                type="submit"
            />
        </form>
    );
};

export default TeamMemberForm;
