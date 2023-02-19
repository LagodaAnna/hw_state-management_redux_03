import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		addAuthor(state, action) {
			state.push(action.payload);
		},
		deleteAuthor(state, action) {
			state = state.filter((author) => author.id !== action.payload);
		},
		setAuthors(state, action) {
			state = action.payload;
			return state;
		},
	},
});

export const { addAuthor, deleteAuthor, setAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
