import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { connect, useDispatch } from 'react-redux';

import SubjectWiseDistribution from './SubjectWiseDistribution'
import SubjectWisePass from './SubjectWisePass'

import { setSubjectSelected } from '../../../redux/report/actions'

const mapStateToProps = (state) => {
  return {
    subjectSelected: state.report.subjectSelected,
    subjectWisePass: state.report.subjectWisePass
  }
}

const SubjectWiseDist = ({ subjectSelected, subjectWisePass }) => {
  const dispatch = useDispatch();
  return (
    <>
      {/* {subjectSelected !== null &&
        <IconButton onClick={() => dispatch(setSubjectSelected(null))}><ChevronLeftIcon /></IconButton>
      } */}
      <div>
        {subjectSelected === null ? <SubjectWiseDistribution /> : <SubjectWisePass data={subjectWisePass} subject={subjectSelected} />}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(SubjectWiseDist)