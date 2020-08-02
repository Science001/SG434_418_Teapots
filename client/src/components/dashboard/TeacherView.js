import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import "./css/teacherView.css";
import ListTable from "./ListTable";
import { connect, useDispatch } from "react-redux";
import { setGradeSelected } from "../../redux/report/actions";
import SubjectWiseDist from "./charts/SubjectWiseDist";
import ExamWiseDist from "./charts/ExamWiseDist";

const mapStateToProps = (state) => {
  return {
    students: state.report.students,
    currentUser: state.auth.currentUser,
    gradeSelected: state.report.gradeSelected,
  };
};

const headCells = [
  { id: "no", numeric: true, disablePadding: true, label: "Roll No" },
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "sub1", numeric: true, disablePadding: false, label: "English" },
  { id: "sub2", numeric: true, disablePadding: false, label: "Maths" },
  { id: "sub3", numeric: true, disablePadding: false, label: "Hindi" },
  { id: "sub4", numeric: true, disablePadding: false, label: "Social" },
  { id: "sub5", numeric: true, disablePadding: false, label: "Science" },
  { id: "avg", numeric: true, disablePadding: false, label: "Average" },
];

const TeacherView = ({ currentUser, gradeSelected, students }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      {currentUser.role !== "teacher" && (
        <Button
          edge="start"
          onClick={() => dispatch(setGradeSelected(null))}
          color="secondary"
          size="large"
          startIcon={<ChevronLeftIcon />}
          style={{ marginBottom: "1rem" }}
        >
          {"Back"}
        </Button>
      )}
      <div className="title-bar">
        <div id="class">
          <h4 style={{ margin: "0", paddingRight: ".5em", fontWeight: "600" }}>
            {"Class:"}
          </h4>
          {currentUser.grade === -1 ? gradeSelected : currentUser.grade}
        </div>
        <div id="strength">
          <h4 style={{ margin: "0", paddingRight: ".5em", fontWeight: "600" }}>
            {"Number of Students:"}
          </h4>
          {students.length}
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SubjectWiseDist />
        </Grid>
        <Grid item xs={6}>
          <ExamWiseDist />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <span style={{ fontWeight: 500 }}>
            {"Subject Wise Distribution Chart"}
          </span>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <span style={{ fontWeight: 500 }}>
            {"Exam Wise Distribution Chart"}
          </span>
        </Grid>
      </Grid>
      <ListTable data={students} dataHead={headCells} />
    </div>
  );
};

export default connect(mapStateToProps)(TeacherView);
