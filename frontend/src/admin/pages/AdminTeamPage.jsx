import React from 'react';
import AdminTitleCard from '../components/reusable/AdminTitleCard';
import AdminTeamList from '../components/team/AdminTeamList';

const AdminTeamPage = () => {
  return (
    <div>
      <AdminTitleCard title='Team' />
      <AdminTeamList />
    </div>
  )
}

export default AdminTeamPage
