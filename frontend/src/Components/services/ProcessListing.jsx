import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import img from '../../assets/Images/services/image1.jpg'; // Replace with your actual image path

const ProcessListing = ({ section }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    if (!section || !section.subSections) return null; // Ensure data exists

    return (
        <div className="my-28 flex flex-col md:flex-row gap-8 md:gap-14 items-stretch">
            {/* Left Section: Static Image */}
            <div className="md:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                <img
                    src={img}
                    alt="Process visual"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Section: Process Steps */}
            <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-Switzer-Regular font-semibold mb-8 text-black leading-tight">
                    {section.heading}
                </h2>

                <div className="space-y-8">
                    {section.subSections.map((sub, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                                className="flex items-baseline gap-4 font-Switzer-light relative w-full text-left focus:outline-none"
                            >
                                <span className="absolute -top-2 text-lg font-bold font-Switzer-Light text-black">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-xl font-semibold text-black ml-9 mb-3">
                                    {sub.subHeading}
                                </h3>
                            </button>

                            <AnimatePresence initial={false}>
                                {selectedIndex === index && (
                                    <motion.div
                                        key="desc"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="overflow-hidden mt-4 space-y-4"
                                    >
                                        {sub.subDescription.map((desc, i) =>
                                            desc.type === "content" ? (
                                                <p key={i} className="text-gray1 text-lg font-Switzer-Light leading-relaxed">
                                                    {desc.content}
                                                </p>
                                            ) : (
                                                <div key={i} className="flex items-start gap-2">
                                                    <span className="text-black text-lg">•</span>
                                                    <p className="text-gray1 text-lg">{desc.content}</p>
                                                </div>
                                            )
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {index !== section.subSections.length - 1 && (
                                <hr className="mt-4 border-gray-300" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessListing;