import type { TimeObj, TimeObjTexts } from "./countdown.types";

const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

export const getDatesDiffInSeconds = (startDate: Date, endDate: Date): number => {
  const diffInMilliseconds = endDate.valueOf() - startDate.valueOf();
  if (diffInMilliseconds <= 0) {
    console.error("startDate cannot be equal to or bigger than endDate");
    return 0;
  }
  return diffInMilliseconds / 1000;
};

export const secondsToPlaces = (seconds: number): TimeObj => {
  const days = Math.floor(seconds / SECONDS_IN_DAY);
  const hours = Math.floor((seconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const minutes = Math.floor(((seconds % SECONDS_IN_DAY) % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const sec = Math.floor(((seconds % SECONDS_IN_DAY) % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE);
  return { days, hours, minutes, seconds: sec };
};

export const getCountdownTexts = (countdown: TimeObj) => {
  const texts: TimeObjTexts = {
    days: "dia",
    hours: "hora",
    minutes: "minuto",
    seconds: "segundo",
  };
  Object.keys(countdown).forEach((key) => {
    texts[key as keyof typeof countdown] +=
      countdown[key as keyof typeof countdown] === 1 ? "" : "s";
  });

  return texts;
};

const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const daysInMonth = (month: number) => {
  const febDays = isLeapYear(new Date().getFullYear()) ? 29 : 28;
  return [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

export const getTomorrowDateAsString = (time = "00:00") => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const isLastDayOfMonth = day === daysInMonth(month);
  const isLastMonthOfYear = month === 11;

  if (isLastDayOfMonth && isLastMonthOfYear) {
    return `${String(year + 1)}-01-01T${time}`;
  }

  if (isLastDayOfMonth && !isLastMonthOfYear) {
    return `${String(year)}-${String(month + 2).padStart(2, "0")}-01T${time}`;
  }

  return `${String(year)}-${String(month + 1).padStart(2, "0")}-${String(day + 1).padStart(
    2,
    "0"
  )}T${time}`;
};
