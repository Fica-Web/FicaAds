import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import img from '../../assets/Images/services/image1.jpg'; // Replace with your actual image path

const ProcessListing = ({ section }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    if (!section || !section.subSections) return null; // Ensure data exists

    const hoverVariants = {
        rest: { x: 0, y: 0 },
        hover: { 
            x: -6,  
            y: -2,
            transition: {
                duration: 0.1,
                ease: 'easeInOut',
            },
        }
    };

    return (
        <div className="md:my-28 my-12 flex flex-col md:flex-row gap-8 md:gap-14 items-stretch font-Switzer-Regular">
            {/* --- Left image stays exactly the same --- */}
            <div className="md:w-1/2 flex items-center rounded-xl overflow-hidden">
                <img
                    src={section.image}
                    alt="Process visual"
                    className="w-full h-full max-h-[90vh] object-cover rounded-xl md:block hidden"
                />
            </div>

            {/* --- Right side --- */}
            <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-Switzer-Regular mb-8 text-black md:text-start text-center leading-tight">
                    {section.heading}
                </h2>

                <div className="space-y-8">
                    {section.subSections.map((sub, index) => (
                        <div key={index}>
                            {/* -------- STEP HEADER -------- */}
                            <motion.button
                                type="button"
                                variants={hoverVariants}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                                className="flex items-baseline gap-4 relative w-full text-left focus:outline-none"
                            >
                                {/* number */}
                                <span className="absolute -top-2 text-lg font-semibold font-Switzer-Light text-black">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* title */}
                                <h3 className="lg:text-xl text-lg text-black ml-9 mb-3">
                                    {sub.subHeading}
                                </h3>
                            </motion.button>

                            {/* -------- DESCRIPTION -------- */}
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
                                            desc.type === 'content' ? (
                                                <p key={i} className="text-gray1 lg:text-lg font-Switzer-Light leading-relaxed">
                                                    {desc.content}
                                                </p>
                                            ) : (
                                                <div key={i} className="flex items-start gap-2">
                                                    <span className="text-black lg:text-lg">•</span>
                                                    <p className="text-gray1 lg:text-lg">{desc.content}</p>
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