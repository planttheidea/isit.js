// time
import * as daylightSavingsTime from '../daylightSavingsTime';
import * as day from '../day';
import * as future from '../future';
import * as inDateRange from '../inDateRange';
import * as inLastMonth from '../inLastMonth';
import * as inLastWeek from '../inLastWeek';
import * as inLastYear from '../inLastYear';
import * as inNextMonth from '../inNextMonth';
import * as inNextWeek from '../inNextWeek';
import * as inNextYear from '../inNextYear';
import * as inQuarter from '../inQuarter';
import * as leapYear from '../leapYear';
import * as month from '../month';
import * as past from '../past';
import * as sameDate from '../sameDate';
import * as sameDay from '../sameDay';
import * as sameMonth from '../sameMonth';
import * as sameYear from '../sameYear';
import * as today from '../today';
import * as tomorrow from '../tomorrow';
import * as weekday from '../weekday';
import * as weekend from '../weekend';
import * as year from '../year';
import * as yesterday from '../yesterday';

export const all = {
  daylightSavingsTime: daylightSavingsTime.isAllDaylightSavingsTime,
  future: future.isAllFuture,
  inLastMonth: inLastMonth.isAllInLastMonth,
  inLastWeek: inLastWeek.isAllInLastWeek,
  inLastYear: inLastYear.isAllInLastYear,
  inNextMonth: inNextMonth.isAllInNextMonth,
  inNextWeek: inNextWeek.isAllInNextWeek,
  inNextYear: inNextYear.isAllInNextYear,
  leapYear: leapYear.isAllLeapYear,
  past: past.isAllPast,
  today: today.isAllToday,
  tomorrow: tomorrow.isAllTomorrow,
  weekday: weekday.isAllWeekday,
  weekend: weekend.isAllWeekend,
  yesterday: yesterday.isAllYesterday
};

export const any = {
  daylightSavingsTime: daylightSavingsTime.isAnyDaylightSavingsTime,
  future: future.isAnyFuture,
  inLastMonth: inLastMonth.isAnyInLastMonth,
  inLastWeek: inLastWeek.isAnyInLastWeek,
  inLastYear: inLastYear.isAnyInLastYear,
  inNextMonth: inNextMonth.isAnyInNextMonth,
  inNextWeek: inNextWeek.isAnyInNextWeek,
  inNextYear: inNextYear.isAnyInNextYear,
  leapYear: leapYear.isAnyLeapYear,
  past: past.isAnyPast,
  today: today.isAnyToday,
  tomorrow: tomorrow.isAnyTomorrow,
  weekday: weekday.isAnyWeekday,
  weekend: weekend.isAnyWeekend,
  yesterday: yesterday.isAnyYesterday
};

export const not = {
  daylightSavingsTime: daylightSavingsTime.isNotDaylightSavingsTime,
  day: day.isNotDay,
  future: future.isNotFuture,
  inDateRange: inDateRange.isNotInDateRange,
  inLastMonth: inLastMonth.isNotInLastMonth,
  inLastWeek: inLastWeek.isNotInLastWeek,
  inLastYear: inLastYear.isNotInLastYear,
  inNextMonth: inNextMonth.isNotInNextMonth,
  inNextWeek: inNextWeek.isNotInNextWeek,
  inNextYear: inNextYear.isNotInNextYear,
  inQuarter: inQuarter.isNotInQuarter,
  leapYear: leapYear.isNotLeapYear,
  month: month.isNotMonth,
  past: past.isNotPast,
  sameDate: sameDate.isNotSameDate,
  sameDay: sameDay.isNotSameDay,
  sameMonth: sameMonth.isNotSameMonth,
  sameYear: sameYear.isNotSameYear,
  today: today.isNotToday,
  tomorrow: tomorrow.isNotTomorrow,
  weekday: weekday.isNotWeekday,
  weekend: weekend.isNotWeekend,
  year: year.isNotYear,
  yesterday: yesterday.isNotYesterday
};

export default {
  daylightSavingsTime: daylightSavingsTime.default,
  day: day.default,
  future: future.default,
  inDateRange: inDateRange.default,
  inLastMonth: inLastMonth.default,
  inLastWeek: inLastWeek.default,
  inLastYear: inLastYear.default,
  inNextMonth: inNextMonth.default,
  inNextWeek: inNextWeek.default,
  inNextYear: inNextYear.default,
  inQuarter: inQuarter.default,
  leapYear: leapYear.default,
  month: month.default,
  past: past.default,
  sameDate: sameDate.default,
  sameDay: sameDay.default,
  sameMonth: sameMonth.default,
  sameYear: sameYear.default,
  today: today.default,
  tomorrow: tomorrow.default,
  weekday: weekday.default,
  weekend: weekend.default,
  year: year.default,
  yesterday: yesterday.default
};
