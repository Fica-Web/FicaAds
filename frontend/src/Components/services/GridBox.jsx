import React from "react";

const seoAdvantageData = {
    heading: "Your Dubai SEO Advantage",
    type: "seo-advantage",
    subSections: [
        {
            subHeading: "🔑 Local SEO Domination",
            subDescription: [
                { content: "Google My Business profile setup/optimization", type: "list" },
                { content: "Arabic + English keyword targeting", type: "list" },
                { content: "Location pages for Dubai, Abu Dhabi, Sharjah", type: "list" }
            ]
        },
        {
            subHeading: "🛒 E-Commerce SEO Mastery",
            subDescription: [
                { content: "Product schema for higher click-through rates", type: "list" },
                { content: "Category page optimization", type: "list" },
                { content: "Cart abandonment SEO recovery", type: "list" }
            ]
        },
        {
            subHeading: "🛡️ Enterprise-Grade Security",
            subDescription: [
                { content: "Daily malware scans", type: "list" },
                { content: "Automated backups", type: "list" },
                { content: "DDoS protection", type: "list" }
            ]
        }
    ]
};

const GridBox = () => {
    return (
        <div className="w-11/12 mx-auto my-20">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-brandGreen text-center font-Singolare-Layers mb-10">
                {seoAdvantageData.heading}
            </h2>

            {/* SEO Advantage Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {seoAdvantageData.subSections.map((section, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-xl shadow-lg border-t-4 transition-all duration-300 animate-fade-up
                            hover:shadow-2xl hover:scale-105"
                        style={{ borderColor: index === 0 ? "#FDC432" : index === 1 ? "#977124" : "#163029" }}
                    >
                        <h3 className="text-xl font-bold text-gray1 font-Switzer-Medium mb-4">
                            {section.subHeading}
                        </h3>
                        <ul className="text-lg space-y-2 text-gray-600">
                            {section.subDescription.map((desc, i) => (
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