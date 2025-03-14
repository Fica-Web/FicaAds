import React from 'react';
import AdminTitleCard from '../components/reusable/AdminTitleCard';
import AdminBlogListing from '../components/blog/AdminBlogListing';

const AdminBlogPage = () => {
  return (
    <div>
        <AdminTitleCard title='Blog' />
        <AdminBlogListing />
    </div>
  )
}

export default AdminBlogPage
