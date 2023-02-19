import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	margin: ${(p) => p.theme.space[7]};
	padding: ${(p) => p.theme.space[6]};
	border: 1px solid;
	border-color: ${(p) => p.theme.colors.secondary};
	border-radius: 8px;
	background-color: ${(p) => p.theme.colors.general_dark};
	color: ${(p) => p.theme.colors.secondary};
`;

export const Title = styled.h1`
	margin: 0 auto;
	margin-bottom: ${(p) => p.theme.space[5]};
	width: fit-content;
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: ${(p) => p.theme.space[7]};
`;

export const Description = styled.div`
	flex: 2 2;
`;

export const CourseInfoContainer = styled.div`
	flex: 1;
`;

export const CourseInfoTitle = styled.span`
	margin-right: ${(p) => p.theme.space[2]};
	font-weight: bold;
`;

export const StyledLink = styled(Link)`
	flex: 1;
	color: ${(p) => p.theme.colors.secondary};
	text-decoration: none;
`;
