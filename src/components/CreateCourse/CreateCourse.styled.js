import styled from 'styled-components';

export const Container = styled.div`
	padding: ${(p) => p.theme.space[7]};
	margin: ${(p) => p.theme.space[6]};
	background-color: ${(p) => p.theme.colors.general_dark};
	color: ${(p) => p.theme.colors.secondary};
`;

export const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: ${(p) => p.theme.space[4]};
`;

export const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-column-gap: ${(p) => p.theme.space[7]};
`;
