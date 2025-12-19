import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
    return (
        <motion.a
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2 }}
            href="https://wa.me/918086555918?text=I%20want%20to%20apply"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full
                       bg-black text-white
                       px-5 py-4 rounded-xl
                       tracking-widest uppercase text-sm
                       shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
        >
            <FaWhatsapp size={18} />
            Apply Now
        </motion.a>
    );
};

export default WhatsApp;
