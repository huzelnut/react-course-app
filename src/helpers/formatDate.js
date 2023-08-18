import { padWithLeadingZeros } from 'helpers/padWithLeadingZeros';

const dateDelimiter = '.';

export function formatDate(date) {
	if (!date) {
		return '';
	}
	let day = padWithLeadingZeros(date.getDate(), 2);
	let month = padWithLeadingZeros(date.getMonth() + 1, 2);
	let year = date.getFullYear();

	return day + dateDelimiter + month + dateDelimiter + year;
}
