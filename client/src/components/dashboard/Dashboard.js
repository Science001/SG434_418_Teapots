import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect, useDispatch } from "react-redux";

import DirectorateView from "./DirectorateView";
import PrincipalView from "./PrincipalView";
import TeacherView from "./TeacherView";
import CreateStudentModal from "../dataEntry/CreateStudentModal";
import CreateStaffModal from "../dataEntry/CreateStaffModal";
import CreateSchoolModal from "../dataEntry/CreateSchoolModal";
import {
  toggleCreateStudent,
  toggleCreateStaff,
  toggleCreateSchool,
} from "../../redux/dataEntry/actions";

const mapStateToProps = (state) => {
  return {
    role: state.auth.currentUser.role,
    isCreateStudentModalOpen: state.dataEntry.isCreateStudentModalOpen,
    isCreateStaffModalOpen: state.dataEntry.isCreateStaffModalOpen,
    isCreateSchoolModalOpen: state.dataEntry.isCreateSchoolModalOpen,
  };
};

const Dashboard = ({
  role,
  isCreateStudentModalOpen,
  isCreateStaffModalOpen,
  isCreateSchoolModalOpen,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {role === "directorate" && <DirectorateView />}
      {role === "principal" && <PrincipalView />}
      {role === "teacher" && <TeacherView />}
      <Fab
        color="primary"
        style={{
          bottom: 0,
          right: 0,
          position: "fixed",
          margin: "0 3em 3em",
        }}
        onClick={() =>
          role === "directorate"
            ? dispatch(toggleCreateSchool(true))
            : role === "principal"
            ? dispatch(toggleCreateStaff(true))
            : dispatch(toggleCreateStudent(true))
        }
      >
        <AddIcon />
      </Fab>
      <CreateStudentModal
        isOpen={isCreateStudentModalOpen}
        handleClose={() => dispatch(toggleCreateStudent(false))}
      />
      <CreateStaffModal
        isOpen={isCreateStaffModalOpen}
        handleClose={() => dispatch(toggleCreateStaff(false))}
      />
      <CreateSchoolModal
        isOpen={isCreateSchoolModalOpen}
        handleClose={() => dispatch(toggleCreateSchool(false))}
      />
    </>
  );
};

export default connect(mapStateToProps)(Dashboard);
