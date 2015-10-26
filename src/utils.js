export function trimString(string) {
	return string.replace(/^\s*/, '').replace(/\s*$/, '');
}

export function sanitateNumericString(string) {
	return trimString(string).replace(/[^0-9,.]/g, '');
}

export function removeAlergensClosure(string) {
	return string.replace(/\s*\([\d,\s]+\)/, '');
}

export function removeWeight(string) {
	return string.replace(/\s*\d+g([\/-]\d+g)?/, '');
}