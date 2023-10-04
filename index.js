// Data source: https://www.commerce.wa.gov.au/labour-relations/public-holidays-western-australia

let year2023PublicHolidays = [
  "2023/01/01", // New Years's Day
  "2023/01/02", // New Year's Day
  "2023/01/26", // Australia Day
  "2023/03/06", // Labour Day
  "2023/04/07", // Good Friday
  "2023/04/09", // Easter Sunday
  "2023/04/10", // Easter Monday
  "2023/04/25", // Anzac Day
  "2023/06/05", // Western Australia Day
  "2023/09/25", // Kings's Birthday
  "2023/12/25", // Christmas Day
  "2023/12/26", // Boxing Day
];
let year2024PublicHolidays = [
  "2024/01/01", // New Years's Day
  "2024/01/26", // Australia Day
  "2024/03/04", // Labour Day
  "2024/03/29", // Good Friday
  "2024/03/31", // Easter Sunday
  "2024/04/01", // Easter Monday
  "2024/04/25", // Anzac Day
  "2024/06/03", // Western Australia Day
  "2024/09/23", // Kings's Birthday
  "2024/12/25", // Christmas Day
  "2024/12/26", // Boxing Day
];
let year2025PublicHolidays = [
  "2025/01/01", // New Years's Day
  "2025/01/27", // Australia Day
  "2025/03/03", // Labour Day
  "2025/04/18", // Good Friday
  "2025/04/20", // Easter Sunday
  "2025/04/21", // Easter Monday
  "2025/04/25", // Anzac Day
  "2025/06/02", // Western Australia Day
  "2025/09/29", // Kings's Birthday
  "2025/12/25", // Christmas Day
  "2025/12/26", // Boxing Day
];

/**
 * Checks if a given date is a public holiday.
 *
 * @param {Date} date - The date to check for public holiday status.
 * @returns {boolean} - True if the date is a public holiday, otherwise false.
 */
function isPublicHoliday(date) {
  let year = date.getFullYear();
  if (year == 2023) {
    for (let i = 0; i < year2023PublicHolidays.length; i++) {
      if (
        new Date(year2023PublicHolidays[i]).toDateString() ===
        date.toDateString()
      ) {
        return true;
      }
    }
  } else if (year === 2024) {
    for (let i = 0; i < year2024PublicHolidays.length; i++) {
      if (
        new Date(year2024PublicHolidays[i]).toDateString() ===
        date.toDateString()
      ) {
        return true;
      }
    }
  } else if (year === 2025) {
    for (let i = 0; i < year2025PublicHolidays.length; i++) {
      if (
        new Date(year2025PublicHolidays[i]).toDateString() ===
        date.toDateString()
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
function isWeekend(date) {
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
 * @param {number} noWorkingDays - The number of working days to add to the starting date.
 * @returns {Date} - The date after adding the specified working days.
 */
function dateAfterWorkingDays(startDate, noWorkingDays) {
  let date = startDate;
  let workingDays = 0;
  while (workingDays < noWorkingDays) {
    date = new Date(date.setDate(date.getDate() + 1));
    if (!isPublicHoliday(date) && !isWeekend(date)) {
      workingDays++;
    }
  }
  return date;
}

module.exports = {
  isWeekend,
  isPublicHoliday,
  year2023PublicHolidays,
  year2023PublicHolidays,
  year2025PublicHolidays,
  dateAfterWorkingDays,
};
