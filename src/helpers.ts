export function getKey(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}/${month}/${year}`;
}

export function getDayMonthYear(date: Date): {
  day: number;
  month: number;
  year: number;
} {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return {
    day,
    month,
    year,
  };
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();

  if (day === 0 || day === 6) {
    return true;
  }

  return false;
}
