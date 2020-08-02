import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    studentSubjectPerformance: state.report.studentSubjectPerformance
  }
}

const StudentSubjectPerformance = ({ studentSubjectPerformance }) => {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={studentSubjectPerformance}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default connect(mapStateToProps)(StudentSubjectPerformance)