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
  };
};

const PrincipalView = ({ gradeSelected }) => {
  return (
    <>
      {gradeSelected === null ? (
        <Grid container spacing={3}>
          <GradeWiseDist />
          {/* <ListTable data={students} dataHead={headCells} /> */}
        </Grid>
      ) : (
        <TeacherView />
      )}
    </>
  );
};

export default connect(mapStateToProps)(PrincipalView);
