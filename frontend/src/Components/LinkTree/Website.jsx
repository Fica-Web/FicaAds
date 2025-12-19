import { motion } from 'framer-motion';
import { FiGlobe, FiArrowUpRight } from 'react-icons/fi';

const Website = () => {
    return (
        <motion.a
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2 }}
            href="https://ficaads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full
                       border border-black/50 text-black
                       px-5 py-4 rounded-xl
                       hover:bg-black hover:text-white
                       transition-colors duration-300"
        >
            <div className="flex items-center gap-3">
                <FiGlobe size={18} />
                <span className="text-sm tracking-widest uppercase">
                    Website
                </span>
            </div>
            <FiArrowUpRight size={18} />
        </motion.a>
    );
};

export default Website;
