// test
import test from 'ava';
import {
  isAllAnyNot
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/_groups/regexp';

test('if affirmative validates the values as affirmative correctly', (t) => {
  t.true(src.affirmative('yes'));
  t.true(src.affirmative('y'));
  t.true(src.affirmative('t'));
  t.true(src.affirmative('true'));
  t.true(src.affirmative(true));
  t.true(src.affirmative('ok'));
  t.true(src.affirmative('okay'));

  t.false(src.affirmative('no'));
  t.false(src.affirmative('n'));
  t.false(src.affirmative('false'));
  t.false(src.affirmative(false));
});

isAllAnyNot(all, any, not, 'affirmative');

test('if alphaNumeric validates the values as alphabetic or numeric correctly', (t) => {
  t.true(src.alphaNumeric('foo'));
  t.true(src.alphaNumeric(123));
  t.true(src.alphaNumeric('123'));
  t.true(src.alphaNumeric('foo123'));

  t.false(src.alphaNumeric('#$%'));
  t.false(src.alphaNumeric('foo-123'));
});

isAllAnyNot(all, any, not, 'alphaNumeric');

test('if caPostalCode validates the values as a Canadian postal code correctly', (t) => {
  t.true(src.caPostalCode('L8V3Y1'));
  t.false(src.caPostalCode('123'));
});

isAllAnyNot(all, any, not, 'caPostalCode');

test('if creditCard validates the values as a credit card number correctly', (t) => {
  t.true(src.creditCard('4012888888881881')); // VISA
  t.true(src.creditCard('5105105105105100')); // MasterCard
  t.true(src.creditCard('378282246310005')); // American Express
  t.true(src.creditCard('378734493671000')); // American Express Corporate
  t.true(src.creditCard('6011000000000004')); // Discover
  t.true(src.creditCard('30569309025904')); // Diner's Card
  t.true(src.creditCard('3566002020360505')); // JCB

  t.false(src.creditCard('0000000000000000'));
  t.false(src.creditCard('1324134132412344'));
});

isAllAnyNot(all, any, not, 'creditCard');

test('if dateString validates the values as a date string correctly', (t) => {
  t.true(src.dateString('11/11/2011'));
  t.false(src.dateString('90/11/2011'));
});

isAllAnyNot(all, any, not, 'dateString');

test('if email validates the values as an email address correctly', (t) => {
  t.false(src.email('foo'));
  t.false(src.email('foo.com'));
  t.false(src.email('foo@bar'));

  t.true(src.email('foo@bar.com'));
});

isAllAnyNot(all, any, not, 'email');

test('if eppPhone validates the values as an international phone number correctly', (t) => {
  t.true(src.eppPhone('+90.2322456789'));
  t.false(src.eppPhone('123'));
});

isAllAnyNot(all, any, not, 'eppPhone');

test('if hexadecimal validates the values as a hexadecimal number correctly', (t) => {
  t.true(src.hexadecimal('ff'));
  t.true(src.hexadecimal('f0f0f0'));

  t.false(src.hexadecimal(2.5));
});

isAllAnyNot(all, any, not, 'hexadecimal');

test('if hexColor validates the values as a hexadecimal color correctly', (t) => {
  t.true(src.hexColor('#333'));
  t.true(src.hexColor('#f0f0f0'));

  t.false(src.hexColor('f783'));
  t.false(src.hexColor(123));
});

isAllAnyNot(all, any, not, 'hexColor');

test('if ip validates the values as an ip address correctly', (t) => {
  t.true(src.ip('198.156.23.5')); // ipv4
  t.true(src.ip('0:1::4:ff5:54:987:C')); // ipv6

  t.false(src.ip('1.2..5'));
});

isAllAnyNot(all, any, not, 'ip');

test('if ipv4 validates the values as an ipv4 address correctly', (t) => {
  t.true(src.ipv4('198.156.23.5')); // ipv4

  t.false(src.ipv4('0:1::4:ff5:54:987:C')); // ipv6
  t.false(src.ipv4('1.2..5'));
});

isAllAnyNot(all, any, not, 'ipv4');

test('if ipv6 validates the values as an ipv6 address correctly', (t) => {
  t.true(src.ipv6('0:1::4:ff5:54:987:C')); // ipv6

  t.false(src.ipv6('198.156.23.5')); // ipv4
  t.false(src.ipv6('1.2..5'));
});

isAllAnyNot(all, any, not, 'ipv6');

test('if isoDateString validates the values as an ISO date string correctly', (t) => {
  t.true(src.isoDateString('2016'));
  t.true(src.isoDateString('2016-02'));
  t.true(src.isoDateString('2016-02-04'));
  t.true(src.isoDateString('2016-02-04T12:34+01:00'));
  t.true(src.isoDateString('2016-02-04T12:34:56+01:00'));

  t.false(src.isoDateString('123'));
  t.false(src.isoDateString('February 4, 2016'));
});

isAllAnyNot(all, any, not, 'isoDateString');

test('if nanpPhone validates the values as a phone number in the USA correctly', (t) => {
  t.true(src.nanpPhone('609-555-0175'));
  t.false(src.nanpPhone('123'));
});

isAllAnyNot(all, any, not, 'nanpPhone');

test('if socialSecurityNumber validates the values as a social security number correctly', (t) => {
  t.true(src.socialSecurityNumber('017-90-7890'));
  t.false(src.socialSecurityNumber('123'));
});

isAllAnyNot(all, any, not, 'socialSecurityNumber');

test('if timeString validates the values as a time string correctly', (t) => {
  t.true(src.timeString('13:45:30'));

  t.false(src.timeString('25:65:30'));
  t.false(src.timeString('13:65:30'));
  t.false(src.timeString('13:45:90'));
  t.false(src.timeString('123'));
});

isAllAnyNot(all, any, not, 'timeString');

test('if ukPostalCode validates the values as a UK postal code correctly', (t) => {
  t.true(src.ukPostalCode('B184BJ'));
  t.false(src.ukPostalCode('123'));
});

isAllAnyNot(all, any, not, 'ukPostalCode');

test('if url validates the values as a URL correctly', (t) => {
  t.true(src.url('http://www.test.com'));
  t.true(src.url('www.test.com'));
  t.true(src.url('test.com'));

  t.false(src.url('//www.test.com'));
  t.false(src.url('test'));
  t.false(src.url('123'));
});

isAllAnyNot(all, any, not, 'url');

test('if usZipCode validates the values as a US zip code correctly', (t) => {
  t.true(src.usZipCode('12345'));
  t.true(src.usZipCode('12345-6789'));
  t.false(src.usZipCode('123'));
  t.false(src.usZipCode('123456789'));
});

isAllAnyNot(all, any, not, 'usZipCode');
