import React, { useState } from 'react';
import { ImPlus } from "react-icons/im";

const SingleService = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const description =
        "Gathering and analyzing data about a target audience's preferences, behaviors, and needs to inform design and marketing decisions. This capability enables us to understand market trends, identify opportunities, and tailor strategies to meet consumer demands effectively.";

    // Split description into two parts
    const words = service.details.split(' ');
    const visibleWords = words.slice(0, 20).join(' ') + '...';
    const hiddenWords = words.slice(20).join(' ');

    return (
        <div className="flex gap-5">
            {/* Icon Section */}
            <div>
                <ImPlus
                    className={`text-3xl mt-1 font-bold transform transition-transform duration-500 cursor-pointer ${
                        isExpanded ? 'rotate-45 text-brandYellow' : 'rotate-0 text-primary'
                    }`}
                    onClick={handleToggleDescription}
                />
            </div>

            {/* Content Section */}
            <div>
                <h3 className="text-4xl font-serif font-bold uppercase tracking-widest">
                    { service.title }
                </h3>
                <div
                    className={`transition-all duration-500 my-3 ${
                        isExpanded ? ' opacity-100' : ' opacity-90'
                    } overflow-hidden`}
                >
                    <p>
                        {!isExpanded && visibleWords}
                        {isExpanded && (
                            <span className="opacity-100 transition-opacity duration-500">
                                {hiddenWords}
                            </span>
                        )}
                    </p>
                </div>
                {!isExpanded && (
                    <button
                        className="font-mono text-xl font-bold cursor-pointer text-brandYellow hover:underline"
                        onClick={handleToggleDescription}
                    >
                        Read More
                    </button>
                )}
            </div>
        </div>
    );
};

export default SingleService;
