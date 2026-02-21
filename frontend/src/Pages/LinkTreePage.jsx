import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Images/Logos/fica.png';

import Instagram from '../Components/LinkTree/Instagram';
import Website from '../Components/LinkTree/Website';
import CompanyProfile from '../Components/LinkTree/CompanyProfile';
import WhatsApp from '../Components/LinkTree/WhatsApp';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
};

const LinkTreePage = () => {
    return (
        <div className="min-h-screen bg-white flex justify-center items-center px-4">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full max-w-sm"
            >

                {/* Logo */}
                <motion.div variants={item} className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="h-20" />
                </motion.div>

                {/* Card */}
                <motion.div
                    variants={item}
                    className="bg-white rounded-3xl border border-black/10
                               shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                               p-5 space-y-4"
                >

                    <Instagram />
                    <Website />
                    <CompanyProfile />

                    <div className="h-px bg-black/10 my-4" />

                    <WhatsApp />
                </motion.div>

                {/* Footer */}
                <motion.p
                    variants={item}
                    className="text-[10px] text-lightgray text-center mt-8 tracking-widest"
                >
                    © 2025 Fica Ad Innovations
                </motion.p>

            </motion.div>
        </div>
    );
};

export default LinkTreePage;