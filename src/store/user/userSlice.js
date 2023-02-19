import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'user',
	storage,
	blacklist: ['email'],
};

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser(state, action) {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		deleteUser(state) {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
		},
	},
});

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const { addUser, deleteUser } = userSlice.actions;
export default persistedReducer;
