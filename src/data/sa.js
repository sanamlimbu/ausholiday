// Holidays current year
const currentYear = [
  { date: "2023/01/01", description: "New Year's Day" },
  { date: "2023/01/02", description: "New Year's Day (additional day)" },
  { date: "2023/01/26", description: "Australia Day" },
  { date: "2023/03/13", description: "Adelaide Cup Day" },
  { date: "2023/04/07", description: "Good Friday" },
  { date: "2023/04/08", description: "Easter Saturday" },
  { date: "2023/04/10", description: "Easter Monday" },
  { date: "2023/04/25", description: "Anzac Day" },
  { date: "2023/06/12", description: "King's Birthday" },
  { date: "2023/10/02", description: "Labour Day" },
  { date: "2023/12/25", description: "Christmas Day" },
  {
    date: "2023/12/26",
    description: "Proclamation Day public holiday and Boxing Day",
  },
];

// Holidays next year
const nextYear = [
  { date: "2024/01/01", description: "New Year's Day" },
  { date: "2024/01/26", description: "Australia Day" },
  {
    date: "2024/03/11",
    description: "Adelaide Cup Day (subject to Proclamation)",
  },
  { date: "2024/03/29", description: "Good Friday" },
  { date: "2024/03/30", description: "Easter Saturday" },
  { date: "2024/04/01", description: "Easter Monday" },
  { date: "2024/04/25", description: "Anzac Day" },
  { date: "2024/06/10", description: "King's Birthday" },
  { date: "2024/10/07", description: "Labour Day" },
  { date: "2024/12/25", description: "Christmas Day" },
  {
    date: "2024/12/26",
    description: "Proclamation Day public holiday and Boxing Day",
  },
];

// Holidays year after next
const yearAfterNext = [
  { date: "2025/01/01", description: "New Year's Day" },
  { date: "2025/01/26", description: "Australia Day" },
  { date: "2025/01/27", description: "Australia Day (additional day)" },
  {
    date: "2025/03/10",
    description: "Adelaide Cup Day (subject to Proclamation)",
  },
  { date: "2025/04/18", description: "Good Friday" },
  { date: "2025/04/19", description: "Easter Saturday" },
  { date: "2025/04/21", description: "Easter Monday" },
  { date: "2025/04/25", description: "Anzac Day" },
  { date: "2025/06/09", description: "King's Birthday" },
  { date: "2025/10/06", description: "Labour Day" },
  { date: "2025/12/25", description: "Christmas Day" },
  {
    date: "2025/12/26",
    description: "Proclamation Day public holiday and Boxing Day",
  },
];

const saHolidays = {
  currentYear,
  nextYear,
  yearAfterNext,
};

export default saHolidays;
