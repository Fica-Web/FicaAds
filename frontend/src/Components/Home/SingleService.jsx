import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImPlus } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const SingleService = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleDescription = () => {
        setIsExpanded((prev) => !prev);
    };

    // Split description into two parts
    const words = service.details.split(" ");
    const visibleWords = words.slice(0, 25).join(" ") + "...";
    const hiddenWords = words.slice(25).join(" ");

    return (
        <div className="group flex gap-5">
            {/* Animated Icon Section */}
            <motion.div
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
                onClick={handleToggleDescription}
            >
                <ImPlus
                    className={`text-3xl font-bold transform transition-transform duration-500 ${
                        isExpanded ? "rotate-45 text-brandYellow" : "rotate-0 text-primary"
                    }`}
                />
            </motion.div>

            {/* Content Section */}
            <div className="cursor-pointer">
                <Link to={`/services/${service.id}`}>
                    <h3 className="relative text-4xl font-Switzer-medium font-bold uppercase tracking-widest group-hover:font-Singolare-Layers w-fit h-fit pb-3">
                        <span className="relative z-10">{service.homeTitle}</span>
                        {/* Background effect on hover */}
                        <span className="absolute left-0 top-1/2 w-full h-1/3 bg-brandYellow opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                    </h3>
                </Link>

                {/* Expandable Description with Toggle Effect */}
                <AnimatePresence>
                    <motion.p
                        key={isExpanded ? "expanded" : "collapsed"}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-2 overflow-hidden text-gray-700"
                    >
                        {isExpanded ? hiddenWords : visibleWords}
                    </motion.p>
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 font-mono text-xl font-bold text-brandYellow hover:underline"
                    onClick={handleToggleDescription}
                >
                    {isExpanded ? "" : "Read More"}
                </motion.button>
            </div>
        </div>
    );
};

export default SingleService;