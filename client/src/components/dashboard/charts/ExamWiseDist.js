import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    examWise: state.report.examWise,
  };
};

const ExamWiseDist = ({ examWise }) => {
  return (
    <AreaChart
      width={600}
      height={300}
      data={examWise}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        label={{
          value: "Grade",
          color: "#F25022",
          position: "bottom",
        }}
      />
      <YAxis
        label={{ value: "Total Average", angle: -90, position: "insideLeft" }}
        domain={[0, 500]}
      />
      <Tooltip />
      <Area type="monotone" dataKey="Average" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default connect(mapStateToProps)(ExamWiseDist);
