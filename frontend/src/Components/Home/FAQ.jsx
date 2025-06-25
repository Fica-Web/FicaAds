import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../../data/faqData";
import { PiPlus, PiMinus } from "react-icons/pi";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);  // new state


    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

    const handleToggleView = () => {
        setShowAll((prev) => !prev);
        setOpenIndex(null);  // optional: close any open faq when toggling
    };


    return (
        <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-16 mt-20 md:mt-10 lg:mt-28 w-full mx-auto mb-10 px-3 lg:px-20 ">
            <div className="w-full lg:w-[487px] text-center lg:text-left  pt-0 lg:pt-4 ">
                <h2 className="text-2xl md:text-4xl lg:text-5xl uppercase font-Switzer-Medium lg:mb-4 mb-5 text-[#0C0C0C] leading-[40px] md:leading-[50px] lg:leading-[60px] ">
                    Frequently Asked Questions </h2>

                <p className="text-[#0C0C0C] lg:mb-7 mb-10 font-Switzer-Medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>

                <button className="hidden lg:block text-base text-[#FFFFFF] bg-[#0C0C0C] rounded-lg px-5 py-2.5"
                    onClick={handleToggleView}
                >
                    {showAll ? "View Less" : "View More"}</button>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-1  w-full lg:w-[850px] sm:mb-10 ">
                {visibleFaqs.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`p-4 transition-all duration-300 ${index !== visibleFaqs.length - 1 ? ' border-b-[0.25px] border-[#0C0C0C] pl-1' : 'pl-1'}`}
                    >
                        <button
                            className=" w-full text-left flex justify-between items-center font-Switzer-Medium  text-[#0C0C0C] leading-[28px] tracking-normal text-xs md:text-base lg:text-lg transition-all duration-300"
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="max-w-[86%] md:max-w-[58%]  lg:max-w-[60%] break-words">
                                {item.question}
                            </div>

                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {openIndex === index ? (
                                    <PiMinus className="text-[#0C0C0C]" />
                                ) : (
                                    <PiPlus className="text-[#0C0C0C]" />
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
                                    className="mt-2 text-gray-700 font-Switzer-Medium text-[#0C0C0C] overflow-hidden"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                ))}
                <div className="block lg:hidden text-center mt-6">
                    <button
                        className="text-base text-[#FFFFFF] bg-[#0C0C0C] rounded-lg px-5 py-2.5"
                        onClick={handleToggleView}
                    >
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;