import { dateAfterWorkingDays, isPublicHoliday, isWeekend } from "../src";

describe("test public holiday", () => {
  test("2023/09/25 is public holiday", () => {
    expect(isPublicHoliday(new Date("2023/09/25"), "wa")).toBe(true);
  });
  test("2025/12/26 is public holiday", () => {
    expect(isPublicHoliday(new Date("2025/12/26"), "wa")).toBe(true);
  });
  test("2024/03/31 is public holiday", () => {
    expect(isPublicHoliday(new Date("2024/03/31"), "wa")).toBe(true);
  });

  test("2024/03/23 is not public holiday", () => {
    expect(isPublicHoliday(new Date("2024/03/23"), "wa")).toBe(false);
  });
  test("2025/03/7 is not public holiday", () => {
    expect(isPublicHoliday(new Date("2025/03/07"), "wa")).toBe(false);
  });
});

describe("test weekends", () => {
  test("2023/10/07 is weekend", () => {
    expect(isWeekend(new Date("2023/10/07"))).toBe(true);
  });

  test("2023/10/22 is weekend", () => {
    expect(isWeekend(new Date("2023/10/22"))).toBe(true);
  });

  test("2023/10/11 is not weekend", () => {
    expect(isWeekend(new Date("2023/10/11"))).toBe(false);
  });

  test("2023/10/04 is not weekend", () => {
    expect(isWeekend(new Date("2023/10/04"))).toBe(false);
  });
});

describe("test dates after no of working days", () => {
  test("10 workings after 2023/09/18", () => {
    expect(
      dateAfterWorkingDays(new Date("2023/09/18"), "wa", 10).toDateString()
    ).toBe(new Date("2023/10/03").toDateString());
  });

  test("5 workings after 2023/09/18", () => {
    expect(
      dateAfterWorkingDays(new Date("2023/09/18"), "wa", 5).toDateString()
    ).toBe(new Date("2023/09/26").toDateString());
  });

  test("20 working days after 2023/12/20", () => {
    expect(
      dateAfterWorkingDays(new Date("2023/12/20"), "wa", 20).toDateString()
    ).toBe(new Date("2024/01/22").toDateString());
  });

  test("20 working days after 2023/12/15", () => {
    expect(
      dateAfterWorkingDays(new Date("2023/12/15"), "wa", 20).toDateString()
    ).toBe(new Date("2024/01/17").toDateString());
  });
});
