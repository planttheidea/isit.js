import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitDay', (t) => {
    t.plan(7);

    testTypeOf(t, 'day');

    const date = new Date(2016, 3, 5);

    t.equal(isit.day(), false);
    t.equal(isit.day('string'), false);
    t.equal(isit.day(date, 'Tuesday'), true);
    t.equal(isit.day(date, 'Sunday'), false);

    t.equal(isit.not.day(date, 'Sunday'), true);
    t.equal(isit.not.day(date, 'Tuesday'), false);
});

test('isitDayLightSavingTime', (t) => {
    t.plan(11);

    testTypeOf(t, 'dayLightSavingTime');

    const daylightSavingsDate = new Date(2016, 3, 5);
    const notDaylightSavingsDate = new Date(2016, 0, 5);

    t.equal(isit.dayLightSavingTime(), false);
    t.equal(isit.daylightSavingsTime('string'), false);
    t.equal(isit.dayLightSavingTime(notDaylightSavingsDate), false);
    t.equal(isit.dayLightSavingTime(daylightSavingsDate), true);

    t.equal(isit.all.dayLightSavingTime(daylightSavingsDate, new Date(daylightSavingsDate)), true);
    t.equal(isit.all.dayLightSavingTime(daylightSavingsDate, notDaylightSavingsDate), false);
    t.equal(isit.any.dayLightSavingTime(daylightSavingsDate, notDaylightSavingsDate), true);
    t.equal(isit.any.dayLightSavingTime(new Date(notDaylightSavingsDate), notDaylightSavingsDate), false);
    t.equal(isit.not.dayLightSavingTime(new Date(notDaylightSavingsDate)), true);
    t.equal(isit.not.dayLightSavingTime(daylightSavingsDate), false);
});

test('isitDaylightSavingsTime', (t) => {
    t.plan(11);

    testTypeOf(t, 'daylightSavingsTime');

    const daylightSavingsDate = new Date(2016, 3, 5);
    const notDaylightSavingsDate = new Date(2016, 0, 5);

    t.equal(isit.daylightSavingsTime(), false);
    t.equal(isit.daylightSavingsTime('string'), false);
    t.equal(isit.daylightSavingsTime(notDaylightSavingsDate), false);
    t.equal(isit.daylightSavingsTime(daylightSavingsDate), true);

    t.equal(isit.all.daylightSavingsTime(daylightSavingsDate, new Date(daylightSavingsDate)), true);
    t.equal(isit.all.daylightSavingsTime(daylightSavingsDate, notDaylightSavingsDate), false);
    t.equal(isit.any.daylightSavingsTime(daylightSavingsDate, notDaylightSavingsDate), true);
    t.equal(isit.any.daylightSavingsTime(new Date(notDaylightSavingsDate), notDaylightSavingsDate), false);
    t.equal(isit.not.daylightSavingsTime(new Date(notDaylightSavingsDate)), true);
    t.equal(isit.not.daylightSavingsTime(daylightSavingsDate), false);
});

test('isitFuture', (t) => {
    t.plan(12);

    testTypeOf(t, 'future');

    const date = new Date(Date.now() + 1000);
    const futureDate = new Date((new Date()).setDate((new Date()).getDate() + 1));
    const pastDate = new Date((new Date()).setDate((new Date()).getDate() - 1));

    t.equal(isit.future(), false);
    t.equal(isit.future('test'), false);
    t.equal(isit.future(date), true);
    t.equal(isit.future(futureDate), true);
    t.equal(isit.future(pastDate), false);

    t.equal(isit.all.future(futureDate, new Date(Date.now() + 25000)), true);
    t.equal(isit.all.future(futureDate, new Date()), false);
    t.equal(isit.any.future(futureDate, new Date()), true);
    t.equal(isit.any.future(pastDate, new Date()), false);
    t.equal(isit.not.future(pastDate), true);
    t.equal(isit.not.future(futureDate), false);
});

