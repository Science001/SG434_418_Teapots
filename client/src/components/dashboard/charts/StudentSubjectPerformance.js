import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    studentSubjectPerformance: state.report.studentSubjectPerformance,
  };
};

const StudentSubjectPerformance = ({ studentSubjectPerformance }) => {
  return (
    <BarChart
      width={600}
      height={300}
      data={studentSubjectPerformance}
      style={{
        marginTop: "10em",
      }}
      margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="subject"
        label={{
          value: "Subjects",
          color: "#F25022",
          position: "bottom",
        }}
      />
      <YAxis
        label={{
          value: "Marks",
          angle: -90,
          position: "left",
          color: "#F25022",
        }}
      />
      <Tooltip />
      <Bar dataKey="A" barSize={50} fill="#8884d8" />
    </BarChart>
  );
};

export default connect(mapStateToProps)(StudentSubjectPerformance);
