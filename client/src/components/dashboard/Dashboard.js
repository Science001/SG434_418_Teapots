import React from 'react';
import Chart from './Chart';
import CompareChart from './CompareChart';
import CompareAnotherChart from './CompareAnotherChart';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Chart />
      <CompareChart />
      <CompareAnotherChart />
    </div>
  );
}

export default Dashboard;