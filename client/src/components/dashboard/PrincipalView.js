import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import "./css/principalView.css";
import GradeWiseDist from "./charts/GradeWiseDist";
import TeacherView from "./TeacherView";
import ListTable from "./ListTable";

const mapStateToProps = (state) => {
  return {
    gradeSelected: state.report.gradeSelected,
    grades: state.report.grades
  };
};

const headCells = [
  { id: "grade", numeric: false, disablePadding: false, label: "Grade" },
  { id: "staff", numeric: false, disablePadding: false, label: "Staff" },
  { id: "strength", numeric: false, disablePadding: false, label: "Class Strength" },
  { id: "highest", numeric: true, disablePadding: false, label: "Highest" },
  { id: "lowest", numeric: true, disablePadding: false, label: "Lowest" },
  { id: "average", numeric: true, disablePadding: false, label: "Average" },
  { id: "pass", numeric: true, disablePadding: false, label: "Pass Percentage" },
];

const PrincipalView = ({ grades, gradeSelected }) => {
  return (
    <>
      {gradeSelected === null ? (
        <Grid container spacing={3}>
          <GradeWiseDist />
          <ListTable data={grades} dataHead={headCells} title='grades' />
        </Grid>
      ) : (
          <TeacherView />
        )}
    </>
  );
};

export default connect(mapStateToProps)(PrincipalView);
