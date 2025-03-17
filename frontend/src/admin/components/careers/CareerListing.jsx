import React, { useEffect, useState } from "react";
import { getJobsApi, deleteJobApi } from "../../../utils/api/careerApi";
import { FaRegEye } from "react-icons/fa";
import Modal from "../reusable/Modal";
import CareerForm from "./CareerForm";
import JobDetailsModal from "./JobDetailsModal";

const AdminCareerList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await getJobsApi();
            setJobs(response.careers);
        } catch (error) {
            console.error("Failed to fetch jobs:", error);
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this job?")) return;
        try {
            await deleteJobApi(id);
            setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    const openModal = (job = null) => {
        setEditingJob(job);
        setIsModalOpen(true);
    };

    const openDetailsModal = (job) => {
        setSelectedJob(job);
        setIsDetailsOpen(true);
    };

    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Career Listings</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                    + Add Job
                </button>
            </div>

            {loading ? (
                <p className="text-center">Loading jobs...</p>
            ) : jobs.length === 0 ? (
                <p className="text-center text-gray-500">No jobs found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => (
                        <div key={job._id} className="bg-white shadow-lg rounded-xl p-6">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">{job.title}</h3>
                                <button
                                    onClick={() => openDetailsModal(job)}
                                    className="bg-cyan-400 hover:bg-cyan-500 text-white px-3 py-1 rounded"
                                >
                                    <FaRegEye />
                                </button>
                            </div>
                            <p className="text-gray-500">{job.employmentType} - {job.location}</p>
                            <p className="mt-2 text-sm text-gray-700">
                                {job.description.slice(0, 100)}...
                            </p>
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() => openModal(job)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(job._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Job Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CareerForm
                    editingJob={editingJob}
                    onSuccess={fetchJobs}
                    onClose={() => setIsModalOpen(false)}
                />
            </Modal>

            {/* Job Details Modal */}
            <Modal isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)}>
                <JobDetailsModal job={selectedJob} />
            </Modal>
        </div>
    );
};

export default AdminCareerList;