import React from "react";

const JobDetailsModal = ({ job }) => {
    if (!job) return null;

    return (
        <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-500">{job.employmentType} - {job.location}</p>

            <h3 className="text-lg font-semibold mt-4">Description</h3>
            <p className="text-gray-700">{job.description}</p>

            {job.responsibilities && (
                <>
                    <h3 className="text-lg font-semibold mt-4">Responsibilities</h3>
                    <p className="text-gray-700">{job.responsibilities}</p>
                </>
            )}

            {job.qualifications && (
                <>
                    <h3 className="text-lg font-semibold mt-4">Qualifications</h3>
                    <p className="text-gray-700">{job.qualifications}</p>
                </>
            )}
        </div>
    );
};

export default JobDetailsModal;