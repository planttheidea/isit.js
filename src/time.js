// time
import * as daylightSavingsTime from './isitDaylightSavingsTime';
import * as dayOfWeek from './isitDayOfWeek';
import * as future from './isitFuture';
import * as inDateRange from './isitInDateRange';
import * as inLastMonth from './isitInLastMonth';
import * as inLastWeek from './isitInLastWeek';
import * as inLastYear from './isitInLastYear';
import * as inNextMonth from './isitInNextMonth';
import * as inNextWeek from './isitInNextWeek';
import * as inNextYear from './isitInNextYear';
import * as inQuarter from './isitInQuarter';
import * as leapYear from './isitLeapYear';
import * as past from './isitPast';
import * as sameDate from './isitSameDate';
import * as sameDay from './isitSameDay';
import * as sameMonth from './isitSameMonth';
import * as sameYear from './isitSameYear';
import * as today from './isitToday';
import * as tomorrow from './isitTomorrow';
import * as weekday from './isitWeekday';
import * as weekend from './isitWeekend';
import * as yesterday from './isitYesterday';

export const all = {
  daylightSavingsTime: daylightSavingsTime.isitAllDaylightSavingsTime,
  future: future.isitAllFuture,
  inLastMonth: inLastMonth.isitAllInLastMonth,
  inLastWeek: inLastWeek.isitAllInLastWeek,
  inLastYear: inLastYear.isitAllInLastYear,
  inNextMonth: inNextMonth.isitAllInNextMonth,
  inNextWeek: inNextWeek.isitAllInNextWeek,
  inNextYear: inNextYear.isitAllInNextYear,
  leapYear: leapYear.isitAllLeapYear,
  past: past.isitAllPast,
  today: today.isitAllToday,
  tomorrow: tomorrow.isitAllTomorrow,
  weekday: weekday.isitAllWeekday,
  weekend: weekend.isitAllWeekend,
  yesterday: yesterday.isitAllYesterday
};

export const any = {
  daylightSavingsTime: daylightSavingsTime.isitAnyDaylightSavingsTime,
  future: future.isitAnyFuture,
  inLastMonth: inLastMonth.isitAnyInLastMonth,
  inLastWeek: inLastWeek.isitAnyInLastWeek,
  inLastYear: inLastYear.isitAnyInLastYear,
  inNextMonth: inNextMonth.isitAnyInNextMonth,
  inNextWeek: inNextWeek.isitAnyInNextWeek,
  inNextYear: inNextYear.isitAnyInNextYear,
  leapYear: leapYear.isitAnyLeapYear,
  past: past.isitAnyPast,
  today: today.isitAnyToday,
  tomorrow: tomorrow.isitAnyTomorrow,
  weekday: weekday.isitAnyWeekday,
  weekend: weekend.isitAnyWeekend,
  yesterday: yesterday.isitAnyYesterday
};

export const not = {
  daylightSavingsTime: daylightSavingsTime.isitNotDaylightSavingsTime,
  dayOfWeek: dayOfWeek.isitNotDayOfWeek,
  future: future.isitNotFuture,
  inDateRange: inDateRange.isitNotInDateRange,
  inLastMonth: inLastMonth.isitNotInLastMonth,
  inLastWeek: inLastWeek.isitNotInLastWeek,
  inLastYear: inLastYear.isitNotInLastYear,
  inNextMonth: inNextMonth.isitNotInNextMonth,
  inNextWeek: inNextWeek.isitNotInNextWeek,
  inNextYear: inNextYear.isitNotInNextYear,
  inQuarter: inQuarter.isitNotInQuarter,
  leapYear: leapYear.isitNotLeapYear,
  past: past.isitNotPast,
  sameDate: sameDate.isitNotSameDate,
  sameDay: sameDay.isitNotSameDay,
  sameMonth: sameMonth.isitNotSameMonth,
  sameYear: sameYear.isitNotSameYear,
  today: today.isitNotToday,
  tomorrow: tomorrow.isitNotTomorrow,
  weekday: weekday.isitNotWeekday,
  weekend: weekend.isitNotWeekend,
  yesterday: yesterday.isitNotYesterday
};

export default {
  daylightSavingsTime: daylightSavingsTime.default,
  dayOfWeek: dayOfWeek.default,
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
  past: past.default,
  sameDate: sameDate.default,
  sameDay: sameDay.default,
  sameMonth: sameMonth.default,
  sameYear: sameYear.default,
  today: today.default,
  tomorrow: tomorrow.default,
  weekday: weekday.default,
  weekend: weekend.default,
  yesterday: yesterday.default
};
