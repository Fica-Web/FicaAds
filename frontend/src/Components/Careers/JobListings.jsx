import React, { useState } from "react";

const JobListings = () => {
  const jobs = [
    {
      title: "Junior Designer",
      type: "Full-time",
      location: "Calicut",
      description: `We are looking for a talented Junior Designer to join our dynamic team. You will be responsible for creating visually compelling and user-friendly designs for our digital platforms. You will work closely with our marketing, development, and product teams to bring our brand to life through innovative and engaging digital experiences.`,
      responsibilities: [
        "Conceptualize and design engaging digital content for websites, social media, email campaigns, and advertisements.",
        "Collaborate with cross-functional teams to ensure cohesive visual language across all digital touchpoints.",
        "Develop wireframes, prototypes, and high-fidelity mockups for new website features and enhancements.",
        "Maintain and update design assets, ensuring consistency with our brand guidelines.",
        "Conduct user research and usability testing to inform design decisions.",
      ],
      qualifications: [
        "Proven experience as a Digital Designer or in a similar role.",
        "Bachelor's degree in Graphic Design, Digital Media, or a related field.",
        "Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, XD).",
      ],
    },
    { title: "Senior Strategist", type: "Full-time", location: "Calicut",description: `We are looking for a talented Junior Designer to join our dynamic team. You will be responsible for creating visually compelling and user-friendly designs for our digital platforms. You will work closely with our marketing, development, and product teams to bring our brand to life through innovative and engaging digital experiences.`,
        responsibilities: [
          "Conceptualize and design engaging digital content for websites, social media, email campaigns, and advertisements.",
          "Collaborate with cross-functional teams to ensure cohesive visual language across all digital touchpoints.",
          "Develop wireframes, prototypes, and high-fidelity mockups for new website features and enhancements.",
          "Maintain and update design assets, ensuring consistency with our brand guidelines.",
          "Conduct user research and usability testing to inform design decisions.",
        ],
        qualifications: [
          "Proven experience as a Digital Designer or in a similar role.",
          "Bachelor's degree in Graphic Design, Digital Media, or a related field.",
          "Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, XD).",
        ], },
    { title: "Senior Designer", type: "Full-time", location: "Calicut",description: `We are looking for a talented Junior Designer to join our dynamic team. You will be responsible for creating visually compelling and user-friendly designs for our digital platforms. You will work closely with our marketing, development, and product teams to bring our brand to life through innovative and engaging digital experiences.`,
        responsibilities: [
          "Conceptualize and design engaging digital content for websites, social media, email campaigns, and advertisements.",
          "Collaborate with cross-functional teams to ensure cohesive visual language across all digital touchpoints.",
          "Develop wireframes, prototypes, and high-fidelity mockups for new website features and enhancements.",
          "Maintain and update design assets, ensuring consistency with our brand guidelines.",
          "Conduct user research and usability testing to inform design decisions.",
        ],
        qualifications: [
          "Proven experience as a Digital Designer or in a similar role.",
          "Bachelor's degree in Graphic Design, Digital Media, or a related field.",
          "Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, XD).",
        ], },
    { title: "Design Director", type: "Full-time", location: "Calicut",description: `We are looking for a talented Junior Designer to join our dynamic team. You will be responsible for creating visually compelling and user-friendly designs for our digital platforms. You will work closely with our marketing, development, and product teams to bring our brand to life through innovative and engaging digital experiences.`,
        responsibilities: [
          "Conceptualize and design engaging digital content for websites, social media, email campaigns, and advertisements.",
          "Collaborate with cross-functional teams to ensure cohesive visual language across all digital touchpoints.",
          "Develop wireframes, prototypes, and high-fidelity mockups for new website features and enhancements.",
          "Maintain and update design assets, ensuring consistency with our brand guidelines.",
          "Conduct user research and usability testing to inform design decisions.",
        ],
        qualifications: [
          "Proven experience as a Digital Designer or in a similar role.",
          "Bachelor's degree in Graphic Design, Digital Media, or a related field.",
          "Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, XD).",
        ], },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="relative">
      {/* Job Listings */}
      <div className="mt-20  w-11/12 mx-auto py-8 px-4">
        {jobs.map((job, index) => (
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
        <div className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg p-6 overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setSelectedJob(null)}
          >
            ×
          </button>
          <h2 className="text-xl font-Switzer-Medium mb-4">{selectedJob.title}</h2>
          <p className="text-sm  mb-4">
            {selectedJob.type} ({selectedJob.location})
          </p>
          <p className=" mb-6">{selectedJob.description}</p>
          <h3 className="text-lg font-Switzer-Medium mb-2">Key Responsibilities</h3>
          <ul className="list-disc list-inside mb-6">
            {selectedJob.responsibilities?.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-Switzer-Medium mb-2">Qualifications</h3>
          <ul className="list-disc list-inside mb-6">
            {selectedJob.qualifications?.map((item, index) => (
              <li key={index} className="">
                {item}
              </li>
            ))}
          </ul>
          <button className='bg-gray1 font-Switzer-Medium text-xs mt-4 rounded-xl h-8 md:h-10 p-2 px-4 text-white'
            onClick={() =>
              (window.location.href = "mailto:hr@ficaads.com?subject=Application for " + selectedJob.title)
            }
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default JobListings;
