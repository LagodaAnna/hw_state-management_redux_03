import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import authorsReducer from './authors/authorsSlice';
import coursesReducer from './courses/coursesSlice';
import persistedUserReducer from './user/userSlice';

export const store = configureStore({
	reducer: {
		user: persistedUserReducer,
		authors: authorsReducer,
		courses: coursesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
