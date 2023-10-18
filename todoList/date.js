

/**
 * Returns the current day of the week as a string.
 * If the current day is Sunday, Monday, Tuesday, Wednesday, or Thursday,
 * it returns the respective day name.
 * For any other day, it returns "didnt feel like coding rest".
 * Also logs the provided dummy value to the console.
 *
 * @param {number} [dummy=10] - The value to be logged to the console.
 * @returns {string} The current day of the week.
 */
function getDay(dummy = 10) {
	const today = new Date().getDay();
  console.log(dummy);
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
    case 4:
      day = "my mama";
      break;
		default:
			day = "didnt feel like coding rest";
	}

	return day;
};

exports.getDay = getDay;
