import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { connect, useDispatch } from "react-redux";

import { setSubjectSelected } from "../../../redux/report/actions";

const mapStateToProps = (state) => {
  return {
    subjectWise: state.report.subjectWise,
  };
};

const SubjectWiseDistribution = ({ subjectWise }) => {
  const dispatch = useDispatch();
  return (
    <BarChart
      width={600}
      height={300}
      data={subjectWise}
      onClick={(data) => {
        dispatch(setSubjectSelected(data.activeLabel));
      }}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        label={{
          value: "Subject",
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
      <Bar dataKey="Lowest" fill="#8884d8" />
      <Bar dataKey="Average" fill="#82ca9d" />
      <Bar dataKey="Highest" fill="#FFBB28" />
    </BarChart>
  );
};

export default connect(mapStateToProps)(SubjectWiseDistribution);
