import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImPlus } from "react-icons/im";

const SingleService = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // Split description into two parts
    const words = service.details.split(' ');
    const visibleWords = words.slice(0, 25).join(' ') + '...';
    const hiddenWords = words.slice(25).join(' ');

    return (
        <div className="group flex gap-5">
            {/* Icon Section */}
            <div>
                <ImPlus
                    className={`text-3xl mt-1 font-bold transform transition-transform duration-500 cursor-pointer ${isExpanded ? 'rotate-45 text-brandYellow' : 'rotate-0 text-primary'
                        }`}
                    onClick={handleToggleDescription}
                />
            </div>

            {/* Content Section */}
            <div className=' cursor-pointer'>
                <Link to={`/services/${service.id}`}>
                    <h3 className="relative text-4xl font-Switzer-medium font-bold uppercase tracking-widest group-hover:font-Singolare-Layers w-fit h-fit pb-3">
                        <span className="relative z-10">{service.homeTitle}</span>
                        {/* Background effect on hover */}
                        <span className="absolute left-0 top-1/2 w-full h-1/3 bg-brandYellow opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                    </h3>
                    <div
                        className={` my-2 overflow-hidden`}
                    >
                        <p className={`overflow-hidden transition-all duration-1000  ${isExpanded ? 'max-h-screen ' : 'max-h-0' } `}>
                            {hiddenWords}
                        </p>
                        <p className={`overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? 'max-h-0' : 'max-h-[500px]' } `}>
                            {visibleWords}
                        </p>
                    </div>
                </Link>
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