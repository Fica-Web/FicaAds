import React from "react";

const GridBox = ({ section }) => {
    if (!section || !section.subSections) return null; // Ensure data exists

    return (
        <div className="w-11/12 mx-auto my-20">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-brandGreen text-center font-Singolare-Layers mb-10">
                {section.heading}
            </h2>

            {/* SEO Advantage Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.subSections.map((sub, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-xl shadow-lg border-t-4 transition-all duration-300 animate-fade-up
                            hover:shadow-2xl hover:scale-105"
                        style={{ borderColor: index === 0 ? "#FDC432" : index === 1 ? "#977124" : "#163029" }}
                    >
                        <h3 className="text-xl font-bold text-gray1 font-Switzer-Medium mb-4">
                            {sub.subHeading}
                        </h3>
                        <ul className="text-lg space-y-2 text-gray-600">
                            {sub.subDescription.map((desc, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                    <span className="text-brandYellow font-semibold">✔</span>
                                    <span>{desc.content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridBox;