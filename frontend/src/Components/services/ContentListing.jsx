import React from "react";

const ContentListing = ({ section }) => {
    if (!section || !section.heading) return null; // Ensure section exists

    return (
        <section className="w-11/12 md:w-3/4 mx-auto my-20 text-center p-8 transition-all duration-300">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-brandGreen font-Switzer-Medium mb-4">
                {section.heading}
            </h2>

            {/* Optional Description */}
            {section.description && (
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                    {section.description}
                </p>
            )}
        </section>
    );
};

export default ContentListing;