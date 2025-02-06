import React, { useState } from "react";
import faqData from "../../data/faqData";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-10 lg:mt-28 w-11/12 mx-auto mb-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl uppercase font-Switzer-Medium lg:mb-16 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-slate-300 rounded-md shadow-md p-4"
                    >
                        <button
                            className="w-full text-left font-semibold flex justify-between items-center font-Montserrat text-textColor text-base lg:text-lg"
                            onClick={() => toggleQuestion(index)}
                        >
                            {item.question}
                            <span>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 text-gray-700 font-Montserrat text-textColor">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;