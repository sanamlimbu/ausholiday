## ausholiday

`ausholiday` package provides a set of utility functions that handles Australian public holidays.

**Note: Package only handles last year, current year and next year Australian public holidays.**

## Installation

```
npm install ausholiday
```

## Functions

- `isPublicHoliday` - Determines whether a given date is a public holiday in the specified jurisdiction.
- `numberOfPublicHolidays` - Calculates total number of public holidays between the specified start and end dates, inclusive.
- `numberOfWorkingDays` - Calculates number of working days between the specified start and end dates, inclusive.
- `numberOfWeekDays` - Calculates number of weekdays (Monday to Friday) between the specified start and end dates, inclusive.
- `isTherePublicHoliday` - Checks if there is a public holiday between the given start and end dates (inclusive) for a specified jurisdiction.
- `dateAfterWorkingDays` - Calculates the date after adding a specified number of working days to a given date, considering weekends and public holidays specific to a jurisdiction.
- `isWeekEnd` - Determines whether the given date falls on a weekend (Saturday or Sunday).
