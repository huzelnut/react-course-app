import { SearchBar } from 'components/Courses/component/SearchBar/SearchBar';
import { NewCourseButton } from 'components/Courses/components/NewCourseButton/NewCourseButton';

import 'components/Courses/components/TopBar/topbar.css';

export function TopBar() {
	return (
		<div class='courses-topbar-container'>
			<div class='courses-topbar-search-panel'>
				<SearchBar />
			</div>
			<div class='courses-topbar-button-new'>
				<NewCourseButton />
			</div>
		</div>
	);
}
