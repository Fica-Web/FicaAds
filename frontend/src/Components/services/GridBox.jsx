import React from "react";

const GridBox = ({ section }) => {
    if (!section || !section.subSections) return null; // Ensure data exists

    return (
        <div className="w-11/12 mx-auto my-28">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-brandGreen text-center font-Singolare-Layers mb-6">
                {section.heading}
            </h2>

            {/* Optional Description */}
            {section.description && (
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
                    {section.description}
                </p>
            )}

            {/* SEO Advantage Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.subSections.map((sub, index) => (
                    <div
                        key={index}
                        className="relative p-6 bg-white rounded-2xl shadow-lg border-t-4 transition-all duration-300 transform 
                            hover:shadow-2xl hover:scale-105 hover:border-transparent group"
                        style={{ 
                            borderColor: index === 0 ? "#FDC432" : index === 1 ? "#977124" : "#163029",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,245,245,1))"
                        }}
                    >
                        {/* Floating Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* Icon */}
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-brandYellow text-white text-lg font-bold px-3 py-1 rounded-bl-xl">
                            {index + 1}
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 font-Switzer-Medium mb-4">
                            {sub.subHeading}
                        </h3>

                        <ul className="text-lg space-y-3 text-gray-700">
                            {sub.subDescription.map((desc, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <span className="text-brandYellow text-xl">✔</span>
                                    <span className="font-medium">{desc.content}</span>
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