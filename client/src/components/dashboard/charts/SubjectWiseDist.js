import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    subjectWise: state.report.subjectWise
  }
}

const SubjectWiseDist = ({ subjectWise }) => {
  return (
    <BarChart width={600} height={300} data={subjectWise}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Highest" fill="#FFBB28" onClick={() => alert('name')} />
      <Bar dataKey="Average" fill="#82ca9d" />
      <Bar dataKey="Lowest" fill="#8884d8" />
    </BarChart>
  );
}

export default connect(mapStateToProps)(SubjectWiseDist)