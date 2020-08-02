import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PieChart, Cell, Pie, Sector } from "recharts";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";

import { setSubjectSelected } from "../../../redux/report/actions";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const SubjectWisePass = ({ subjectWise, data, subject }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const COLORS = ["#00C49F", "#ff0000c9", "#FFBB28"];

  const dispatch = useDispatch();

  return (
    <>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none", color: "black" }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            onClick={() => dispatch(setSubjectSelected(null))}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
            }}
          >
            {subject}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PieChart width={600} height={252}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={56}
            outerRadius={72}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={(data, index) => {
              setActiveIndex(index);
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        {/* <div style={{ flexGrow: 1 }}>{`${JSON.stringify(subjectWise)}`}</div> */}
      </div>
    </>
  );
};
export default SubjectWisePass;
