import React from 'react';
import { Grid } from '@material-ui/core';

import './css/teacherView.css'
import ListTable from './ListTable'
import { connect } from 'react-redux';
import SubjectWiseDist from './charts/SubjectWiseDist';
import ExamWiseDist from './charts/ExamWiseDist';

const mapStateToProps = (state) => {
  return {
    students: state.report.students,
    currentUser: state.auth.currentUser,
  }
}

const TeacherView = ({ currentUser, students }) => {
  return (
    <div className='container'>
      <div className='title-bar'>
        <div id="class">
          <h4 style={{ margin: '0', paddingRight: '.5em', fontWeight: '600' }}>{'Class:'}</h4>{currentUser.grade}
        </div>
        <div id="strength">
          <h4 style={{ margin: '0', paddingRight: '.5em', fontWeight: '600' }}>{'Number of Students:'}</h4>{students.length}
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
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 500 }}>{"Subject Wise Distribution Chart"}</span>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 500 }}>{"Exam Wise Distribution Chart"}</span>
        </Grid>
      </Grid>
      <ListTable students={students} />
    </div>
  );
}

export default connect(mapStateToProps)(TeacherView);