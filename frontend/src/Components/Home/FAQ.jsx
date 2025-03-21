import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../../data/faqData";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-10 lg:mt-28 w-11/12 mx-auto mb-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl uppercase font-Switzer-Medium lg:mb-16 mb-10 text-center">
                Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="border border-slate-300 rounded-md shadow-md p-4 bg-white 
                            transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
                    >
                        <button
                            className="w-full text-left font-semibold flex justify-between items-center 
                                font-Montserrat text-textColor text-base lg:text-lg transition-all duration-300"
                            onClick={() => toggleQuestion(index)}
                        >
                            {item.question}
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {openIndex === index ? (
                                    <FaMinus className="text-brandYellow" />
                                ) : (
                                    <FaPlus className="text-lightgray" />
                                )}
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 text-gray-700 font-Montserrat text-textColor overflow-hidden"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;