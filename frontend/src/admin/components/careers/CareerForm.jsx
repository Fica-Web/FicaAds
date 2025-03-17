import React, { useState, useEffect } from "react";
import { createJobApi, updateJobApi } from "../../../utils/api/careerApi";
import LoadingButton from "../reusable/LoadingButton";

const employmentTypes = ["Full-time", "Part-time", "Internship", "Contract"];

const CareerForm = ({ editingJob, onSuccess, onClose }) => {
    const [formData, setFormData] = useState({
        title: "",
        employmentType: "",
        location: "",
        description: "",
        responsibilities: [],
        qualifications: [],
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingJob) {
            setFormData({
                title: editingJob.title || "",
                employmentType: editingJob.employmentType || "",
                location: editingJob.location || "",
                description: editingJob.description || "",
                responsibilities: editingJob.responsibilities || [],
                qualifications: editingJob.qualifications || [],
            });
        }
    }, [editingJob]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleListChange = (index, value, field) => {
        const updatedList = [...formData[field]];
        updatedList[index] = value;
        setFormData({ ...formData, [field]: updatedList });
    };

    const addListItem = (field) => {
        setFormData({ ...formData, [field]: [...formData[field], ""] });
    };

    const removeListItem = (index, field) => {
        const updatedList = [...formData[field]];
        updatedList.splice(index, 1);
        setFormData({ ...formData, [field]: updatedList });
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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
                {editingJob ? "Edit Job" : "Add Job"}
            </h3>

            {/* Title */}
            <div className="mb-4">
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

            {/* Employment Type */}
            <div className="mb-4">
                <label className="block font-medium">Employment Type</label>
                <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                >
                    <option value="">Select Type</option>
                    {employmentTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Location */}
            <div className="mb-4">
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

            {/* Description */}
            <div className="mb-4">
                <label className="block font-medium">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded h-24"
                    required
                />
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
                <label className="block font-medium">Responsibilities</label>
                {formData.responsibilities.map((res, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                            type="text"
                            value={res}
                            onChange={(e) => handleListChange(index, e.target.value, "responsibilities")}
                            className="w-full border p-2 rounded"
                        />
                        <button
                            type="button"
                            onClick={() => removeListItem(index, "responsibilities")}
                            className="border hover:border-2 border-red-500 text-white px-2 py-1 rounded"
                        >
                            ❌
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => addListItem("responsibilities")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    + Add Responsibility
                </button>
            </div>

            {/* Qualifications */}
            <div className="mb-4">
                <label className="block font-medium">Qualifications</label>
                {formData.qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                            type="text"
                            value={qual}
                            onChange={(e) => handleListChange(index, e.target.value, "qualifications")}
                            className="w-full border p-2 rounded"
                        />
                        <button
                            type="button"
                            onClick={() => removeListItem(index, "qualifications")}
                            className="border hover:border-2 border-red-500 text-white px-2 py-1 rounded"
                        >
                            ❌
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => addListItem("qualifications")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    + Add Qualification
                </button>
            </div>

            {/* Submit Button */}
            <LoadingButton
                loading={loading}
                text={editingJob ? "Update Job" : "Add Job"}
                loadingText={editingJob ? "Updating..." : "Submitting..."}
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded mt-4"
            />
        </form>
    );
};

export default CareerForm;