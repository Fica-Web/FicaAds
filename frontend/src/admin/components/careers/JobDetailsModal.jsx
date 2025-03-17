import React from "react";

const JobDetailsModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div className="p-6 max-w-lg bg-white rounded-lg shadow-lg relative">
            
            {/* Job Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
            
            {/* Employment Type & Location */}
            <div className="flex items-center gap-3 text-gray-600 text-sm">
                <span className="font-semibold">🛠 {job.employmentType}</span>
                <span>📍 {job.location}</span>
            </div>

            {/* Description */}
            <h3 className="text-lg font-semibold mt-6">Job Description</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
                <>
                    <h3 className="text-lg font-semibold mt-6">📌 Responsibilities</h3>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}

            {/* Qualifications */}
            {job.qualifications && job.qualifications.length > 0 && (
                <>
                    <h3 className="text-lg font-semibold mt-6">🎓 Qualifications</h3>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                        {job.qualifications.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default JobDetailsModal;