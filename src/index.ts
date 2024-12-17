import { ACTPublicHolidays } from './act';
import { getDayMonthYear, getKey, isWeekend } from './helpers';
import { NSWPublicHolidays } from './nsw';
import { NTPublicHolidays } from './nt';
import { QLDPublicHolidays } from './qld';
import { SAPublicHolidays } from './sa';
import { TASPublicHolidays } from './tas';
import { Jurisdiction } from './types';
import { VICPublicHolidays } from './vic';
import { WAPublicHolidays } from './wa';

// isPublicHoliday returns true if given date is public holiday in given jurisdiction.
export function isPublicHoliday(
  date: Date,
  jurisdiction: Jurisdiction
): boolean {
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
      console.log(key);
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
      throw new Error(`invalid jurisdiction: ${jurisdiction}`);
  }
}

// numberOfPublicHolidays returns number of public holidays between given dates.
// Both dates are inclusive.
export function numberOfPublicHolidays(
  start: Date,
  end: Date,
  jurisdiction: Jurisdiction
): number {
  const startDMY = getDayMonthYear(start);
  const endDMY = getDayMonthYear(end);

  start = new Date(startDMY.year, startDMY.month, startDMY.day, 0, 0, 0, 0);
  end = new Date(endDMY.year, endDMY.month, endDMY.day, 0, 0, 0, 0);

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
        throw new Error(`invalid jurisdiction: ${jurisdiction}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}

// numberOfWorkingDays returns number of working days between given dates.
// Both dates are inclusive.
export function numberOfWorkingDays(
  start: Date,
  end: Date,
  jurisdiction: Jurisdiction
): number {
  const startDMY = getDayMonthYear(start);
  const endDMY = getDayMonthYear(end);

  start = new Date(startDMY.year, startDMY.month, startDMY.day, 0, 0, 0, 0);
  end = new Date(endDMY.year, endDMY.month, endDMY.day, 0, 0, 0, 0);

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
        throw new Error(`invalid jurisdiction: ${jurisdiction}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}

// numberOfWeekDays returns number of weekdays between given dates.
// Both dates are inclusive.
export function numberOfWeekDays(start: Date, end: Date): number {
  const startDMY = getDayMonthYear(start);
  const endDMY = getDayMonthYear(end);

  start = new Date(startDMY.year, startDMY.month, startDMY.day, 0, 0, 0, 0);
  end = new Date(endDMY.year, endDMY.month, endDMY.day, 0, 0, 0, 0);

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

// isTherePublicHoliday returns true if there is public holiday between given dates.
// Given dates are inclusive.
export function isTherePublicHoliday(
  start: Date,
  end: Date,
  jurisdiction: Jurisdiction
): boolean {
  const startDMY = getDayMonthYear(start);
  const endDMY = getDayMonthYear(end);

  start = new Date(startDMY.year, startDMY.month, startDMY.day, 0, 0, 0, 0);
  end = new Date(endDMY.year, endDMY.month, endDMY.day, 0, 0, 0, 0);

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
        throw new Error(`invalid jurisdiction: ${jurisdiction}`);
    }
  }

  return false;
}

// dateAfterWorkingDays returns date after given working days.
// Given date is exclusive.
export function dateAfterWorkingDays(
  date: Date,
  after: number,
  jurisdiction: Jurisdiction
): Date {
  const dateDMY = getDayMonthYear(date);
  date = new Date(dateDMY.year, dateDMY.month, dateDMY.day, 0, 0, 0, 0);

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
        throw new Error(`invalid jurisdiction: ${jurisdiction}`);
    }

    current.setDate(current.getDate() + 1);
  }

  return current;
}
