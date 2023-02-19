import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCoursesSelector, getAuthorsSelector } from 'store/selectors';
import { pipeDuration } from 'helpers';

import {
	Container,
	FlexContainer,
	Title,
	Description,
	CourseInfoContainer,
	StyledLink,
	CourseInfoTitle,
} from './CourseInfo.styled';

const CourseInfo = () => {
	const params = useParams();
	const courseId = params.courseId;

	const coursesList = useSelector(getCoursesSelector);
	const authorsList = useSelector(getAuthorsSelector);

	const course = coursesList.filter((course) => course.id === courseId);
	const { id, title, description, creationDate, duration, authors } = course[0];

	const getAuthors = (authorsIds) => {
		const authors = authorsList
			.filter((authorItem) => authorsIds.includes(authorItem.id))
			.map((author) => author.name);

		return authors.join(', ');
	};

	return (
		<Container>
			<StyledLink to='../courses'>&#8656; Back to courses</StyledLink>
			<Title>{title}</Title>
			<FlexContainer>
				<Description>{description}</Description>
				<CourseInfoContainer>
					<p>
						<CourseInfoTitle>ID:</CourseInfoTitle>
						{id}
					</p>

					<p>
						<CourseInfoTitle>Duration:</CourseInfoTitle>
						{pipeDuration(duration)} hours
					</p>
					<p>
						<CourseInfoTitle>Creation date:</CourseInfoTitle>
						{creationDate}
					</p>

					<p>
						<CourseInfoTitle>Authors:</CourseInfoTitle>
						{getAuthors(authors)}
					</p>
				</CourseInfoContainer>
			</FlexContainer>
		</Container>
	);
};

export default CourseInfo;
