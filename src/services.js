import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/';

export const fetchCourses = async () => {
	const response = await axios.get('courses/all');
	return response.data;
};

export const fetchAuthors = async () => {
	const response = await axios.get('authors/all');
	return response.data;
};
