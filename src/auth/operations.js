import axios from 'axios';

const resetAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const register = async (credentials) => {
	try {
		await axios.post('/register', credentials);
	} catch (error) {
		console.log(error);
	}
};

axios.defaults.baseURL = 'http://localhost:4000/';

const setAuthHeader = (token) => {
	axios.defaults.headers.common.Authorization = token;
};

export const logIn = async (credentials) => {
	try {
		const res = await axios.post('/login', credentials);
		const token = res.data.result;
		setAuthHeader(token);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const logOut = async () => {
	try {
		await axios.delete('/logout');
		resetAuthHeader();
	} catch (error) {
		console.log(error);
	}
};
