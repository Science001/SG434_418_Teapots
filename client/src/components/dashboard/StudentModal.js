import React, { forwardRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { IconButton, Slide, AppBar, Toolbar, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import StudentSubjectPerformance from './charts/StudentSubjectPerformance';
import ExamImprovement from './charts/ExamImprovement';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StudentModal = ({ isOpen, closeModal, student }) => {
  return (
    <Dialog fullScreen open={isOpen} onClose={closeModal} TransitionComponent={Transition}>
      <AppBar style={{ position: 'relative' }}>
        <Toolbar style={{ position: 'relative', textAlign: 'center' }}>
          <IconButton edge="end" color="inherit" onClick={closeModal} aria-label="close">
            <CancelIcon onClick={() => closeModal()} />
          </IconButton>
          <span style={{ flexGrow: 1 }}><strong style={{ marginRight: '1em' }}>{'Student'}</strong>{student.name.toUpperCase()}</span>
        </Toolbar>
      </AppBar>

      <Grid container spacing={0}>
        <Grid item xs={6}>
          <StudentSubjectPerformance />
        </Grid>
        <Grid item xs={6}>
          <ExamImprovement />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 500 }}>{"Student - Subject Performance Chart"}</span>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 500 }}>{"Exam Chart"}</span>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default StudentModal;