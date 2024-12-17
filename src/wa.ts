import { PublicHoliday } from './types';

enum WAOnlyPublicHoliday {
  EasterSunday = 'Easter Sunday',
  WesternAustraliaDay = 'Western Australia Day',
}

type WAPublicHoliday = PublicHoliday | WAOnlyPublicHoliday;

export const WAPublicHolidays = new Map<string, WAPublicHoliday>([
  // 2025
  ['1/1/2025', PublicHoliday.NewYearDay],
  ['27/1/2025', PublicHoliday.AustraliaDay],
  ['3/3/2025', PublicHoliday.LabourDay],
  ['18/4/2025', PublicHoliday.GoodFriday],
  ['20/4/2025', WAOnlyPublicHoliday.EasterSunday],
  ['21/4/2025', PublicHoliday.EasterMonday],
  ['25/4/2025', PublicHoliday.AnzacDay],
  ['2/6/2025', WAOnlyPublicHoliday.WesternAustraliaDay],
  ['29/9/2025', PublicHoliday.KingBirthday],
  ['25/12/2025', PublicHoliday.ChristmasDay],
  ['26/12/2025', PublicHoliday.Boxingday],
  // 2026
  ['1/1/2026', PublicHoliday.NewYearDay],
  ['26/1/2026', PublicHoliday.AustraliaDay],
  ['2/3/2026', PublicHoliday.LabourDay],
  ['3/4/2026', PublicHoliday.GoodFriday],
  ['5/4/2026', WAOnlyPublicHoliday.EasterSunday],
  ['6/4/2026', PublicHoliday.EasterMonday],
  ['25/4/2026', PublicHoliday.AnzacDay],
  ['27/4/2026', PublicHoliday.AnzacDay],
  ['1/6/2026', WAOnlyPublicHoliday.WesternAustraliaDay],
  ['28/9/2026', PublicHoliday.KingBirthday],
  ['25/12/2026', PublicHoliday.ChristmasDay],
  ['26/12/2026', PublicHoliday.Boxingday],
  ['28/12/2026', PublicHoliday.Boxingday],
]);
