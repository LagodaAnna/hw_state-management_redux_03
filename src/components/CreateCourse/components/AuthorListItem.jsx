import { Button } from 'common';
import { StyledAuthorList } from './AuthorListItem.styled';

export const AuthorsListItem = ({ name, id, buttonName, onButtonClick }) => {
	return (
		<StyledAuthorList id={id}>
			{name}
			<Button buttonName={buttonName} onButtonClick={onButtonClick} />
		</StyledAuthorList>
	);
};
