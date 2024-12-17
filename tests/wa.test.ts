import { isPublicHoliday } from '../src';
import { Jurisdiction } from '../src/types';

const jurisdiction = Jurisdiction.WA;
const date = new Date('2025-01-01');

const currentYear = date.getFullYear();
const nextYear = currentYear + 1;

describe('isPublicHoliday in WA', () => {
  it(`New Year's Day ${currentYear}`, () => {
    const result = isPublicHoliday(
      new Date(`${currentYear}-01-01`),
      jurisdiction
    );
    expect(result).toBe(true);
  });

  it(`New Year's Day ${nextYear}`, () => {
    const result = isPublicHoliday(new Date(`${nextYear}-01-01`), jurisdiction);
    expect(result).toBe(true);
  });
});
