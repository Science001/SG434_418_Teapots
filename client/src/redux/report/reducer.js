export const SET_SUBJECT_SELECTED = "SET_SUBJECT_SELECTED";
export const SET_GRADE_SELECTED = "SET_GRADE_SELECTED";
export const SET_SCHOOL_SELECTED = "SET_SCHOOL_SELECTED";

const initialState = {
  students: [
    {
      rollNo: 1,
      name: "Rithik",
      sub1: 75,
      sub2: 80,
      sub3: 85,
      sub4: 90,
      sub5: 95,
      avg: 80,
    },
    {
      rollNo: 2,
      name: "Abishek",
      sub1: 65,
      sub2: 70,
      sub3: 75,
      sub4: 80,
      sub5: 75,
      avg: 75,
    },
    {
      rollNo: 3,
      name: "Anushka",
      sub1: 78,
      sub2: 89,
      sub3: 76,
      sub4: 56,
      sub5: 71,
      avg: 72,
    },
    {
      rollNo: 4,
      name: "Deepika",
      sub1: 80,
      sub2: 85,
      sub3: 90,
      sub4: 95,
      sub5: 90,
      avg: 90,
    },
    {
      rollNo: 5,
      name: "Harrish",
      sub1: 65,
      sub2: 80,
      sub3: 78,
      sub4: 84,
      sub5: 76,
      avg: 76,
    },
  ],

  grades: [
    {
      grade: 1,
      staff: "Edward",
      strength: 60,
      highest: 96,
      lowest: 68,
      avg: 58,
      pass: 57,
    },
    {
      grade: 2,
      staff: "Elric",
      strength: 60,
      highest: 80,
      lowest: 38,
      avg: 55,
      pass: 77,
    },
    {
      grade: 3,
      staff: "Alphonse",
      strength: 60,
      highest: 89,
      lowest: 79,
      avg: 57,
      pass: 87,
    },
    {
      grade: 4,
      staff: "Trisha",
      strength: 60,
      highest: 70,
      lowest: 58,
      avg: 66,
      pass: 67,
    },
    {
      grade: 5,
      staff: "Mustang",
      strength: 60,
      highest: 80,
      lowest: 48,
      avg: 59,
      pass: 67,
    },
    {
      grade: 6,
      staff: "Roy",
      strength: 60,
      highest: 86,
      lowest: 37,
      avg: 59,
      pass: 56,
    },
    {
      grade: 7,
      staff: "Bradley",
      strength: 60,
      highest: 90,
      lowest: 38,
      avg: 57,
      pass: 67,
    },
    {
      grade: 8,
      staff: "Rose",
      strength: 60,
      highest: 80,
      lowest: 48,
      avg: 56,
      pass: 68,
    },
    {
      grade: 9,
      staff: "Jack",
      strength: 60,
      highest: 80,
      lowest: 38,
      avg: 66,
      pass: 77,
    },
    {
      grade: 10,
      staff: "Jon",
      strength: 60,
      highest: 70,
      lowest: 28,
      avg: 56,
      pass: 67,
    },
    {
      grade: 11,
      staff: "Winry",
      strength: 60,
      highest: 80,
      lowest: 48,
      avg: 66,
      pass: 57,
    },
    {
      grade: 12,
      staff: "Rockbell",
      strength: 60,
      highest: 80,
      lowest: 48,
      avg: 57,
      pass: 87,
    },
  ],
  schools: [
    {
      id: 0,
      school: "Don Bosco",
      strength: 1060,
      district: "North",
      avg: 78,
      pass: 81,
      fail: 19,
    },
    {
      id: 1,
      school: "Burul Public School",
      strength: 2181,
      district: "South",
      avg: 81,
      pass: 82,
      fail: 18,
    },
    {
      id: 2,
      school: "Holy Cross School",
      strength: 1878,
      district: "East",
      avg: 76,
      pass: 62,
      fail: 38,
    },
    {
      id: 3,
      school: "Green Dale School",
      strength: 1930,
      district: "West",
      avg: 85,
      pass: 79,
      fail: 21,
    },
    {
      id: 4,
      school: "Tendong Educational Institution",
      strength: 2030,
      district: "South",
      avg: 87,
      pass: 82,
      fail: 18,
    },
    {
      id: 5,
      school: "Nobel English School",
      strength: 2111,
      district: "West",
      avg: 65,
      pass: 60,
      fail: 40,
    },
  ],
  lastUpdatedTime: null,
  subjectWise: [
    { name: "English", Highest: 91, Lowest: 21, Average: 57 },
    { name: "Maths", Highest: 53, Lowest: 22, Average: 37 },
    { name: "Hindi", Highest: 91, Lowest: 72, Average: 88 },
    { name: "Social", Highest: 71, Lowest: 42, Average: 52 },
    { name: "Science", Highest: 81, Lowest: 4, Average: 23 },
  ],
  examWise: [
    { name: "Quarterly", Average: 345 },
    { name: "Internal I", Average: 380 },
    { name: "Half Yearly", Average: 327 },
    { name: "Internal II", Average: 403 },
    { name: "Annual", Average: 420 },
  ],
  studentSubjectPerformance: [
    { subject: "English", A: 79, fullMark: 150 },
    { subject: "Maths", A: 98, fullMark: 150 },
    { subject: "Hindi", A: 86, fullMark: 150 },
    { subject: "Science", A: 79, fullMark: 150 },
    { subject: "Social", A: 85, fullMark: 150 },
  ],
  examImprovement: [
    { name: "Quarterly", Average: 40 },
    { name: "Internal I", Average: 57 },
    { name: "Half Yearly", Average: 75 },
    { name: "Internal II", Average: 90 },
    { name: "Annual", Average: 95 },
  ],
  subjectWisePass: [
    { name: "Pass", value: 83 },
    { name: "Fail", value: 21 },
    { name: "Absentees", value: 7 },
  ],
  gradeWiseDist: [
    { class: "1", Strength: 120 },
    { class: "2", Strength: 130 },
    { class: "3", Strength: 150 },
    { class: "4", Strength: 130 },
    { class: "5", Strength: 128 },
    { class: "6", Strength: 123 },
    { class: "7", Strength: 140 },
    { class: "8", Strength: 160 },
    { class: "9", Strength: 126 },
    { class: "10", Strength: 110 },
    { class: "11", Strength: 165 },
    { class: "12", Strength: 180 },
  ],
  schoolsPerDistrict: [
    { District: "North Sikkim", Schools: 278 },
    { District: "West Sikkim", Schools: 189 },
    { District: "East Sikkim", Schools: 239 },
    { District: "South Sikkim", Schools: 340 },
  ],
  ger: [
    { year: "2017", primary: 20, secondary: 25 },
    { year: "2018", primary: 25, secondary: 30 },
    { year: "2019", primary: 37, secondary: 42 },
    { year: "2020", primary: 47, secondary: 48 },
  ],
  subjectSelected: null,
  gradeSelected: null,
  schoolSelected: null,
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECT_SELECTED:
      return {
        ...state,
        subjectSelected: action.payload,
      };
    case SET_GRADE_SELECTED:
      return {
        ...state,
        gradeSelected: action.payload,
      };
    case SET_SCHOOL_SELECTED:
      return {
        ...state,
        schoolSelected: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;