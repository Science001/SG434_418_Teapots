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
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="subject"
        label={{
          //   value: "District",
          color: "#F25022",
          position: "bottom",
        }}
      />
      <YAxis
        label={{
          value: "No of Schools",
          angle: -90,
          position: "left",
          color: "#F25022",
        }}
      />
      <Tooltip />
      <Legend
        payload={[
          { value: "Number of Schools", type: "square", color: "#8884d8" },
        ]}
      />
      <Bar dataKey="A" barSize={50} fill="#8884d8" />
    </BarChart>
  );
};

export default connect(mapStateToProps)(StudentSubjectPerformance);
