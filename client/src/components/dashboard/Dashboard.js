import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { connect, useDispatch } from 'react-redux'

import DirectorateView from './DirectorateView';
import PrincipalView from './PrincipalView';
import TeacherView from './TeacherView';
// import { toggleCreateStudent, toggleCreateStaff, toggleCreateSchool } from '../../redux/dataEntry/reducer'

const mapStateToProps = (state) => {
  return {
    role: state.auth.currentUser.role,
  }
}

const Dashboard = ({ role }) => {
  const dispatch = useDispatch()
  return <>
    {role === 'directorate' && <DirectorateView />}
    {role === 'principal' && <PrincipalView />}
    {role === 'teacher' && <TeacherView />}
    {/* <Fab
      color="primary"
      style={{
        bottom: 0,
        right: 0,
        position: 'fixed',
        margin: '0 3em 3em',
      }}
      onClick={() =>
        role === 'directorate' ?
          dispatch(toggleCreateSchool(true)) :
          role === 'principal' ?
            dispatch(toggleCreateStaff(true)) :
            dispatch(toggleCreateStudent(true))
      }
    >
      <AddIcon />
    </Fab>*/}
  </>
}

export default connect(mapStateToProps)(Dashboard);