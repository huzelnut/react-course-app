const DELIMITER = ', ';

export function arrayToString(arr) {
	return arr && arr.join(DELIMITER);
}
