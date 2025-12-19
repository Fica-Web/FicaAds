import { motion } from 'framer-motion';
import { FiBriefcase, FiArrowUpRight } from 'react-icons/fi';

const CompanyProfile = () => {
    return (
        <motion.a
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2 }}
            href="https://drive.google.com/file/d/1MhkhCMs6d-HjzLczJuR7iub7eGSBum7M/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full
                       border border-black/50 text-black
                       px-5 py-4 rounded-xl
                       hover:bg-black hover:text-white
                       transition-colors duration-300"
        >
            <div className="flex items-center gap-3">
                <FiBriefcase size={18} />
                <span className="text-sm tracking-widest uppercase">
                    Company Profile
                </span>
            </div>
            <FiArrowUpRight size={18} />
        </motion.a>
    );
};

export default CompanyProfile;
