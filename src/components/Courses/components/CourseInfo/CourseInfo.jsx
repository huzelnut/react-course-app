import { Button } from 'common/Button/Button';

import { arrayToString } from 'helpers/arrayToString';
import { getCourseDuration } from 'helpers/getCourseDuration';
import { formatDate } from 'helpers/formatDate';

import 'components/Courses/components/CourseInfo/courseInfo.css';

export function CourseInfo(props) {
	return (
		<div class='course-info'>
			<div class='course-info-container'>
				<div class='course-info-block course-info-name'>
					{props.course.name}
				</div>
				<div class='course-info-block course-info-description'>
					{props.course.description}
				</div>
				<div class='course-info-block course-info-properties'>
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
				<div class='course-info-block course-info-buttons'>
					<Button
						text='Back to courses'
						handleClick={props.updateActiveCourseId}
					/>
				</div>
			</div>
		</div>
	);
}
