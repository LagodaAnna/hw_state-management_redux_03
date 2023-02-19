import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, Button } from 'common';

export const Container = styled.div`
	margin: 0 auto;
	width: 400px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: ${(p) => p.theme.space[5]};
	padding-bottom: ${(p) => p.theme.space[5]};
	background-color: ${(p) => p.theme.colors.secondary_dark};
	border: 2px solid;
	border-color: ${(p) => p.theme.colors.general_dark};
	border-radius: 8px;
	color: ${(p) => p.theme.colors.secondary};
`;

export const FormInput = styled(Input)`
	margin-bottom: ${(p) => p.theme.space[5]};
	width: 300px;
`;

export const FormButton = styled(Button)`
	background-color: ${(p) => p.theme.colors.additional_dark};
`;

export const Text = styled.p`
	text-align: center;
`;

export const LinkReg = styled(Link)`
	font-weight: bold;
	cursor: pointer;
	text-decoration: underline;
	margin-left: ${(p) => p.theme.space[2]};
	color: ${(p) => p.theme.colors.secondary_dark};
`;
