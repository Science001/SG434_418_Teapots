import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import { connect, useDispatch } from "react-redux";

import { setGradeSelected } from "../../../redux/report/actions";

const mapStateToProps = (state) => {
  return {
    gradeWiseDist: state.report.gradeWiseDist,
  };
};

const GradeWiseDist = ({ gradeWiseDist }) => {
  const COLORS = ["#77dd77"];
  const dispatch = useDispatch();
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <BarChart
      width={800}
      height={400}
      data={gradeWiseDist}
      style={{
        marginTop: "1em",
      }}
      margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
      onClick={(data) => {
        if (data) {
          dispatch(setGradeSelected(data.activeLabel));
        }
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <XAxis
        dataKey="class"
        label={{
          value: "Grade",
          color: "#F25022",
          position: "bottom",
        }}
      />
      <YAxis
        label={{
          value: "No of Students",
          angle: -90,
          position: "left",
          color: "#F25022",
        }}
      />

      <Bar
        dataKey="Strength"
        barSize={40}
        label
        onMouseOver={(data, index) => {
          setHoverIndex(index);
        }}
        onMouseOut={(data, index) => {
          setHoverIndex(-1);
        }}
      >
        <LabelList dataKey="Strength" position="top" />
        {gradeWiseDist.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === hoverIndex ? "#8884d8" : "#77dd77"}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default connect(mapStateToProps)(GradeWiseDist);
