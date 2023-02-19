import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCourses } from 'store/courses/coursesSlice';
import { setAuthors } from 'store/authors/authorsSlice';
import { getIsAuthSelector } from 'store/selectors';

import { fetchCourses, fetchAuthors } from 'services';

import Box from 'styles.js/Box';
import 'App.css';
import {
	Header,
	Courses,
	CreateCourse,
	Registration,
	ErrorPage,
	Login,
	CourseInfo,
} from 'components';
import { PrivateRoute, RestrictedRoute } from './routes';

export const STORAGE_TOKEN = 'token';
export const STORAGE_USERNAME = 'username';

function App() {
	const isLoggedIn = useSelector(getIsAuthSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		const getCourses = async () => {
			try {
				const data = await fetchCourses();

				dispatch(setCourses(data.result));
			} catch (error) {
				console.log(error);
			}
		};

		const getAuthors = async () => {
			try {
				const data = await fetchAuthors();
				dispatch(setAuthors(data.result));
			} catch (error) {
				console.log(error);
			}
		};

		getCourses();
		getAuthors();
	}, [dispatch]);

	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
			<Box as='main' p={6}>
				<Routes>
					<Route path='/' element={<Navigate to='/courses' replace />} />
					<Route
						path='/registration'
						element={
							<RestrictedRoute
								isLoggedIn={isLoggedIn}
								component={<Registration />}
								redirectTo='/courses'
							/>
						}
					/>
					<Route
						path='/login'
						element={
							<RestrictedRoute
								isLoggedIn={isLoggedIn}
								component={<Login />}
								redirectTo='/courses'
							/>
						}
					/>
					<Route
						path='/courses'
						element={
							<PrivateRoute
								isLoggedIn={isLoggedIn}
								component={<Courses />}
								redirectTo='/login'
							/>
						}
					/>
					<Route
						path='/courses/:courseId'
						element={
							<PrivateRoute
								isLoggedIn={isLoggedIn}
								component={<CourseInfo />}
								redirectTo='/login'
							/>
						}
					/>

					<Route
						path='/courses/add'
						element={
							<PrivateRoute
								isLoggedIn={isLoggedIn}
								component={<CreateCourse />}
								redirectTo='/login'
							/>
						}
					/>
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</Box>
		</>
	);
}

export default App;