test('isitInDateRange', (t) => {
    t.plan(13);

    testTypeOf(t, 'inDateRange');

    const date = new Date(2016, 3, 5);
    const minimumDate = new Date(2016, 0, 1);
    const maximumDate = new Date(2016, 6, 1);

    t.equal(isit.inDateRange(), false);
    t.equal(isit.inDateRange('string'), false);
    t.equal(isit.inDateRange('string', 'string'), false);
    t.equal(isit.inDateRange('string', 'string', 'string'), false);
    t.equal(isit.inDateRange('string', 'string', 'string'), false);
    t.equal(isit.inDateRange(date, minimumDate, maximumDate), true);
    t.equal(isit.inDateRange(minimumDate, minimumDate, maximumDate), true);
    t.equal(isit.inDateRange(maximumDate, minimumDate, maximumDate), true);
    t.equal(isit.inDateRange(maximumDate, minimumDate, date), false);
    t.equal(isit.inDateRange(minimumDate, date, maximumDate), false);

    t.equal(isit.not.inDateRange(maximumDate, minimumDate, date), true);
    t.equal(isit.not.inDateRange(maximumDate, minimumDate, maximumDate), false);
});

test('isitInLastMonth', (t) => {
    t.plan(12);

    testTypeOf(t, 'inLastMonth');

    const date = new Date();
    // 1000 offset for the execution time difference
    const sevenDaysAgo = new Date((new Date()).setDate((new Date()).getDate() - 7) + 1000);
    const sevenDaysFromNow = new Date((new Date()).setDate((new Date()).getDate() + 7) - 1000);
    const oneMonthAgo = new Date((new Date()).setMonth((new Date()).getMonth() - 1) + 1000);
    const oneMonthFromNow = new Date((new Date()).setMonth((new Date()).getMonth() + 1) - 1000);
    const oneYearAgo = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1) + 1000);
    const oneYearFromNow = new Date((new Date()).setFullYear((new Date()).getFullYear() + 1) - 1000);

    t.equal(isit.inLastMonth(), false);
    t.equal(isit.inLastMonth('string'), false);
    t.equal(isit.inLastMonth(date), true);
    t.equal(isit.inLastMonth(sevenDaysAgo), true);
    t.equal(isit.inLastMonth(sevenDaysFromNow), false);
    t.equal(isit.inLastMonth(oneMonthAgo), true);
    t.equal(isit.inLastMonth(oneMonthFromNow), false);
    t.equal(isit.inLastMonth(oneYearAgo), false);
    t.equal(isit.inLastMonth(oneYearFromNow), false);

    t.equal(isit.not.inLastMonth(oneMonthFromNow), true);
    t.equal(isit.not.inLastMonth(sevenDaysAgo), false);
});

test('isitInLastWeek', (t) => {
    t.plan(12);

    testTypeOf(t, 'inLastWeek');

    const date = new Date();
    // 1000 offset for the execution time difference
    const sevenDaysAgo = new Date((new Date()).setDate((new Date()).getDate() - 7) + 1000);
    const sevenDaysFromNow = new Date((new Date()).setDate((new Date()).getDate() + 7) - 1000);
    const oneMonthAgo = new Date((new Date()).setMonth((new Date()).getMonth() - 1) + 1000);
    const oneMonthFromNow = new Date((new Date()).setMonth((new Date()).getMonth() + 1) - 1000);
    const oneYearAgo = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1) + 1000);
    const oneYearFromNow = new Date((new Date()).setFullYear((new Date()).getFullYear() + 1) - 1000);

    t.equal(isit.inLastWeek(), false);
    t.equal(isit.inLastWeek('string'), false);
    t.equal(isit.inLastWeek(date), true);
    t.equal(isit.inLastWeek(sevenDaysAgo), true);
    t.equal(isit.inLastWeek(sevenDaysFromNow), false);
    t.equal(isit.inLastWeek(oneMonthAgo), false);
    t.equal(isit.inLastWeek(oneMonthFromNow), false);
    t.equal(isit.inLastWeek(oneYearAgo), false);
    t.equal(isit.inLastWeek(oneYearFromNow), false);

    t.equal(isit.not.inLastWeek(oneMonthFromNow), true);
    t.equal(isit.not.inLastWeek(sevenDaysAgo), false);
});

