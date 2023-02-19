import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from 'auth/operations';
import {
	Container,
	Form,
	FormInput,
	FormButton,
	Text,
	LinkLogin,
} from './Registration.styled';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case 'name':
				setName(value);
				break;
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

	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			register({ name, email, password });
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Form autoComplete='off' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					labelText='Name'
					placeholder='Enter name'
					onInputChange={handleInputChange}
					inputValue={name}
					name='name'
				/>
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
				<FormButton type='submit' buttonName='Registration' />
			</Form>
			<Text>
				If you have an account you can
				<LinkLogin to='../login'>Login</LinkLogin>
			</Text>
		</Container>
	);
};

export default Registration;
