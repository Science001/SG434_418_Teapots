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
import { connect, useDispatch } from "react-redux";

import { setGradeSelected } from "../../../redux/report/actions";

const mapStateToProps = (state) => {
  return {
    gradeWiseDist: state.report.gradeWiseDist,
  };
};

const GradeWiseDist = ({ gradeWiseDist }) => {
  const dispatch = useDispatch();
  return (
    <BarChart
      width={1200}
      height={500}
      data={gradeWiseDist}
      style={{
        marginTop: '1em'
      }}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      onClick={(data) => dispatch(setGradeSelected(data.activeLabel))}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="class" />
      <YAxis />
      <Tooltip />
      <Legend
        payload={[
          { value: "Grade Strength", type: "square", color: "#8884d8" },
        ]}
      />
      <Bar dataKey="Strength" barSize={50} fill="#8884d8" />
    </BarChart>
  );
};

export default connect(mapStateToProps)(GradeWiseDist);
