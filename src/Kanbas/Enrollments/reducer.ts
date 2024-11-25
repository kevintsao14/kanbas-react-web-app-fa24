import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    findEnrollments: (state, action) => {
      state.enrollments =  action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      
      state.enrollments = [...state.enrollments, enrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => !(m.course === enrollment.course && m.user === enrollment.user));
    },
    
  },
});
export const { addEnrollment, deleteEnrollment, findEnrollments} =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;