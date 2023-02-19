import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCoursesSelector, getAuthorsSelector } from 'store/selectors';

import Box from 'styles.js/Box';
import { Button } from 'common';
import { SearchBar, CourseCard } from './components';

const Courses = () => {
	const [inputValue, setInputValue] = useState('');

	const coursesList = useSelector(getCoursesSelector);
	const authorsList = useSelector(getAuthorsSelector);
	const navigate = useNavigate();

	const handleAddNewCourseClick = () => {
		navigate('/courses/add');
	};

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const getAuthors = (authorsIds) => {
		const authors = authorsList
			.filter((authorItem) => authorsIds.includes(authorItem.id))
			.map((author) => author.name);

		return authors.join(', ');
	};

	const visibleCoursesList = () => {
		const displayedCourses = coursesList.filter(
			(course) =>
				course.title.toUpperCase().includes(inputValue.toUpperCase()) ||
				course.id.includes(inputValue)
		);
		return displayedCourses;
	};

	return (
		<>
			<Box
				display='flex'
				justifyContent='space-between'
				alignItems='end'
				mb={4}
				mt={2}
			>
				<SearchBar inputValue={inputValue} onInputChange={handleChange} />
				<Button
					buttonName='Add new course'
					onButtonClick={handleAddNewCourseClick}
				/>
			</Box>
			<ul>
				{visibleCoursesList().map(
					({ id, title, description, creationDate, duration, authors }) => {
						return (
							<CourseCard
								key={id}
								id={id}
								title={title}
								description={description}
								created={creationDate}
								duration={duration}
								authors={getAuthors(authors)}
							/>
						);
					}
				)}
			</ul>
		</>
	);
};

export default Courses;
