import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from 'store/user/userSlice';
import {
	StyledHeader,
	StyledName,
	StyledLogo,
	StyledButton,
} from './Header.styled';
import { logOut } from 'auth/operations';

import { getUserNameSelector } from 'store/selectors';

const Header = ({ isLoggedIn }) => {
	const userName = useSelector(getUserNameSelector);
	const dispatch = useDispatch();

	const logOutHandler = () => {
		try {
			logOut();
			dispatch(deleteUser());
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<StyledHeader>
			<StyledLogo />
			{isLoggedIn && <StyledName>{userName}</StyledName>}
			{isLoggedIn && (
				<StyledButton buttonName='Logout' onButtonClick={logOutHandler} />
			)}
		</StyledHeader>
	);
};

export default Header;
