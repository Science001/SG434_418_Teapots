import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import SchoolsPerDistrict from './charts/SchoolsPerDistrict'
import GER from './charts/GER'
import PrincipalView from './PrincipalView'
import ListTable from './ListTable'

const mapStateToProps = (state) => {
  return {
    schoolSelected: state.report.schoolSelected,
    schools: state.report.schools
  };
};

const headCells = [
  { id: "no", numeric: false, disablePadding: false, label: "S.No" },
  { id: "school", numeric: false, disablePadding: false, label: "Name" },
  { id: "strength", numeric: false, disablePadding: false, label: "Strength" },
  { id: "district", numeric: true, disablePadding: false, label: "District" },
  { id: "average", numeric: true, disablePadding: false, label: "Average" },
  { id: "pass", numeric: true, disablePadding: false, label: "Pass Percentage" },
  { id: "fail", numeric: true, disablePadding: false, label: "Fail Percentage" },
];

const DirectorateView = ({ schools, schoolSelected }) => {
  useEffect(() => { console.log(schoolSelected) }, [schoolSelected])
  return (
    <>
      {schoolSelected === null ? (
        <>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <SchoolsPerDistrict />
            </Grid>
            <Grid item xs={6}>
              <GER />
            </Grid>
          </Grid>
          <ListTable data={schools} dataHead={headCells} title='schools' />
        </>
      ) :
        <PrincipalView />
      }
    </>
  );
}

export default DirectorateView;