test('isitInLastYear', (t) => {
    t.plan(12);

    testTypeOf(t, 'inLastYear');

    const date = new Date();
    // 1000 offset for the execution time difference
    const sevenDaysAgo = new Date((new Date()).setDate((new Date()).getDate() - 7) + 1000);
    const sevenDaysFromNow = new Date((new Date()).setDate((new Date()).getDate() + 7) - 1000);
    const oneMonthAgo = new Date((new Date()).setMonth((new Date()).getMonth() - 1) + 1000);
    const oneMonthFromNow = new Date((new Date()).setMonth((new Date()).getMonth() + 1) - 1000);
    const oneYearAgo = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1) + 1000);
    const oneYearFromNow = new Date((new Date()).setFullYear((new Date()).getFullYear() + 1) - 1000);

    t.equal(isit.inLastYear(), false);
    t.equal(isit.inLastYear('string'), false);
    t.equal(isit.inLastYear(date), true);
    t.equal(isit.inLastYear(sevenDaysAgo), true);
    t.equal(isit.inLastYear(sevenDaysFromNow), false);
    t.equal(isit.inLastYear(oneMonthAgo), true);
    t.equal(isit.inLastYear(oneMonthFromNow), false);
    t.equal(isit.inLastYear(oneYearAgo), true);
    t.equal(isit.inLastYear(oneYearFromNow), false);

    t.equal(isit.not.inLastYear(oneMonthFromNow), true);
    t.equal(isit.not.inLastYear(sevenDaysAgo), false);
});

test('isitInNextMonth', (t) => {
    t.plan(12);

    testTypeOf(t, 'inNextMonth');

    // 1000 offset for the execution time difference
    const date = new Date((new Date()).valueOf() + 1000);
    const sevenDaysAgo = new Date((new Date()).setDate((new Date()).getDate() - 7) + 1000);
    const sevenDaysFromNow = new Date((new Date()).setDate((new Date()).getDate() + 7) - 1000);
    const oneMonthAgo = new Date((new Date()).setMonth((new Date()).getMonth() - 1) + 1000);
    const oneMonthFromNow = new Date((new Date()).setMonth((new Date()).getMonth() + 1) - 1000);
    const oneYearAgo = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1) + 1000);
    const oneYearFromNow = new Date((new Date()).setFullYear((new Date()).getFullYear() + 1) - 1000);

    t.equal(isit.inNextMonth(), false);
    t.equal(isit.inNextMonth('string'), false);
    t.equal(isit.inNextMonth(date), true);
    t.equal(isit.inNextMonth(sevenDaysAgo), false);
    t.equal(isit.inNextMonth(sevenDaysFromNow), true);
    t.equal(isit.inNextMonth(oneMonthAgo), false);
    t.equal(isit.inNextMonth(oneMonthFromNow), true);
    t.equal(isit.inNextMonth(oneYearAgo), false);
    t.equal(isit.inNextMonth(oneYearFromNow), false);

    t.equal(isit.not.inNextMonth(sevenDaysAgo), true);
    t.equal(isit.not.inNextMonth(sevenDaysFromNow), false);
});

test('isitInNextWeek', (t) => {
    t.plan(12);

    testTypeOf(t, 'inNextWeek');

    // 1000 offset for the execution time difference
    const date = new Date((new Date()).valueOf() + 1000);
    const sevenDaysAgo = new Date((new Date()).setDate((new Date()).getDate() - 7) + 1000);
    const sevenDaysFromNow = new Date((new Date()).setDate((new Date()).getDate() + 7) - 1000);
    const oneMonthAgo = new Date((new Date()).setMonth((new Date()).getMonth() - 1) + 1000);
    const oneMonthFromNow = new Date((new Date()).setMonth((new Date()).getMonth() + 1) - 1000);
    const oneYearAgo = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1) + 1000);
    const oneYearFromNow = new Date((new Date()).setFullYear((new Date()).getFullYear() + 1) - 1000);

    t.equal(isit.inNextWeek(), false);
    t.equal(isit.inNextWeek('string'), false);
    t.equal(isit.inNextWeek(date), true);
    t.equal(isit.inNextWeek(sevenDaysAgo), false);
    t.equal(isit.inNextWeek(sevenDaysFromNow), true);
    t.equal(isit.inNextWeek(oneMonthAgo), false);
    t.equal(isit.inNextWeek(oneMonthFromNow), false);
    t.equal(isit.inNextWeek(oneYearAgo), false);
    t.equal(isit.inNextWeek(oneYearFromNow), false);

    t.equal(isit.not.inNextWeek(sevenDaysAgo), true);
    t.equal(isit.not.inNextWeek(sevenDaysFromNow), false);
});

test('isitInNextYear', (t) => {
    t.plan(12);

    testTypeOf(t, 'inNextYear');

    // 1000 offset for the execution time difference
    const date = new Date((new Date()).valueOf() + 1000);
    const sevenDaysAgo = new Date((new Date()).setDate((new Date()).getDate() - 7) + 1000);
    const sevenDaysFromNow = new Date((new Date()).setDate((new Date()).getDate() + 7) - 1000);
    const oneMonthAgo = new Date((new Date()).setMonth((new Date()).getMonth() - 1) + 1000);
    const oneMonthFromNow = new Date((new Date()).setMonth((new Date()).getMonth() + 1) - 1000);
    const oneYearAgo = new Date((new Date()).setFullYear((new Date()).getFullYear() - 1) + 1000);
    const oneYearFromNow = new Date((new Date()).setFullYear((new Date()).getFullYear() + 1) - 1000);

    t.equal(isit.inNextYear(), false);
    t.equal(isit.inNextYear('string'), false);
    t.equal(isit.inNextYear(date), true);
    t.equal(isit.inNextYear(sevenDaysAgo), false);
    t.equal(isit.inNextYear(sevenDaysFromNow), true);
    t.equal(isit.inNextYear(oneMonthAgo), false);
    t.equal(isit.inNextYear(oneMonthFromNow), true);
    t.equal(isit.inNextYear(oneYearAgo), false);
    t.equal(isit.inNextYear(oneYearFromNow), true);

    t.equal(isit.not.inNextYear(sevenDaysAgo), true);
    t.equal(isit.not.inNextYear(sevenDaysFromNow), false);
});

test('isitLeapYear', (t) => {
    t.plan(12);

    testTypeOf(t, 'leapYear');

    t.equal(isit.leapYear(), false);
    t.equal(isit.leapYear('string'), false);
    t.equal(isit.leapYear(2016), true);
    t.equal(isit.leapYear(2015), false);
    t.equal(isit.leapYear(2100), false);

    t.equal(isit.all.leapYear(2016, 2012), true);
    t.equal(isit.all.leapYear(2016, 2015), false);
    t.equal(isit.any.leapYear(2016, 2015), true);
    t.equal(isit.any.leapYear(2011, 2015), false);
    t.equal(isit.not.leapYear(2011), true);
    t.equal(isit.not.leapYear(2016), false);
});

test('isitMonth', (t) => {
    t.plan(7);

    testTypeOf(t, 'month');

    const date = new Date(2016, 3, 5);

    t.equal(isit.month(), false);
    t.equal(isit.month('string'), false);
    t.equal(isit.month(date, 'April'), true);
    t.equal(isit.month(date, 'June'), false);

    t.equal(isit.not.month(date, 'June'), true);
    t.equal(isit.not.month(date, 'April'), false);
});

test('isitPast', (t) => {
    t.plan(12);

    testTypeOf(t, 'past');

    const date = new Date((new Date()).valueOf() + 1000);
    const futureDate = new Date((new Date()).setDate((new Date()).getDate() + 1));
    const pastDate = new Date((new Date()).setDate((new Date()).getDate() - 1));

    t.equal(isit.past(), false);
    t.equal(isit.past('test'), false);
    t.equal(isit.past(date), false);
    t.equal(isit.past(futureDate), false);
    t.equal(isit.past(pastDate), true);

    t.equal(isit.all.past(pastDate, new Date(Date.now() - 1000)), true);
    t.equal(isit.all.past(futureDate, new Date(Date.now() - 1000)), false);
    t.equal(isit.any.past(futureDate, new Date(Date.now() - 1000)), true);
    t.equal(isit.any.past(futureDate, new Date(Date.now() + 1000)), false);
    t.equal(isit.not.past(futureDate), true);
    t.equal(isit.not.past(pastDate), false);
});

test('isitQuarterOfYear', (t) => {
    t.plan(8);

    testTypeOf(t, 'quarterOfYear');

    const date = new Date(2016, 4, 5);

    t.equal(isit.quarterOfYear(), false);
    t.equal(isit.quarterOfYear('string'), false);
    t.equal(isit.quarterOfYear(date), false);
    t.equal(isit.quarterOfYear(date, 2), true);
    t.equal(isit.quarterOfYear(date, 4), false);

    t.equal(isit.not.quarterOfYear(date, 4), true);
    t.equal(isit.not.quarterOfYear(date, 2), false);
});

