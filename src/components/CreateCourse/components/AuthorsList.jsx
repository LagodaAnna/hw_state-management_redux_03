import { AuthorsListItem } from './AuthorListItem';

export const AuthorsList = ({ authors, onButtonClick, buttonName }) => {
	return (
		<ul>
			{authors.map((author) => (
				<AuthorsListItem
					key={author.id}
					id={author.id}
					name={author.name}
					buttonName={buttonName}
					onButtonClick={onButtonClick}
				/>
			))}
		</ul>
	);
};
