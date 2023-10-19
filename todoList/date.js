

/**
 * Returns the current day of the week as a string.
 * If the current day is Sunday, Monday, Tuesday, Wednesday, or Thursday,
 * it returns the respective day. For any other day not defined in the switch statement,
 * it returns a default string. Also logs the value of the dummy parameter.
 *
 * @param {number} dummy - A number to be logged to the console. Default value is 10.
 * @returns {string} The current day of the week or a default string.
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
    case 5:
      day = "our mama";
      break;
		default:
			day = "didnt feel like coding rest";
	}

	return day;
};

exports.getDay = getDay;
