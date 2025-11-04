import React from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

const AdminNavbar = ({ onToggleSidebar, isOpen }) => {
    return (
        <nav className="bg-adminWhite text-adminBlack p-3 sm:p-4 flex justify-between items-center h-16 px-4 sm:px-6 border-b border-adminGray/60">
            <div className="flex items-center gap-3">
                <button
                    className="lg:hidden p-2 rounded-md hover:bg-adminGray/60 transition"
                    onClick={onToggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                </button>
                <h2 className="text-base sm:text-lg font-semibold text-adminPrimary">Admin Dashboard</h2>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden sm:flex items-center gap-2 bg-adminGray/60 rounded-lg px-3 py-2">
                    <FiSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm w-40 placeholder:text-gray-500"
                    />
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;