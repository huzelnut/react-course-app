import { Courses } from 'components/Courses/components/CourseList/CourseList';
import { Header } from 'components/Header/Header';

import { coursesMockData } from 'constants';

import 'App.css';
import { EmptyCourseList } from 'components/Courses/components/CourseList/EmptyCourseList';

function App() {
	return (
		<div>
			<Header />
			{renderActualCourseList(coursesMockData)}
		</div>
	);
}

function renderActualCourseList(courses) {
	if (courses && courses.length > 0) {
		return <Courses courses={courses} />;
	} else {
		return <EmptyCourseList />;
	}
}

export default App;
