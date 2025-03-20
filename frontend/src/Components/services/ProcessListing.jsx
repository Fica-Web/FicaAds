import React, { useState } from "react";

const ProcessListing = ({ section }) => {
    const [selectedStep, setSelectedStep] = useState(0);

    if (!section || !section.subSections) return null; // Ensure data exists

    return (
        <div className="w-11/12 mx-auto my-28 flex flex-col md:flex-row gap-8">
            {/* Left Section: Process Steps */}
            <div className="md:w-1/3 bg-offwhite p-6 rounded-xl shadow-lg">
                <h2 className="text-3xl font-extrabold text-brandGreen mb-6 font-Switzer-Medium">{section.heading}</h2>
                <div className="space-y-4">
                    {section.subSections.map((sub, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedStep(index)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-lg font-medium font-Switzer-Medium
                ${selectedStep === index
                                    ? "bg-gradient-to-r from-brandYellow to-golden text-white shadow-lg"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                }`}
                        >
                            {sub.subHeading}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Section: Selected Content */}
            <div className="md:w-2/3 p-8 bg-white rounded-xl shadow-xl border-l-4 border-brandYellow transition-all duration-500 animate-fade-up">
                <h3 className="text-2xl font-bold text-brandGreen font-Switzer-Regular">{section.subSections[selectedStep].subHeading}</h3>
                <div className="mt-4 space-y-3">
                    {section.subSections[selectedStep].subDescription.map((desc, i) => (
                        desc.type === "content" ? (
                            <p key={i} className="text-lg text-textColor">{desc.content}</p>
                        ) : (
                            <li key={i} className="text-lg text-lightgray list-disc ml-6">{desc.content}</li>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessListing;