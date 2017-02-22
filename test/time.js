// test
import test from 'ava';
import {
  isAllAnyNot,
  isNotOnly
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/_groups/time';

const sleep = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

test('if daylightSavingsTime will identify daylight savings dates correctly', (t) => {
  t.false(src.daylightSavingsTime());
  t.false(src.daylightSavingsTime('foo'));

  const daylightSavings = new Date(2016, 3, 5);
  const notDaylightSavings = new Date(2016, 0, 5);

  t.true(src.daylightSavingsTime(daylightSavings));
  t.false(src.daylightSavingsTime(notDaylightSavings));
});

isAllAnyNot(all, any, not, 'daylightSavingsTime');

test('if day will correctly identify the numeric day of week', (t) => {
  t.false(src.day());

  const monday = new Date(2017, 1, 20);
  const randomMonday = new Date(2016, 6, 18);
  const randomFriday = new Date(2015, 9, 23);

  t.false(src.day(monday));

  t.true(src.day(monday, randomMonday.getDay()));
  t.false(src.day(monday, randomFriday.getDay()));
});

test('if day will correctly identify the string day of week', (t) => {
  t.false(src.day());

  const monday = new Date(2017, 1, 20);

  t.false(src.day(monday));

  t.true(src.day(monday, 'Monday'));
  t.false(src.day(monday, 'Friday'));
});

isNotOnly(all, any, not, 'day');

test('if future will validate the future correct', async (t) => {
  t.false(src.future());

  const future = new Date(Date.now() + 10);

  t.true(src.future(future));

  await sleep(100);

  t.false(src.future(future));
});

isAllAnyNot(all, any, not, 'future');

test('if inDateRange will identify if the first parameter is between the second and third parameters', (t) => {
  t.false(src.inDateRange());
  t.false(src.inDateRange('foo'));

  const date = new Date(2016, 3, 5);

  t.false(src.inDateRange(date));

  const minimumDate = new Date(2016, 0, 1);

  t.false(src.inDateRange(date, minimumDate));

  const maximumDate = new Date(2016, 6, 1);

  t.true(src.inDateRange(date, minimumDate, maximumDate));
  t.true(src.inDateRange(date, date, date));

  t.false(src.inDateRange(minimumDate, date, maximumDate));
  t.false(src.inDateRange(maximumDate, date, minimumDate));
});

isNotOnly(all, any, not, 'inDateRange');

test('if inLastMonth will identify if a date is within the last month', async (t) => {
  t.false(src.inLastMonth());
  t.false(src.inLastMonth('foo'));

  const today = new Date();

  await sleep(100);

  const sevenDaysAgo = new Date(new Date(today).setDate(today.getDate() - 7) + 1000);
  const sevenDaysFromNow = new Date(new Date(today).setDate(today.getDate() + 7) - 1000);
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1) + 1000);
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1) - 1000);
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1) + 1000);
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1) - 1000);

  t.true(src.inLastMonth(today));
  t.true(src.inLastMonth(sevenDaysAgo));
  t.false(src.inLastMonth(sevenDaysFromNow));
  t.true(src.inLastMonth(oneMonthAgo));
  t.false(src.inLastMonth(oneMonthFromNow));
  t.false(src.inLastMonth(oneYearAgo));
  t.false(src.inLastMonth(oneYearFromNow));
});

isAllAnyNot(all, any, not, 'inLastMonth');

test('if inLastWeek will identify if a date is within the last month', async (t) => {
  t.false(src.inLastWeek());
  t.false(src.inLastWeek('foo'));

  const today = new Date();

  await sleep(100);

  const sevenDaysAgo = new Date(new Date(today).setDate(today.getDate() - 7) + 1000);
  const sevenDaysFromNow = new Date(new Date(today).setDate(today.getDate() + 7) - 1000);
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1) + 1000);
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1) - 1000);
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1) + 1000);
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1) - 1000);

  t.true(src.inLastWeek(today));
  t.true(src.inLastWeek(sevenDaysAgo));
  t.false(src.inLastWeek(sevenDaysFromNow));
  t.false(src.inLastWeek(oneMonthAgo));
  t.false(src.inLastWeek(oneMonthFromNow));
  t.false(src.inLastWeek(oneYearAgo));
  t.false(src.inLastWeek(oneYearFromNow));
});

isAllAnyNot(all, any, not, 'inLastWeek');

test('if inLastYear will identify if a date is within the last year', async (t) => {
  t.false(src.inLastYear());
  t.false(src.inLastYear('foo'));

  const today = new Date();

  await sleep(100);

  const sevenDaysAgo = new Date(new Date(today).setDate(today.getDate() - 7) + 1000);
  const sevenDaysFromNow = new Date(new Date(today).setDate(today.getDate() + 7) - 1000);
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1) + 1000);
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1) - 1000);
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1) + 1000);
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1) - 1000);

  t.true(src.inLastYear(today));
  t.true(src.inLastYear(sevenDaysAgo));
  t.false(src.inLastYear(sevenDaysFromNow));
  t.true(src.inLastYear(oneMonthAgo));
  t.false(src.inLastYear(oneMonthFromNow));
  t.true(src.inLastYear(oneYearAgo));
  t.false(src.inLastYear(oneYearFromNow));
});

isAllAnyNot(all, any, not, 'inLastYear');

test('if inNextMonth will identify if a date is within the next month', async (t) => {
  t.false(src.inNextMonth());
  t.false(src.inNextMonth('foo'));

  const today = new Date();

  await sleep(100);

  const sevenDaysAgo = new Date(new Date(today).setDate(today.getDate() - 7) + 1000);
  const sevenDaysFromNow = new Date(new Date(today).setDate(today.getDate() + 7) - 1000);
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1) + 1000);
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1) - 1000);
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1) + 1000);
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1) - 1000);

  t.false(src.inNextMonth(today));
  t.false(src.inNextMonth(sevenDaysAgo));
  t.true(src.inNextMonth(sevenDaysFromNow));
  t.false(src.inNextMonth(oneMonthAgo));
  t.true(src.inNextMonth(oneMonthFromNow));
  t.false(src.inNextMonth(oneYearAgo));
  t.false(src.inNextMonth(oneYearFromNow));
});

isAllAnyNot(all, any, not, 'inNextMonth');

test('if inNextWeek will identify if a date is within the next week', async (t) => {
  t.false(src.inNextWeek());
  t.false(src.inNextWeek('foo'));

  const today = new Date();

  await sleep(100);

  const sevenDaysAgo = new Date(new Date(today).setDate(today.getDate() - 7) + 1000);
  const sevenDaysFromNow = new Date(new Date(today).setDate(today.getDate() + 7) - 1000);
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1) + 1000);
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1) - 1000);
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1) + 1000);
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1) - 1000);

  t.false(src.inNextWeek(today));
  t.false(src.inNextWeek(sevenDaysAgo));
  t.true(src.inNextWeek(sevenDaysFromNow));
  t.false(src.inNextWeek(oneMonthAgo));
  t.false(src.inNextWeek(oneMonthFromNow));
  t.false(src.inNextWeek(oneYearAgo));
  t.false(src.inNextWeek(oneYearFromNow));
});

isAllAnyNot(all, any, not, 'inNextWeek');

test('if inNextYear will identify if a date is within the next year', async (t) => {
  t.false(src.inNextYear());
  t.false(src.inNextYear('foo'));

  const today = new Date();

  await sleep(100);

  const sevenDaysAgo = new Date(new Date(today).setDate(today.getDate() - 7) + 1000);
  const sevenDaysFromNow = new Date(new Date(today).setDate(today.getDate() + 7) - 1000);
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1) + 1000);
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1) - 1000);
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1) + 1000);
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1) - 1000);

  t.false(src.inNextYear(today));
  t.false(src.inNextYear(sevenDaysAgo));
  t.true(src.inNextYear(sevenDaysFromNow));
  t.false(src.inNextYear(oneMonthAgo));
  t.true(src.inNextYear(oneMonthFromNow));
  t.false(src.inNextYear(oneYearAgo));
  t.true(src.inNextYear(oneYearFromNow));
});

isAllAnyNot(all, any, not, 'inNextYear');

test('if inQuarter will test if the date is in the passed quarter of the year', (t) => {
  t.false(src.inQuarter());
  t.false(src.inQuarter('foo'));

  const date = new Date(2017, 2, 15);

  t.false(src.inQuarter(date));

  t.false(src.inQuarter(date, 1));
  t.true(src.inQuarter(date, 2));
  t.false(src.inQuarter(date, 3));
  t.false(src.inQuarter(date, 4));
});

isNotOnly(all, any, not, 'inQuarter');

test('if leapYear will correctly test if the year passed is a leap year', (t) => {
  t.false(src.leapYear());
  t.false(src.leapYear('foo'));

  t.true(src.leapYear(2016));
  t.false(src.leapYear(2015));
  t.false(src.leapYear(2100));
});

test('if leapYear will correctly test if the date passed is in a leap year', (t) => {
  t.false(src.leapYear());
  t.false(src.leapYear('foo'));

  const y2016 = new Date(2016, 0, 1);
  const y2015 = new Date(2015, 0, 1);
  const y2100 = new Date(2100, 0, 1);

  t.true(src.leapYear(y2016));
  t.false(src.leapYear(y2015));
  t.false(src.leapYear(y2100));
});

isAllAnyNot(all, any, not, 'leapYear');

test('if month will correctly identify the numeric month of year', (t) => {
  t.false(src.month());
  t.false(src.month('foo'));

  const march = new Date(2017, 2, 20);
  const otherMarch = new Date(2013, 2, 18);
  const september = new Date(2015, 8, 23);

  t.false(src.month(march));

  t.true(src.month(march, otherMarch.getMonth()));
  t.false(src.month(march, september.getMonth()));
});

test('if month will correctly identify the string month of year', (t) => {
  const march = new Date(2017, 2, 20);

  t.false(src.month(march));

  t.true(src.month(march, 'March'));
  t.false(src.month(march, 'September'));
});

isNotOnly(all, any, not, 'month');

test('if past will validate the past correct', async (t) => {
  t.false(src.past());

  const future = new Date(Date.now() + 10);

  t.false(src.past(future));

  await sleep(100);

  t.true(src.past(future));
});

isAllAnyNot(all, any, not, 'past');

test('if sameDate will identify the same calendar date correctly', (t) => {
  t.false(src.sameDate());
  t.false(src.sameDate('foo'));

  const feb20 = new Date(2017, 1, 20, 15, 34, 29);
  const otherFeb20 = new Date(2017, 1, 20, 3, 22, 17);
  const feb12 = new Date(2017, 1, 21);

  t.false(src.sameDate(feb20));

  t.true(src.sameDate(feb20, otherFeb20));
  t.false(src.sameDate(feb20, feb12));
});

isNotOnly(all, any, not, 'sameDate');

test('if sameDay will identify the same day of week correctly', (t) => {
  t.false(src.sameDay());
  t.false(src.sameDay('foo'));

  const monday = new Date(2017, 1, 20);
  const randomMonday = new Date(2016, 6, 18);
  const randomFriday = new Date(2015, 9, 23);

  t.false(src.sameDay(monday));

  t.true(src.sameDay(monday, randomMonday));
  t.false(src.sameDay(monday, randomFriday));
});

isNotOnly(all, any, not, 'sameDay');

test('if sameMonth will identify the same month of year correctly', (t) => {
  t.false(src.sameMonth());
  t.false(src.sameMonth('foo'));

  const march = new Date(2017, 2, 20);
  const otherMarch = new Date(2013, 2, 18);
  const september = new Date(2015, 8, 23);

  t.false(src.sameMonth(march));

  t.true(src.sameMonth(march, otherMarch));
  t.false(src.sameMonth(march, september));
});

isNotOnly(all, any, not, 'sameMonth');

test('if sameYear will identify the same year correctly', (t) => {
  t.false(src.sameYear());
  t.false(src.sameYear('foo'));

  const y2015 = new Date(2015, 2, 20);
  const otherY2015 = new Date(2015, 9, 18);
  const y2017 = new Date(2017, 8, 23);

  t.false(src.sameYear(y2015));

  t.true(src.sameYear(y2015, otherY2015));
  t.false(src.sameYear(y2015, y2017));
});

isNotOnly(all, any, not, 'sameYear');

test('if today will correctly identify the date as today', (t) => {
  t.false(src.today());
  t.false(src.today('foo'));

  const today = new Date();
  const yesterday = new Date((new Date()).setDate(today.getDate() - 1));
  const tomorrow = new Date((new Date()).setDate(today.getDate() + 1));

  t.true(src.today(today));
  t.false(src.today(yesterday));
  t.false(src.today(tomorrow));
});

isAllAnyNot(all, any, not, 'today');

test('if tomorrow will correctly identify the date as tomorrow', (t) => {
  t.false(src.tomorrow());
  t.false(src.tomorrow('foo'));

  const today = new Date();
  const yesterday = new Date((new Date()).setDate(today.getDate() - 1));
  const tomorrow = new Date((new Date()).setDate(today.getDate() + 1));

  t.false(src.tomorrow(today));
  t.false(src.tomorrow(yesterday));
  t.true(src.tomorrow(tomorrow));
});

isAllAnyNot(all, any, not, 'tomorrow');

test('if date passed falls on a weekday', (t) => {
  t.false(src.weekday());
  t.false(src.weekday('foo'));

  const sunday = new Date(2017, 2, 19);
  const monday = new Date(2017, 2, 20);
  const tuesday = new Date(2017, 2, 21);
  const wednesday = new Date(2017, 2, 22);
  const thursday = new Date(2017, 2, 23);
  const friday = new Date(2017, 2, 24);
  const saturday = new Date(2017, 2, 25);

  t.false(src.weekday(sunday));
  t.true(src.weekday(monday));
  t.true(src.weekday(tuesday));
  t.true(src.weekday(wednesday));
  t.true(src.weekday(thursday));
  t.true(src.weekday(friday));
  t.false(src.weekday(saturday));
});

isAllAnyNot(all, any, not, 'weekday');

test('if date passed falls on a weekend', (t) => {
  t.false(src.weekend());
  t.false(src.weekend('foo'));

  const sunday = new Date(2017, 2, 19);
  const monday = new Date(2017, 2, 20);
  const tuesday = new Date(2017, 2, 21);
  const wednesday = new Date(2017, 2, 22);
  const thursday = new Date(2017, 2, 23);
  const friday = new Date(2017, 2, 24);
  const saturday = new Date(2017, 2, 25);

  t.true(src.weekend(sunday));
  t.false(src.weekend(monday));
  t.false(src.weekend(tuesday));
  t.false(src.weekend(wednesday));
  t.false(src.weekend(thursday));
  t.false(src.weekend(friday));
  t.true(src.weekend(saturday));
});

isAllAnyNot(all, any, not, 'weekend');

test('if year will correctly identify the year', (t) => {
  t.false(src.year());
  t.false(src.year('foo'));

  const y2017 = new Date(2017, 2, 20);
  const otherY2017 = new Date(2017, 7, 18);
  const y2015 = new Date(2015, 8, 23);

  t.false(src.year(y2017));

  t.true(src.year(y2017, otherY2017.getFullYear()));
  t.false(src.year(y2017, y2015.getFullYear()));
});

isNotOnly(all, any, not, 'year');

test('if yesterday will correctly identify the date as yesterday', (t) => {
  t.false(src.yesterday());
  t.false(src.yesterday('foo'));

  const today = new Date();
  const yesterday = new Date((new Date()).setDate(today.getDate() - 1));
  const tomorrow = new Date((new Date()).setDate(today.getDate() + 1));

  t.false(src.yesterday(today));
  t.true(src.yesterday(yesterday));
  t.false(src.yesterday(tomorrow));
});

isAllAnyNot(all, any, not, 'yesterday');
