import { padWithLeadingZeros } from 'helpers/padWithLeadingZeros';

export function getCourseDuration(duration) {
	if (!duration) {
		return '';
	}
	let hours = Math.floor(duration / 60);
	let minutes = duration % 60;

	return hours + ':' + padWithLeadingZeros(minutes, 2) + ' hours';
}
