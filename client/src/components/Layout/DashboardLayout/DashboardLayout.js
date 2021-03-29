import React from 'react';

import Dashboard from '../Dashboard';
import Sidebar from '../Sidebar';

import './DashboardLayout.css';

const DashboardLayout = () => {

  return (
    <>
      <Sidebar />
      <div>
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardLayout;
