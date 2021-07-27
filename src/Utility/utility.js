export function getFormattedNumber(number) {
	let formatted_number = number;
	if (formatted_number >= 1000000000) {
		formatted_number = parseFloat((formatted_number / 1000000000).toFixed(1)) + "B";
	} else if (formatted_number >= 1000000) {
		formatted_number = parseFloat((formatted_number / 1000000).toFixed(1)) + "M";
	} else if (formatted_number >= 1000) {
		formatted_number = parseFloat((formatted_number / 1000).toFixed(1)) + "K";
	}

	return formatted_number;
}