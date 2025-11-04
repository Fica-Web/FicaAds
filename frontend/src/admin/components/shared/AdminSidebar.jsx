import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import { FiHome, FiUsers, FiFileText, FiBriefcase } from 'react-icons/fi';
import adminNavOptions from '../../../data/adminNavOptions';
import { adminLogoutApi } from '../../../utils/api/adminApi';

const icons = {
    '/admin': FiHome,
    '/admin/teams': FiUsers,
    '/admin/blogs': FiFileText,
    '/admin/careers': FiBriefcase,
};

const AdminSidebar = ({ isOpen }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await adminLogoutApi();
        if (response) {
            navigate('/admin/login');
        }
    };

    return (
        <aside
            className={`z-50 text-adminBlack bg-adminWhite w-64 absolute inset-y-0 left-0 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 border-r border-adminGray/60`}
        >
            <nav className="h-full flex flex-col justify-between px-3 py-6">
                <div className="flex flex-col gap-2 mt-10">
                    <ul className="flex flex-col gap-1">
                        {adminNavOptions.map((option) => {
                            const Icon = icons[option.path] || FiHome;
                            return (
                                <li key={option.path}>
                                    <NavLink
                                        to={option.path}
                                        end={option.end || false}
                                        className={({ isActive }) =>
                                            `group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-adminGray/60 ${
                                                isActive
                                                    ? 'text-adminPrimary bg-adminGray/60'
                                                    : 'text-adminBlack'
                                            }`
                                        }
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-adminGray/60">
                                            <Icon className="text-base" />
                                        </span>
                                        <span>{option.name}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="px-3">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 transition"
                    >
                        <IoMdLogOut className="text-lg" />
                        Logout
                    </button>
                </div>
            </nav>
        </aside>
    );
};

export default AdminSidebar;