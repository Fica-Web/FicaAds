import React from "react";
import { motion } from "framer-motion";

const seoWebDesignData = {
    heading: "Why Web Design & SEO Go Hand-in-Hand",
    type: "seo-webdesign",
    subSections: [
        {
            subHeading: "",
            subDescription: [
                {
                    content:
                        "In Dubai’s hyper-competitive market, a beautiful website means nothing if Google can’t find it. Likewise, perfect SEO can’t save a slow, clunky site. Our dual expertise ensures your website:",
                    type: "content",
                },
                { content: "Ranks higher with SEO-optimized architecture" },
                { content: "Converts visitors with intuitive, mobile-first design" },
                { content: "Loads instantly (under 2 seconds) for better rankings and user experience" },
                { content: "Stays secure with HTTPS, SSL, and regular audits" },
            ],
        },
    ],
};

const ListBox = () => {
    return (
        <div className="w-11/12 mx-auto my-20 flex flex-col items-center text-center relative group">
            {/* Floating Background Animation */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="w-80 h-80 bg-brandYellow/20 rounded-full blur-3xl absolute top-10 left-1/3 animate-pulse"></div>
                <div className="w-64 h-64 bg-brandGreen/20 rounded-full blur-3xl absolute bottom-10 right-1/3 animate-pulse"></div>
            </div>

            {/* Styled Heading with Hover Effect */}
            <motion.h2
                className="relative text-4xl md:text-5xl font-Switzer-medium font-bold uppercase tracking-widest group-hover:font-Singolare-Layers w-fit h-fit pb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="relative z-10">{seoWebDesignData.heading}</span>
                {/* Background effect on hover */}
                <span className="absolute left-0 top-1/2 w-full h-1/3 bg-brandYellow opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </motion.h2>

            {/* Glassmorphic Card with Animated List */}
            <motion.div
                className="relative bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-500 max-w-3xl transition-all duration-300 hover:scale-105 hover:shadow-gray-500/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <p className="text-lg text-gray-300 font-Switzer-Regular mb-6">
                    {seoWebDesignData.subSections[0].subDescription[0].content}
                </p>

                <ul className="text-lg space-y-5 text-gray-300">
                    {seoWebDesignData.subSections[0].subDescription.slice(1).map((desc, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center space-x-4 bg-gray-900/40 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-gray-500/40 border-l-4 border-transparent hover:border-brandYellow"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <motion.span
                                className="text-brandYellow font-bold text-xl"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                ✔
                            </motion.span>
                            <span className="font-medium">{desc.content}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default ListBox;