test('isitToday', (t) => {
    t.plan(7);

    testTypeOf(t, 'today');

    const date = new Date(2016, 3, 5);
    const firstOfYear = new Date(2016, 0, 1);

    t.equal(isit.today(), false);
    t.equal(isit.today('string'), false);
    t.equal(isit.today(date, date), true);
    t.equal(isit.today(date, firstOfYear), false);

    t.equal(isit.not.today(date, firstOfYear), true);
    t.equal(isit.not.today(date, date), false);
});

test('isitTomorrow', (t) => {
    t.plan(7);

    testTypeOf(t, 'tomorrow');

    const tomorrow = new Date(2016, 3, 6);
    const firstOfYear = new Date(2016, 0, 1);

    t.equal(isit.tomorrow(), false);
    t.equal(isit.tomorrow('string'), false);
    t.equal(isit.tomorrow(tomorrow, tomorrow), true);
    t.equal(isit.tomorrow(tomorrow, firstOfYear), false);

    t.equal(isit.not.tomorrow(tomorrow, firstOfYear), true);
    t.equal(isit.not.tomorrow(tomorrow, tomorrow), false);
});

test('isitWeekday', (t) => {
    t.plan(11);

    testTypeOf(t, 'weekday');

    const tuesday = new Date(2016, 3, 5);
    const sunday = new Date(2016, 3, 3);

    t.equal(isit.weekday(), false);
    t.equal(isit.weekday('string'), false);
    t.equal(isit.weekday(tuesday), true);
    t.equal(isit.weekday(sunday), false);

    t.equal(isit.all.weekday(tuesday, new Date(2016, 3, 6)), true);
    t.equal(isit.all.weekday(sunday, new Date(2016, 3, 6)), false);
    t.equal(isit.any.weekday(sunday, new Date(2016, 3, 6)), true);
    t.equal(isit.any.weekday(sunday, new Date(2016, 3, 2)), false);
    t.equal(isit.not.weekday(sunday), true);
    t.equal(isit.not.weekday(tuesday), false);
});

test('isitWeekend', (t) => {
    t.plan(11);

    testTypeOf(t, 'weekend');

    const tuesday = new Date(2016, 3, 5);
    const sunday = new Date(2016, 3, 3);

    t.equal(isit.weekend(), false);
    t.equal(isit.weekend('string'), false);
    t.equal(isit.weekend(tuesday), false);
    t.equal(isit.weekend(sunday), true);

    t.equal(isit.all.weekend(sunday, new Date(2016, 3, 2)), true);
    t.equal(isit.all.weekend(tuesday, new Date(2016, 3, 2)), false);
    t.equal(isit.any.weekend(tuesday, new Date(2016, 3, 2)), true);
    t.equal(isit.any.weekend(tuesday, new Date(2016, 3, 6)), false);
    t.equal(isit.not.weekend(tuesday), true);
    t.equal(isit.not.weekend(sunday), false);
});

test('isitYear', (t) => {
    t.plan(9);

    testTypeOf(t, 'year');

    const date = new Date(2016, 3, 5);

    t.equal(isit.year(), false);
    t.equal(isit.year('string'), false);
    t.equal(isit.year(date, 2016), true);
    t.equal(isit.year(date, '2016'), true);
    t.equal(isit.year(date, '2016'), true);
    t.equal(isit.year(date, 2017), false);

    t.equal(isit.not.year(date, 2017), true);
    t.equal(isit.not.year(date, 2016), false);
});

test('isitYesterday', (t) => {
    t.plan(7);

    testTypeOf(t, 'yesterday');

    const yesterday = new Date(2016, 3, 4);
    const firstOfYear = new Date(2016, 0, 1);

    t.equal(isit.yesterday(), false);
    t.equal(isit.yesterday('string'), false);
    t.equal(isit.yesterday(yesterday, yesterday), true);
    t.equal(isit.yesterday(yesterday, firstOfYear), false);

    t.equal(isit.not.yesterday(yesterday, firstOfYear), true);
    t.equal(isit.not.yesterday(yesterday, yesterday), false);
});