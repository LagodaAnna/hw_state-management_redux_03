import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addUser } from 'store/user/userSlice';
import { logIn } from 'auth/operations';

import {
	Container,
	Form,
	FormInput,
	FormButton,
	Text,
	LinkReg,
} from './Login.styled';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				return;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setEmail('');
		setPassword('');
		const result = await logIn({ email, password });

		if (result) {
			const user = {
				name: result.user.name,
				email: result.user.email,
				token: result.result,
			};
			dispatch(addUser(user));
		}
	};
	return (
		<Container>
			<Form autoComplete='off' onSubmit={handleSubmit}>
				<FormInput
					type='email'
					labelText='Email'
					placeholder='Enter email'
					onInputChange={handleInputChange}
					inputValue={email}
					name='email'
				/>
				<FormInput
					type='password'
					labelText='Password'
					placeholder='Enter password'
					onInputChange={handleInputChange}
					inputValue={password}
					name='password'
				/>
				<FormButton type='submit' buttonName='Login' />
			</Form>
			<Text>
				If you not have an account you can
				<LinkReg to='../registration'>Registration</LinkReg>
			</Text>
		</Container>
	);
};

export default Login;
