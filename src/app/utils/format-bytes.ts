/**
 * Source: https://bit.dev/amazingdesign/utils/format-bytes
 * License: MIT
 */
export function FormatBytes(bytes: number, decimals = 2) {
	if (typeof bytes !== 'number' || bytes < 0) {
		return '-';
	}
	if (bytes === 0) {
		return '0 B';
	}

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	const i = Math.max(Math.floor(Math.log(bytes) / Math.log(k)), 0);

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
