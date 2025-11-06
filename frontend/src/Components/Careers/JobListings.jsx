import React, { useState, useEffect } from "react";
import { getJobsApi } from "../../utils/api/careerApi";
import JobApplicationForm from "./JobApplicationForm";

const JobListings = () => {
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getJobsApi();
      setJobs(response.careers)
    }

    fetchPosts()
  }, [])

  const handleApply = (e) => {
    e.preventDefault()
    alert('Application sent successfully')
    // window.location.href = `mailto:hr@ficaads.com?subject=Application for ${selectedJob.title}`
  }

  return (
    <div className="relative">
      {/* Job Listings */}
      <div className="mt-20  w-11/12 mx-auto py-8 px-4">
        {jobs?.map((job, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b py-4"
          >
            <div className=" font-Switzer-Medium text-2xl">{job.title}</div>
            <div className="text-sm font-Switzer-Medium mt-2 lg:mt-0">
              {job.type} ({job.location})
            </div>
            <button
              className="text-gray3 text-sm mt-2 lg:mt-0"
              onClick={() => setSelectedJob(job)}
            >
              View role
            </button>
          </div>
        ))}
      </div>

      {/* Job Details Panel */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="relative bg-white shadow-2xl rounded-lg p-6 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelectedJob(null)}
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="lg:flex lg:flex-row gap-3">
              <div className="lg:w-1/2 w-full">
                {/* Job Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedJob.title}
                </h2>

                {/* Employment Type & Location */}
                <p className="text-sm text-gray-600 font-medium mb-4">
                  🏢 {selectedJob.employmentType} | 📍 {selectedJob.location}
                </p>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedJob.description}
                </p>

                {/* Responsibilities */}
                {selectedJob.responsibilities?.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      📌 Key Responsibilities
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index} className="pl-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Qualifications */}
                {selectedJob.qualifications?.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      🎓 Qualifications
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      {selectedJob.qualifications.map((item, index) => (
                        <li key={index} className="pl-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}  
              </div>

              {/* Apply Form */}
              <div className="lg:w-1/2 w-full">
                <JobApplicationForm position={selectedJob.title} />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default JobListings;
