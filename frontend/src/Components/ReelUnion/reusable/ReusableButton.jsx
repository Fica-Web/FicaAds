import { motion } from 'framer-motion';

const ReusableButton = ({ 
    icon: Icon,   // Pass the icon component
    label,        // Pass button label
    className = "", 
    onClick 
}) => {
    return (
        <div 
            className={` ${className ? className : 'text-xs'} border border-neutral-300 px-3 py-1 rounded-md flex gap-2 items-center`}
        >
            {Icon && <Icon />} 
            <button
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
};

export default ReusableButton;