import { Button } from 'common/Button/Button';
import { ShowCourseButton } from 'components/Courses/components/ShowCourseButton/ShowCourseButton';

import { arrayToString } from 'helpers/arrayToString';
import { getCourseDuration } from 'helpers/getCourseDuration';
import { formatDate } from 'helpers/formatDate';

import 'components/Courses/components/CourseCard/courseCard.css';

export function CourseCard(props) {
	return (
		<div class='course-card-container'>
			<div class='course-card-block course-card-name'>{props.course.name}</div>
			<div class='course-card-block course-card-description'>
				{props.course.description}
			</div>
			<div class='course-card-block course-card-properties'>
				<b>ID: </b>
				{props.course.id}
				<br />
				<b>Authors: </b>
				{arrayToString(props.course.authors)}
				<br />
				<b>Duration: </b>
				{getCourseDuration(props.course.duration)}
				<br />
				<b>Created: </b>
				{formatDate(props.course.created)}
			</div>
			<div class='course-card-block course-card-buttons'>
				<ShowCourseButton updateActiveCourseId={props.updateActiveCourseId} />
				<Button text='Delete' />
				<Button text='Edit' />
			</div>
		</div>
	);
}
