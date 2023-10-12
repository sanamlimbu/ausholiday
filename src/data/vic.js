// Holidays current year
const currentYear = [
  { date: "2023/01/01", description: "New Year's Day" },
  { date: "2023/01/02", description: "New Year's Day (additional day)" },
  { date: "2023/01/26", description: "Australia Day" },
  { date: "2023/03/13", description: "Labour Day" },
  { date: "2023/04/07", description: "Good Friday" },
  { date: "2023/04/08", description: "Saturday before Easter Sunday" },
  { date: "2023/04/09", description: "Easter Sunday" },
  { date: "2023/04/10", description: "Easter Monday" },
  { date: "2023/04/25", description: "ANZAC Day" },
  { date: "2023/06/12", description: "King's Birthday" },
  { date: "2023/09/29", description: "Friday before the AFL Grand Final" },
  { date: "2023/11/07", description: "Melbourne Cup" },
  { date: "2023/12/25", description: "Christmas Day" },
  { date: "2023/12/26", description: "Boxing Day" },
];

// Holidays next year
const nextYear = [
  { date: "2024/01/01", description: "New Year's Day" },
  { date: "2024/01/26", description: "Australia Day" },
  { date: "2024/03/11", description: "Labour Day" },
  { date: "2024/03/29", description: "Good Friday" },
  { date: "2024/03/30", description: "Saturday before Easter Sunday" },
  { date: "2024/03/31", description: "Easter Sunday" },
  { date: "2024/04/01", description: "Easter Monday" },
  { date: "2024/04/25", description: "ANZAC Day" },
  { date: "2024/06/10", description: "King's Birthday" },
  { date: "2024/09/27", description: "Friday before the AFL Grand Final" },
  { date: "2024/11/05", description: "Melbourne Cup" },
  { date: "2024/12/25", description: "Christmas Day" },
  { date: "2024/12/26", description: "Boxing Day" },
];

// Holidays year after next
const yearAfterNext = [
  { date: "2025/01/01", description: "New Year's Day" },
  { date: "2025/01/27", description: "Australia Day" },
  { date: "2025/03/10", description: "Labour Day" },
  { date: "2025/04/18", description: "Good Friday" },
  { date: "2025/04/19", description: "Saturday before Easter Sunday" },
  { date: "2025/04/20", description: "Easter Sunday" },
  { date: "2025/04/21", description: "Easter Monday" },
  { date: "2025/04/25", description: "ANZAC Day" },
  { date: "2025/06/09", description: "King's Birthday" },
  { date: "2025/09/26", description: "Friday before the AFL Grand Final" },
  { date: "2025/11/04", description: "Melbourne Cup" },
  { date: "2025/12/25", description: "Christmas Day" },
  { date: "2025/12/26", description: "Boxing Day" },
];

const vicHolidays = {
  currentYear,
  nextYear,
  yearAfterNext,
};

export default vicHolidays;
