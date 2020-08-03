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
    schoolsPerDistrict: state.report.schoolsPerDistrict,
  };
};

const SchoolsPerDistrict = ({ schoolsPerDistrict }) => {
  return (
    <BarChart
      width={600}
      height={300}
      data={schoolsPerDistrict}
      style={{
        marginTop: "1em",
      }}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="District"
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
      <Bar dataKey="Schools" barSize={50} fill="#8884d8" />
    </BarChart>
  );
};

export default connect(mapStateToProps)(SchoolsPerDistrict);
