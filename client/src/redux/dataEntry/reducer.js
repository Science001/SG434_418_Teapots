export const TOGGLE_CREATE_STUDENT = "TOGGLE_CREATE_STUDENT";
export const TOGGLE_CREATE_STAFF = "TOGGLE_CREATE_STAF";
export const TOGGLE_CREATE_SCHOOL = "TOGGLE_CREATE_SCHOOL";

const initialState = {
  isCreateStudentModalOpen: false,
  isCreateStaffModalOpen: false,
  isCreateSchoolModalOpen: false,
  subjects: ["Science", "Maths", "Social"],
};

const dataEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CREATE_STUDENT:
      return { ...state, isCreateStudentModalOpen: action.payload };
    case TOGGLE_CREATE_STAFF:
      return {
        ...state,
        isCreateStaffModalOpen: action.payload,
      };
    case TOGGLE_CREATE_SCHOOL:
      return {
        ...state,
        isCreateSchoolModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default dataEntryReducer;
