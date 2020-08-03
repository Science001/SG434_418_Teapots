import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { connect, useDispatch } from "react-redux";

import "./css/principalView.css";
import GradeWiseDist from "./charts/GradeWiseDist";
import TeacherView from "./TeacherView";
import ListTable from "./ListTable";
import { setSchoolSelected } from "../../redux/report/actions";

const mapStateToProps = (state) => {
  return {
    role: state.auth.currentUser.role,
    gradeSelected: state.report.gradeSelected,
    grades: state.report.grades,
  };
};

const headCells = [
  { id: "grade", numeric: false, disablePadding: false, label: "Grade" },
  { id: "staff", numeric: false, disablePadding: false, label: "Staff" },
  {
    id: "strength",
    numeric: false,
    disablePadding: false,
    label: "Class Strength",
  },
  { id: "highest", numeric: true, disablePadding: false, label: "Highest" },
  { id: "lowest", numeric: true, disablePadding: false, label: "Lowest" },
  { id: "average", numeric: true, disablePadding: false, label: "Average" },
  {
    id: "pass",
    numeric: true,
    disablePadding: false,
    label: "Pass Percentage",
  },
];

const PrincipalView = ({ role, grades, gradeSelected }) => {
  const dispatch = useDispatch(setSchoolSelected);
  return (
    <>
      {role === "directorate" && (
        <Button
          edge="start"
          onClick={() => dispatch(setSchoolSelected(null))}
          color="secondary"
          size="large"
          startIcon={<ChevronLeftIcon />}
          style={{ marginBottom: "1rem" }}
        >
          {"Go Home"}
        </Button>
      )}
      {gradeSelected === null ? (
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <GradeWiseDist />
          <ListTable data={grades} dataHead={headCells} title="grades" />
        </Grid>
      ) : (
        <TeacherView />
      )}
    </>
  );
};

export default connect(mapStateToProps)(PrincipalView);
