import React from 'react';
import { connect } from 'react-redux'

import DirectorateView from './DirectorateView';
import PrincipalView from './PrincipalView';
import TeacherView from './TeacherView';

const mapStateToProps = (state) => {
  return {
    role: state.auth.currentUser.role,
  }
}

const Dashboard = ({ role }) => {
  if (role === 'directorate') return <DirectorateView />
  else if (role === 'principal') return <PrincipalView />
  else return <TeacherView />
}

export default connect(mapStateToProps)(Dashboard);