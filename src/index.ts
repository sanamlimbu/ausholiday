import {
  ACTPublicHolidays,
  NSWPublicHolidays,
  NTPublicHolidays,
  QLDPublicHolidays,
  SAPublicHolidays,
  TASPublicHolidays,
  VICPublicHolidays,
  WAPublicHolidays,
} from './data';

// All states and territories in Australia.
export enum Jurisdiction {
  NSW = 'New South Wales',
  VIC = 'Victoria',
  QLD = 'Queensland',
  SA = 'South Australia',
  WA = 'Western Australia',
  TAS = 'Tasmania',
  ACT = 'Asutralian Capital Territory',
  NT = 'Norethern Territory',
}

/**
 * Determines whether a given date is a public holiday in the specified jurisdiction.
 *
 * @param {Date} date - The date to be checked.
 * @param {Jurisdiction} jurisdiction - The jurisdiction to consider for public holidays.
 * @returns {boolean} - Returns `true` if the date is a public holiday in the specified jurisdiction; otherwise, `false`.
 * @throws {Error} - Throws an error if the provided jurisdiction is invalid or date is out of range.
 */
export function isPublicHoliday(
  date: Date,
  jurisdiction: Jurisdiction
): boolean {
  if (!isDateInRange(date)) {
    throw new Error(`Date out of range: ${date.toString()}`);
  }

  const key = getKey(date);

  switch (jurisdiction) {
    case Jurisdiction.NSW: {
      const value = NSWPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.VIC: {
      const value = VICPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.QLD: {
      const value = QLDPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.SA: {
      const value = SAPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.WA: {
      const value = WAPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.TAS: {
      const value = TASPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.ACT: {
      const value = ACTPublicHolidays.get(key);
      return value !== undefined;
    }
    case Jurisdiction.NT: {
      const value = NTPublicHolidays.get(key);
      return value !== undefined;
    }
    default:
      throw new Error(`Invalid jurisdiction: ${jurisdiction}`);
  }
}

/**
 * Calculates the total number of public holidays between the specified start and end dates, inclusive.
 *
 * @param {Date} start - The starting date of the range to check for public holidays.
 * @param {Date} end - The ending date of the range to check for public holidays.
 * @param {Jurisdiction} jurisdiction - The jurisdiction whose public holidays should be considered.
 * @returns {number} - The number of public holidays within the given date range.
 * @throws {Error} - Throws an error if the provided jurisdiction is invalid or dates are out of range.
 */
export function numberOfPublicHolidays(
  start: Date,
  end: Date,
  jurisdiction: Jurisdiction
): number {
  if (!isDateInRange(start)) {
    throw new Error(`Date out of range: ${start}`);
  }

  if (!isDateInRange(end)) {
    throw new Error(`Date out of range: ${end}`);
  }

  start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  end = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  const current = start;

  let count = 0;

  while (current <= end) {
    switch (jurisdiction) {
      case Jurisdiction.NSW: {
        if (isPublicHoliday(current, Jurisdiction.NSW)) {
          count++;
        }
        break;
      }
      case Jurisdiction.VIC: {
        if (isPublicHoliday(current, Jurisdiction.VIC)) {
          count++;
        }
        break;
      }
      case Jurisdiction.QLD: {
        if (isPublicHoliday(current, Jurisdiction.QLD)) {
          count++;
        }
        break;
      }
      case Jurisdiction.SA: {
        if (isPublicHoliday(current, Jurisdiction.SA)) {
          count++;
        }
        break;
      }
      case Jurisdiction.WA: {
        if (isPublicHoliday(current, Jurisdiction.WA)) {
          count++;
        }
        break;
      }
      case Jurisdiction.TAS: {
        if (isPublicHoliday(current, Jurisdiction.TAS)) {
          count++;
        }
        break;
      }
      case Jurisdiction.ACT: {
        if (isPublicHoliday(current, Jurisdiction.ACT)) {
          count++;
        }
        break;
      }
      case Jurisdiction.NT: {
        if (isPublicHoliday(current, Jurisdiction.NT)) {
          count++;
        }
        break;
      }
      default:
        throw new Error(`Invalid jurisdiction: ${jurisdiction}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}

/**
 * Calculates the number of working days between the specified start and end dates, inclusive.
 * A working day is considered any day that is not a weekend or a public holiday, based on the provided jurisdiction.
 *
 * @param {Date} start - The starting date of the range to check for working days.
 * @param {Date} end - The ending date of the range to check for working days.
 * @param {Jurisdiction} jurisdiction - The jurisdiction whose public holidays should be considered.
 * @returns {number} - The total number of working days within the given date range.
 * @throws {Error} - Throws an error if the provided jurisdiction is invalid or dates are out of range.
 */

export function numberOfWorkingDays(
  start: Date,
  end: Date,
  jurisdiction: Jurisdiction
): number {
  if (!isDateInRange(start)) {
    throw new Error(`Date out of range: ${start}`);
  }

  if (!isDateInRange(end)) {
    throw new Error(`Date out of range: ${end}`);
  }

  start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  end = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  const current = start;

  let count = 0;

  while (current <= end) {
    switch (jurisdiction) {
      case Jurisdiction.NSW: {
        if (
          !isPublicHoliday(current, Jurisdiction.NSW) &&
          !isWeekend(current)
        ) {
          count++;
        }
        break;
      }
      case Jurisdiction.VIC: {
        if (
          !isPublicHoliday(current, Jurisdiction.VIC) &&
          !isWeekend(current)
        ) {
          count++;
        }
        break;
      }
      case Jurisdiction.QLD: {
        if (
          !isPublicHoliday(current, Jurisdiction.QLD) &&
          !isWeekend(current)
        ) {
          count++;
        }
        break;
      }
      case Jurisdiction.SA: {
        if (!isPublicHoliday(current, Jurisdiction.SA) && !isWeekend(current)) {
          count++;
        }
        break;
      }
      case Jurisdiction.WA: {
        if (!isPublicHoliday(current, Jurisdiction.WA) && !isWeekend(current)) {
          count++;
        }
        break;
      }
      case Jurisdiction.TAS: {
        if (
          !isPublicHoliday(current, Jurisdiction.TAS) &&
          !isWeekend(current)
        ) {
          count++;
        }
        break;
      }
      case Jurisdiction.ACT: {
        if (
          !isPublicHoliday(current, Jurisdiction.ACT) &&
          !isWeekend(current)
        ) {
          count++;
        }
        break;
      }
      case Jurisdiction.NT: {
        if (!isPublicHoliday(current, Jurisdiction.NT) && !isWeekend(current)) {
          count++;
        }
        break;
      }
      default:
        throw new Error(`Invalid jurisdiction: ${jurisdiction}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}

/**
 * Calculates the number of weekdays (Monday to Friday) between the specified start and end dates, inclusive.
 * Weekdays are considered any day that is not a weekend (Saturday or Sunday).
 *
 * @param {Date} start - The starting date of the range to check for weekdays.
 * @param {Date} end - The ending date of the range to check for weekdays.
 * @returns {number} - The total number of weekdays within the given date range.
 */
export function numberOfWeekDays(start: Date, end: Date): number {
  start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  end = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  const current = start;

  let count = 0;

  while (current <= end) {
    if (!isWeekend(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }

  return count;
}

/**
 * Checks if there is a public holiday between the given start and end dates (inclusive) for a specified jurisdiction.
 * Returns true if there is at least one public holiday within the date range, otherwise returns false.
 *
 * @param {Date} start - The start date of the range.
 * @param {Date} end - The end date of the range.
 * @param {Jurisdiction} jurisdiction - The jurisdiction to check for public holidays.
 * @returns {boolean} - True if there is at least one public holiday within the date range, false otherwise.
 * @throws {Error} - Throws an error if the provided jurisdiction is invalid or dates are out of range.
 */
export function isTherePublicHoliday(
  start: Date,
  end: Date,
  jurisdiction: Jurisdiction
): boolean {
  if (!isDateInRange(start)) {
    throw new Error(`Date out of range: ${start}`);
  }

  if (!isDateInRange(end)) {
    throw new Error(`Date out of range: ${end}`);
  }

  start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  end = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  const current = start;

  while (current <= end) {
    switch (jurisdiction) {
      case Jurisdiction.NSW: {
        if (isPublicHoliday(current, Jurisdiction.NSW)) {
          return true;
        }
        break;
      }
      case Jurisdiction.VIC: {
        if (isPublicHoliday(current, Jurisdiction.VIC)) {
          return true;
        }
        break;
      }
      case Jurisdiction.QLD: {
        if (isPublicHoliday(current, Jurisdiction.QLD)) {
          return true;
        }
        break;
      }
      case Jurisdiction.SA: {
        if (isPublicHoliday(current, Jurisdiction.SA)) {
          return true;
        }
        break;
      }
      case Jurisdiction.WA: {
        if (isPublicHoliday(current, Jurisdiction.WA)) {
          return true;
        }
        break;
      }
      case Jurisdiction.TAS: {
        if (isPublicHoliday(current, Jurisdiction.TAS)) {
          return true;
        }
        break;
      }
      case Jurisdiction.ACT: {
        if (isPublicHoliday(current, Jurisdiction.ACT)) {
          return true;
        }
        break;
      }
      case Jurisdiction.NT: {
        if (isPublicHoliday(current, Jurisdiction.NT)) {
          return true;
        }
        break;
      }
      default:
        throw new Error(`Invalid jurisdiction: ${jurisdiction}`);
    }
  }

  return false;
}

/**
 * Calculates the date after adding a specified number of working days to a given date,
 * considering weekends and public holidays specific to a jurisdiction.
 *
 * @param {Date} date - The starting date to which working days will be added.
 * @param {number} after - The number of working days to add.
 * @param {Jurisdiction} jurisdiction - The jurisdiction to consider for public holidays.
 * @returns {Date} The resulting date after adding the specified number of working days.
 * @throws {Error} - Throws an error if the provided jurisdiction is invalid or date is out of range.
 */
export function dateAfterWorkingDays(
  date: Date,
  after: number,
  jurisdiction: Jurisdiction
): Date {
  if (!isDateInRange(date)) {
    throw new Error(`Date out of range: ${date.toString()}`);
  }

  const current = date;
  let i = 0;

  while (i <= after) {
    switch (jurisdiction) {
      case Jurisdiction.NSW: {
        if (
          !isPublicHoliday(current, Jurisdiction.NSW) &&
          !isWeekend(current)
        ) {
          i++;
        }
        break;
      }
      case Jurisdiction.VIC: {
        if (
          !isPublicHoliday(current, Jurisdiction.VIC) &&
          !isWeekend(current)
        ) {
          i++;
        }
        break;
      }
      case Jurisdiction.QLD: {
        if (
          !isPublicHoliday(current, Jurisdiction.QLD) &&
          !isWeekend(current)
        ) {
          i++;
        }
        break;
      }
      case Jurisdiction.SA: {
        if (!isPublicHoliday(current, Jurisdiction.SA) && !isWeekend(current)) {
          i++;
        }
        break;
      }
      case Jurisdiction.WA: {
        if (!isPublicHoliday(current, Jurisdiction.WA) && !isWeekend(current)) {
          i++;
        }
        break;
      }
      case Jurisdiction.TAS: {
        if (
          !isPublicHoliday(current, Jurisdiction.TAS) &&
          !isWeekend(current)
        ) {
          i++;
        }
        break;
      }
      case Jurisdiction.ACT: {
        if (
          !isPublicHoliday(current, Jurisdiction.ACT) &&
          !isWeekend(current)
        ) {
          i++;
        }
        break;
      }
      case Jurisdiction.NT: {
        if (!isPublicHoliday(current, Jurisdiction.NT) && !isWeekend(current)) {
          i++;
        }
        break;
      }
      default:
        throw new Error(`Invalid jurisdiction: ${jurisdiction}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return current;
}

/**
 * Generates a string key in the 'DDMMYYYY' format from the given date.
 * This key is used for efficient lookup in public holiday maps.
 *
 * @param {Date} date - The date to convert.
 * @returns {string} - A string representing the date in 'DDMMYYYY' format.
 */
function getKey(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayStr = day < 10 ? '0' + day : '' + day;
  const monthStr = month < 10 ? '0' + month : '' + month;

  return `${dayStr}${monthStr}${year}`;
}

/**
 * Determines whether the given date falls on a weekend (Saturday or Sunday).
 *
 * @param {Date} date - The date to check.
 * @returns {boolean} - Returns `true` if the date is a Saturday or Sunday; otherwise, `false`.
 */
export function isWeekend(date: Date): boolean {
  const day = date.getDay();

  if (day === 0 || day === 6) {
    return true;
  }

  return false;
}

/**
 * Determines whether a given date falls within the range from January 1st of the current year
 * to December 31st of the next year.
 *
 * @param {Date} date - The date to be evaluated.
 * @returns {boolean} - Returns true if the date is within the specified range; otherwise, false.
 */
export function isDateInRange(date: Date) {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  const start = new Date(currentYear, 0, 1);
  const end = new Date(nextYear, 11, 31, 23, 59, 59, 999);

  return date >= start && date <= end;
}
