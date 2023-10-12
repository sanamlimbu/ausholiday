import holidays from "./data";

/**
 * Checks if a given date is a public holiday.
 *
 * @param {Date} date - The date to check for public holiday status.
 * @param {string} jurisdiction -  The jurisdiction for which to determine public holiday status.
 * @returns {boolean} - True if the date is a public holiday, otherwise false.
 */
export function isPublicHoliday(date, jurisdiction) {
  let year = date.getFullYear();
  let currentYear = new Date().getFullYear();

  if (holidays[jurisdiction] === undefined) {
    return false;
  }

  if (year == currentYear) {
    for (let i = 0; i < holidays[jurisdiction].currentYear.length; i++) {
      if (
        new Date(holidays[jurisdiction].currentYear[i].date).toDateString() ===
        date.toDateString()
      ) {
        return true;
      }
    }
  } else if (year === currentYear + 1) {
    for (let i = 0; i < holidays[jurisdiction].nextYear.length; i++) {
      if (
        new Date(holidays[jurisdiction].nextYear[i].date).toDateString() ===
        date.toDateString()
      ) {
        return true;
      }
    }
  } else if (
    year === currentYear + 2 &&
    holidays[jurisdiction].yearAfterNext !== undefined
  ) {
    for (let i = 0; i < holidays[jurisdiction].yearAfterNext.length; i++) {
      if (
        new Date(
          holidays[jurisdiction].yearAfterNext[i].date
        ).toDateString() === date.toDateString()
      ) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 *
 * @param {Date} date - The date to check for weekend status.
 * @returns {boolean} - True if the date is a weekend, otherwise false.
 */
export function isWeekend(date) {
  let day = date.getDay();
  if (day === 6 || day === 0) {
    return true;
  }
  return false;
}

/**
 * Calculates the date after a specified number of working days, excluding weekends and public holidays.
 *
 * @param {Date} startDate - The starting date for the calculation.
 * @param {string} jurisdiction -  The jurisdiction for the calculation.
 * @param {number} noWorkingDays - The number of working days to add to the starting date.
 * @returns {Date} - The date after adding the specified working days.
 */
export function dateAfterWorkingDays(startDate, jurisdiction, noWorkingDays) {
  let date = startDate;
  let workingDays = 0;
  while (workingDays < noWorkingDays) {
    date = new Date(date.setDate(date.getDate() + 1));
    if (!isPublicHoliday(date, jurisdiction) && !isWeekend(date)) {
      workingDays++;
    }
  }
  return date;
}
