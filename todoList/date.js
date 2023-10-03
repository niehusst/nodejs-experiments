
exports.getDay = function() {
	const today = new Date().getDay();
	let day;

	switch (today) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tueshday";
			break;
		case 3:
			day = "Wdnesday";
			break;
		default:
			day = "didnt feel like coding rest";
	}

	return day;
};
