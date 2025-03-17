import React, { useState, useEffect } from "react";
import { createJobApi, updateJobApi } from "../../../utils/api/careerApi";
import LoadingButton from "../reusable/LoadingButton";

const CareerForm = ({ editingJob, onSuccess, onClose }) => {
    const [formData, setFormData] = useState({
        title: "",
        employmentType: "",
        location: "",
        description: "",
        responsibilities: "",
        qualifications: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingJob) {
            setFormData({
                title: editingJob.title,
                employmentType: editingJob.employmentType,
                location: editingJob.location,
                description: editingJob.description,
                responsibilities: editingJob.responsibilities,
                qualifications: editingJob.qualifications,
            });
        }
    }, [editingJob]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingJob) {
                await updateJobApi(editingJob._id, formData);
            } else {
                await createJobApi(formData);
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error("Error submitting job:", error);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4">
                {editingJob ? "Edit Job" : "Add Job"}
            </h3>

            <div className="mb-3">
                <label className="block font-medium">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block font-medium">Employment Type</label>
                <input
                    type="text"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block font-medium">Location</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block font-medium">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="block font-medium">Responsibilities</label>
                <textarea
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                />
            </div>
            <div className="mb-3">
                <label className="block font-medium">Qualifications</label>
                <textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                />
            </div>

            <LoadingButton
                loading={loading}
                text={editingJob ? "Update Job" : "Add Job"}
                loadingText={editingJob ? "Updating..." : "Submitting..."}
                type="submit"
            />
        </form>
    );
};

export default CareerForm;