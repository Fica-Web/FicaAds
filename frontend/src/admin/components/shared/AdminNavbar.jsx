import React from 'react';

const AdminNavbar = ({ onToggleSidebar, isOpen }) => {
    return (
        <nav className="bg-adminWhite text-adminBlack p-4 flex justify-between items-center h-16 px-4 sm:px-7">
            <h2 className="text-lg font-semibold text-adminPrimary">Admin Dashboard</h2>
            <button
                className={`lg:hidden p-2 cursor-pointer text-2xl `}
                onClick={onToggleSidebar}
            >
                {isOpen ? 'x' : '☰'}
            </button>
        </nav>
    );
};

export default AdminNavbar;