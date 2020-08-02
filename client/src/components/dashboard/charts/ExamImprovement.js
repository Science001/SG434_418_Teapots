import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Quarterly', Average: 4000 },
  { name: 'Internal I', Average: 2780 },
  { name: 'Half Yearly', Average: 3000 },
  { name: 'Internal II', Average: 1890 },
  { name: 'Annual', Average: 2000 },
];

const ExamImprovement = ({ }) => {
  return (
    <LineChart width={600} height={300} data={data} style={{ marginTop: '9em' }}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Average" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default ExamImprovement;