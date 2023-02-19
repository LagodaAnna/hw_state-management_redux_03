import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourse(state, action) {
			state.push(action.payload);
		},
		deleteCourse(state, action) {
			return state.filter((course) => course.id !== action.payload);
		},
		setCourses(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { addCourse, deleteCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
