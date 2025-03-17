import React from 'react';
import AdminTitleCard from '../components/reusable/AdminTitleCard';
import AdminCareerList from '../components/careers/CareerListing';

const AdminCareerPage = () => {
  return (
    <div>
      <AdminTitleCard title='Career' />
      <AdminCareerList />
    </div>
  )
}

export default AdminCareerPage