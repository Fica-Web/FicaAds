import React, { useState } from "react";

const seoProcessData = {
    heading: "Our SEO Driven Web Design Process",
    type: "process",
    subSections: [
        {
            subHeading: "1: Discovery & Keyword Blueprinting",
            subDescription: [
                { content: "We start by reverse-engineering your competitors. Using tools like Ahrefs and SEMrush, we identify:", type: "content" },
                { content: "High-value keywords your customers actually search" },
                { content: "Content gaps in your niche" },
                { content: "Technical weaknesses hurting your rankings" }
            ]
        },
        {
            subHeading: "2: UX-Centric Wireframing",
            subDescription: [
                { content: "Every pixel is planned for SEO + conversions:", type: "content" },
                { content: "Strategic placement of keywords in headers, menus, and CTAs" },
                { content: "Mobile-responsive layouts that Google loves" },
                { content: "Clear pathways to boost engagement (reduce bounce rates)" }
            ]
        },
        {
            subHeading: "3: Development with SEO Hardwired",
            subDescription: [
                { content: "Our coders and SEO specialists work side-by-side to:", type: "content" },
                { content: "Optimize every image (compressed + alt-text tagged)" },
                { content: "Structure URLs for readability (/dubai-seo-agency vs /page123)" },
                { content: "Implement schema markup for rich snippets" },
                { content: "Ensure 100% crawlability with XML sitemaps" }
            ]
        },
        {
            subHeading: "4: Pre-Launch SEO Stress Test",
            subDescription: [
                { content: "Before going live, we run 50+ checks:", type: "content" },
                { content: "Mobile-friendliness (Google’s #1 ranking factor)" },
                { content: "Broken link scans" },
                { content: "SSL security validation" },
                { content: "Page speed optimization (90+ Google PageSpeed score)" }
            ]
        },
        {
            subHeading: "5: Launch & Rank Tracking",
            subDescription: [
                { content: "We don’t disappear after delivery. For 30 days post-launch, we:", type: "content" },
                { content: "Monitor keyword rankings daily" },
                { content: "Fix crawl errors" },
                { content: "Adjust meta tags based on early traffic data" }
            ]
        }
    ]
};

const ProcessListing = () => {
    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className="w-11/12 mx-auto my-20 flex flex-col md:flex-row gap-8">
            {/* Left Section: Process Steps */}
            <div className="md:w-1/3 bg-offwhite p-6 rounded-xl shadow-lg">
                <h2 className="text-3xl font-extrabold text-brandGreen mb-6 font-Switzer-Medium">{seoProcessData.heading}</h2>
                <div className="space-y-4">
                    {seoProcessData.subSections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedStep(index)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-lg font-medium font-Switzer-Medium
                ${selectedStep === index
                                    ? "bg-gradient-to-r from-brandYellow to-golden text-white shadow-lg"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                }`}
                        >
                            {section.subHeading}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Section: Selected Content */}
            <div className="md:w-2/3 p-8 bg-white rounded-xl shadow-xl border-l-4 border-brandYellow transition-all duration-500 animate-fade-up">
                <h3 className="text-2xl font-bold text-brandGreen font-Switzer-Regular">{seoProcessData.subSections[selectedStep].subHeading}</h3>
                <div className="mt-4 space-y-3">
                    {seoProcessData.subSections[selectedStep].subDescription.map((desc, i) => (
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