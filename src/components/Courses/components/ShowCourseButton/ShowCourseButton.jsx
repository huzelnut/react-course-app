import { Button } from 'common/Button/Button';

export function ShowCourseButton(props) {
	return <Button text='Show' handleClick={props.updateActiveCourseId} />;
}
