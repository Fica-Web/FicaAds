import React from "react";

const ContentListing = ({ section }) => {
    if (!section || !section.heading) return null; // Ensure section exists

    return (
        <section className="w-11/12 md:w-3/4 mx-auto md:my-20 my-12 text-center md:p-8 transition-all duration-300">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-Switzer-Regular mb-4 text-black leading-tight ">
                {section.heading}
            </h2>

            {/* Optional Description */}
            {section.description && (
                <p className="lg:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
                    {section.description}
                </p>
            )}
        </section>
    );
};

export default ContentListing;