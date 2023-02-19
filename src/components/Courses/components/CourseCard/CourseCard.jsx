import { useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteCourse } from 'store/courses/coursesSlice';
import { Button } from 'common';
import { pipeDuration } from 'helpers';

import {
	List,
	Authors,
	LeftPartOfCard,
	ButtonsContainer,
} from './CourseCard.styled';

const CourseCard = ({ id, title, description, authors, duration, created }) => {
	const navigate = useNavigate();
	const formattedDuration = pipeDuration(duration);
	const dispatch = useDispatch();
	return (
		<List>
			<LeftPartOfCard>
				<h2>{title}</h2>
				<p>{description}</p>
			</LeftPartOfCard>
			<div>
				<Authors>Authors: {authors}</Authors>
				<p>Duration: {formattedDuration}</p>
				<p>Created: {created}</p>

				<ButtonsContainer>
					<Button
						buttonName='Show course'
						onButtonClick={() => {
							navigate(`${id}`);
						}}
					/>
					<Button buttonName={<AiOutlineEdit size={18} />} />
					<Button
						buttonName={<AiOutlineDelete size={18} />}
						onButtonClick={() => {
							dispatch(deleteCourse(id));
						}}
					/>
				</ButtonsContainer>
			</div>
		</List>
	);
};

export default CourseCard;
