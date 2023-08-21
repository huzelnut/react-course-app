import { useEffect, useState } from 'react';

import { SearchBar } from 'components/Courses/components/SearchBar/SearchBar';
import { NewCourseButton } from 'components/Courses/components/NewCourseButton/NewCourseButton';
import { CourseCard } from 'components/Courses/components/CourseCard/CourseCard';
import { CourseInfo } from '../CourseInfo/CourseInfo';

import { coursesMockData, findCourseById } from 'constants';

import 'components/Courses/components/CourseList/courseList.css';

export function Courses() {
	const [activeCourseId, setActiveCourseId] = useState(null);
	const updateActiveCourseId = (courseId) => setActiveCourseId(courseId);

	useEffect(() => {
		document.title = 'Courses';
	});

	return renderCourseList(activeCourseId, updateActiveCourseId);
}

function renderCourseList(activeCourseId, updateActiveCourseId) {
	if (!activeCourseId) {
		return (
			<div class='courses'>
				<div class='courses-topbar-container'>
					<div class='courses-topbar-search-panel'>
						<SearchBar />
					</div>
					<div class='courses-topbar-button-new'>
						<NewCourseButton />
					</div>
				</div>
				<div class='courses-list'>
					{coursesMockData.map((course) => {
						return (
							<div class='courses-list-block'>
								<CourseCard
									course={course}
									updateActiveCourseId={() => updateActiveCourseId(course.id)}
								/>
							</div>
						);
					})}
					;
				</div>
			</div>
		);
	} else {
		return (
			<CourseInfo
				course={findCourseById(activeCourseId)}
				activeCourseId={activeCourseId}
				updateActiveCourseId={() => updateActiveCourseId(null)}
			/>
		);
	}
}
