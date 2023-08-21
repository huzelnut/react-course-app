import { useEffect } from 'react';

import { NewCourseButton } from '../NewCourseButton/NewCourseButton';

import 'components/Courses/components/CourseList/emptyCourseList.css';

export function EmptyCourseList(props) {
	useEffect(() => {
		document.title = 'Your list is empty';
	});

	return (
		<div class='empty-course-list'>
			<div class='empty-course-list-message'>
				<b>Please use "Add new course" button to add your first course.</b>
			</div>
			<div class='empty-course-list-button'>
				<NewCourseButton />
			</div>
		</div>
	);
}
