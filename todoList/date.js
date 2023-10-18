

/**
 * Returns the current day of the week as a string.
 * Note: This function has incomplete and incorrect mappings for some days.
 * Currently, it only correctly returns "Sunday", "Monday", and "Tuesday".
 * For Wednesday, it returns "Wdnesday".
 * For Thursday, it returns "yo mama".
 * For Friday and Saturday, it returns "didnt feel like coding rest".
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
