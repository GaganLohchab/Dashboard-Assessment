// import React from 'react';
import SevAlerts from './SevAlerts';
import CatAlerts from './CatAlerts';
import FreqAlerts from './FreqAlerts';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Security Alerts Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8">
        <div className="lg:col-span-2 lg:row-span-2">
          <FreqAlerts />
        </div>
        <div className="lg:col-span-1 lg:row-span-1">
          <CatAlerts />
        </div>
        <div className="lg:col-span-1 lg:row-span-1">
          <SevAlerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
