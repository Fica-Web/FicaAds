import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../admin/components/shared/AdminNavbar';
import AdminSidebar from '../admin/components/shared/AdminSidebar';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="flex h-screen bg-adminWhite">
            <AdminSidebar isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminNavbar onToggleSidebar={handleToggleSidebar} isOpen={isSidebarOpen} />
                <div className="flex-1 p-6 bg-adminGray overflow-y-auto lg:rounded-tl-3xl">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
