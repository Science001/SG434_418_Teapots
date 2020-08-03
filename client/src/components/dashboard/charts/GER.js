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
  return { ger: state.report.ger };
};

const GER = ({ ger }) => {
  return (
    <BarChart
      width={600}
      height={300}
      data={ger}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="year"
        label={{
          //   value: "Year",
          color: "#F25022",
          position: "bottom",
        }}
      />
      <YAxis
        label={{
          value: "GER",
          angle: -90,
          position: "left",
          color: "#F25022",
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="primary" fill="#8884d8" />
      <Bar dataKey="secondary" fill="#82ca9d" />
    </BarChart>
  );
};

export default connect(mapStateToProps)(GER);
