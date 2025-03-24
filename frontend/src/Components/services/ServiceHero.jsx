import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/Images/aboutbanner.jpg';

const ServiceHero = ({ service }) => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className='w-full h-96 lg:h-124 animate-fade-up duration-1000'>
                <img
                    src={img1}
                    alt='About Banner'
                    className='w-full h-full rounded-xl object-cover'
                />
            </div>
            <div className='mt-6 lg:w-9/12 xl:w-8/12 animate-fade-up duration-1000 group'>
                <motion.h2
                    className="relative text-4xl md:text-5xl font-Switzer-medium font-bold uppercase tracking-widest group-hover:font-Singolare-Layers w-fit h-fit pb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="relative z-10">{service.title}</span>
                    {/* Background effect on hover */}
                    <span className="absolute left-0 top-1/2 w-full h-1/3 bg-brandYellow opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                </motion.h2>
            </div>
        </div>
    )
}

export default ServiceHero
