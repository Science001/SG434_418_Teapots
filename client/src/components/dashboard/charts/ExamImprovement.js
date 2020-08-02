import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    examImprovement: state.report.examImprovement
  }
}

const ExamImprovement = ({ examImprovement }) => {
  return (
    <LineChart width={600} height={300} data={examImprovement} style={{ marginTop: '9em' }}
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

export default connect(mapStateToProps)(ExamImprovement);