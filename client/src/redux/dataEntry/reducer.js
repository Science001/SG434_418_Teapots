export const TOGGLE_CREATE_STUDENT = "TOGGLE_CREATE_STUDENT";
export const TOGGLE_CREATE_STAFF = "TOGGLE_CREATE_STAF";
export const TOGGLE_CREATE_SCHOOL = "TOGGLE_CREATE_SCHOOL";
export const CREATE_EXAM = 'CREATE_EXAM'
export const ENTER_RESULTS_PAGE = 'ENTER_RESULTS_PAGE'
export const ADD_STUDENTS = 'ADD_STUDENTS'

const initialState = {
  isCreateStudentModalOpen: false,
  isCreateStaffModalOpen: false,
  isCreateSchoolModalOpen: false,
  subjects: ["Science", "Maths", "Social"],
  examResults: [],
  enterResultsPage: false,
  students: ['Ramesh', 'Suresh', 'Rajesh']
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
    case ADD_STUDENTS:
      return {
        ...state,
        students: action.payload
      }
    case CREATE_EXAM: {
      const newExams = state.examResults.push({
        exam: action.payload,
        subjects: [],
        results: []
      })
      return {
        ...state,
        exams: newExams
      }
    }
    case ENTER_RESULTS_PAGE:
      return {
        ...state,
        enterResultsPage: action.payload
      }
    default:
      return state;
  }
};

export default dataEntryReducer;
