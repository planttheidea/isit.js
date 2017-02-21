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
} from 'src/time';

test.todo('daylightSavingsTime');

isAllAnyNot(all, any, not, 'daylightSavingsTime');

test.todo('dayOfWeek');

isNotOnly(all, any, not, 'dayOfWeek');

test.todo('future');

isAllAnyNot(all, any, not, 'future');

test.todo('inDateRange');

isNotOnly(all, any, not, 'inDateRange');

test.todo('inLastMonth');

isAllAnyNot(all, any, not, 'inLastMonth');

test.todo('inLastWeek');

isAllAnyNot(all, any, not, 'inLastWeek');

test.todo('inLastYear');

isAllAnyNot(all, any, not, 'inLastYear');

test.todo('inNextMonth');

isAllAnyNot(all, any, not, 'inNextMonth');

test.todo('inNextWeek');

isAllAnyNot(all, any, not, 'inNextWeek');

test.todo('inNextYear');

isAllAnyNot(all, any, not, 'inNextYear');

test.todo('inQuarter');

isNotOnly(all, any, not, 'inQuarter');

test.todo('leapYear');

isAllAnyNot(all, any, not, 'leapYear');

test.todo('past');

isAllAnyNot(all, any, not, 'past');

test.todo('sameDate');

isNotOnly(all, any, not, 'sameDate');

test.todo('sameDay');

isNotOnly(all, any, not, 'sameDay');

test.todo('sameMonth');

isNotOnly(all, any, not, 'sameMonth');

test.todo('sameYear');

isNotOnly(all, any, not, 'sameYear');

test.todo('today');

isAllAnyNot(all, any, not, 'today');

test.todo('tomorrow');

isAllAnyNot(all, any, not, 'tomorrow');

test.todo('weekday');

isAllAnyNot(all, any, not, 'weekday');

test.todo('weekend');

isAllAnyNot(all, any, not, 'weekend');

test.todo('yesterday');

isAllAnyNot(all, any, not, 'yesterday');
