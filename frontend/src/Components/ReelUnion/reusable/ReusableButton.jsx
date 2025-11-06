import { Link } from "react-router-dom";

const ReusableButton = ({ 
    icon: Icon,   
    label,        
    className = "", 
    onClick,       // for normal button click
    to             // for navigation using react-router
}) => {
    // If "to" is provided, render Link
    if (to) {
        return (
            <Link
                to={to}
                className={` ${className ? className : 'text-xs'} border border-neutral-300 px-3 py-1 rounded-md flex gap-2 items-center justify-center`}
            >
                {Icon && <Icon />} 
                {label}
            </Link>
        );
    }

    // Otherwise render button
    return (
        <button
            onClick={onClick}
            className={` ${className ? className : 'text-xs'} border border-neutral-300 px-3 py-1 rounded-md flex gap-2 items-center justify-center`}
        >
            {Icon && <Icon />} 
            {label}
        </button>
    );
};

export default ReusableButton;