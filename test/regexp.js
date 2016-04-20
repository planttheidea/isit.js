import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitAffirmative', (t) => {
    t.plan(18);

    testTypeOf(t, 'affirmative');

    t.equal(isit.affirmative('yes'), true);
    t.equal(isit.affirmative('y'), true);
    t.equal(isit.affirmative('t'), true);
    t.equal(isit.affirmative('true'), true);
    t.equal(isit.affirmative(true), true);
    t.equal(isit.affirmative('ok'), true);
    t.equal(isit.affirmative('okay'), true);
    t.equal(isit.affirmative('n'), false);
    t.equal(isit.affirmative('no'), false);
    t.equal(isit.affirmative('false'), false);
    t.equal(isit.affirmative(false), false);

    t.equal(isit.all.affirmative('y', 'yes', true, 'ok'), true);
    t.equal(isit.all.affirmative('y', 'no', true, 'ok'), false);
    t.equal(isit.any.affirmative('y', 'no', true, 'ok'), true);
    t.equal(isit.any.affirmative('n', 'no', false, 'false'), false);
    t.equal(isit.not.affirmative('n'), true);
    t.equal(isit.not.affirmative('yes'), false);
});

test('isitAlphaNumeric', (t) => {
    t.plan(14);

    testTypeOf(t, 'alphaNumeric');

    t.equal(isit.alphaNumeric('asdf'), true);
    t.equal(isit.alphaNumeric(123), true);
    t.equal(isit.alphaNumeric('123'), true);
    t.equal(isit.alphaNumeric('asdf1234'), true);
    t.equal(isit.alphaNumeric('#$%'), false);
    t.equal(isit.alphaNumeric('asdf#$'), false);
    t.equal(isit.alphaNumeric('asdf123#$'), false);

    t.equal(isit.all.alphaNumeric('123', 345, 'asdf'), true);
    t.equal(isit.all.alphaNumeric('$%', 345, 'asdf'), false);
    t.equal(isit.any.alphaNumeric('$%', 345, 'asdf'), true);
    t.equal(isit.any.alphaNumeric('$%', '*&^'), false);
    t.equal(isit.not.alphaNumeric('#$%'), true);
    t.equal(isit.not.alphaNumeric('123'), false);
});

test('isitCaPostalCode', (t) => {
    t.plan(9);

    testTypeOf(t, 'caPostalCode');

    t.equal(isit.caPostalCode('L8V3Y1'), true);
    t.equal(isit.caPostalCode('123'), false);

    t.equal(isit.all.caPostalCode('L8V3Y1', 'L8V4Y1'), true);
    t.equal(isit.all.caPostalCode('L8V3Y1', '123'), false);
    t.equal(isit.any.caPostalCode('L8V3Y1', '123'), true);
    t.equal(isit.any.caPostalCode('456', '123'), false);
    t.equal(isit.not.caPostalCode('123'), true);
    t.equal(isit.not.caPostalCode('L8V3Y1'), false);
});

test('isitCreditCard', (t) => {
    t.plan(17);

    testTypeOf(t, 'creditCard');

    t.equal(isit.creditCard('4012888888881881'), true); // VISA
    t.equal(isit.creditCard('5105105105105100'), true); // MasterCard
    t.equal(isit.creditCard('378282246310005'), true); // American Express
    t.equal(isit.creditCard('378734493671000'), true); // American Express Corporate
    t.equal(isit.creditCard('30569309025904'), true); // Diner's Card
    t.equal(isit.creditCard('6011000000000004'), true); // Discover
    t.equal(isit.creditCard('3566002020360505'), true); // JCB
    t.equal(isit.creditCard('0000000000000000'), false);
    t.equal(isit.creditCard('1324134132412344'), false);
    t.equal(isit.creditCard('afdasdfadsfadfas'), false);

    t.equal(isit.all.creditCard('4012888888881881', '5105105105105100', '378734493671000'), true);
    t.equal(isit.all.creditCard('0000000000000000', '5105105105105100', '378734493671000'), false);
    t.equal(isit.any.creditCard('0000000000000000', '5105105105105100', '378734493671000'), true);
    t.equal(isit.any.creditCard('0000000000000000', '1324134132412344', '1324134132412344'), false);
    t.equal(isit.not.creditCard('0000000000000000'), true);
    t.equal(isit.not.creditCard('6011000000000004'), false);
});

test('isitDateString', (t) => {
    t.plan(9);

    testTypeOf(t, 'dateString');

    t.equal(isit.dateString('11/11/2011'), true);
    t.equal(isit.dateString('90/11/2011'), false);

    t.equal(isit.all.dateString('11/11/2011', '12/31/2015'), true);
    t.equal(isit.all.dateString('11/11/2011', '90/31/2015'), false);
    t.equal(isit.any.dateString('11/11/2011', '90/31/2015'), true);
    t.equal(isit.any.dateString('90/11/2011', '90/31/2015'), false);
    t.equal(isit.not.dateString('90/11/2011'), true);
    t.equal(isit.not.dateString('11/11/2011'), false);
});

test('isitEmail', (t) => {
    t.plan(11);

    testTypeOf(t, 'email');

    t.equal(isit.email('test'), false);
    t.equal(isit.email('test.com'), false);
    t.equal(isit.email('test@test'), false);
    t.equal(isit.email('test@test.com'), true);

    t.equal(isit.all.email('test@test.com', 'test@google.com'), true);
    t.equal(isit.all.email('test@test.com', 'test@google'), false);
    t.equal(isit.any.email('test@test.com', 'test@google'), true);
    t.equal(isit.any.email('test@test', 'test@google'), false);
    t.equal(isit.not.email('test@test'), true);
    t.equal(isit.not.email('test@test.com'), false);
});

test('isitEppPhone', (t) => {
    t.plan(9);

    testTypeOf(t, 'eppPhone');

    t.equal(isit.eppPhone('+90.2322456789'), true);
    t.equal(isit.eppPhone('123'), false);

    t.equal(isit.all.eppPhone('+90.2322456789', '+90.2322456789'), true);
    t.equal(isit.all.eppPhone('+90.2322456789', '123'), false);
    t.equal(isit.any.eppPhone('+90.2322456789', '123'), true);
    t.equal(isit.any.eppPhone('foo', '123'), false);
    t.equal(isit.not.eppPhone('foo'), true);
    t.equal(isit.not.eppPhone('+90.2322456789'), false);
});

test('isitHexadecimal', (t) => {
    t.plan(10);

    testTypeOf(t, 'hexadecimal');

    t.equal(isit.hexadecimal('ff'), true);
    t.equal(isit.hexadecimal('f0f0f0'), true);
    t.equal(isit.hexadecimal(2.5), false);

    t.equal(isit.all.hexadecimal('ff', 'f0f0f0'), true);
    t.equal(isit.all.hexadecimal('ff', '%^&'), false);
    t.equal(isit.any.hexadecimal('ff', '%^&'), true);
    t.equal(isit.any.hexadecimal(2.5, '%^&'), false);
    t.equal(isit.not.hexadecimal(2.5), true);
    t.equal(isit.not.hexadecimal('ff'), false);
});

test('isitHexColor', (t) => {
    t.plan(11);

    testTypeOf(t, 'hexColor');

    t.equal(isit.hexColor('#333'), true);
    t.equal(isit.hexColor('#f0f0f0'), true);
    t.equal(isit.hexColor('f783'), false);
    t.equal(isit.hexColor(123), false);

    t.equal(isit.all.hexColor('#333', '#f0f0f0'), true);
    t.equal(isit.all.hexColor('#333', 'f0f0f0'), false);
    t.equal(isit.any.hexColor('#333', 'f0f0f0'), true);
    t.equal(isit.any.hexColor('333', 'f0f0f0'), false);
    t.equal(isit.not.hexColor('333'), true);
    t.equal(isit.not.hexColor('#333'), false);
});

test('isitIp', (t) => {
    t.plan(10);

    testTypeOf(t, 'ip');

    t.equal(isit.ip('198.156.23.5'), true);
    t.equal(isit.ip('0:1::4:ff5:54:987:C'), true);
    t.equal(isit.ip('1.2..5'), false);

    t.equal(isit.all.ip('198.156.23.5', '0:1::4:ff5:54:987:C'), true);
    t.equal(isit.all.ip('198.156.23.5', '1.2..5'), false);
    t.equal(isit.any.ip('198.156.23.5', '1.2..5'), true);
    t.equal(isit.any.ip('...', '1.2..5'), false);
    t.equal(isit.not.ip('...'), true);
    t.equal(isit.not.ip('0:1::4:ff5:54:987:C'), false);
});

test('isitIpv4', (t) => {
    t.plan(10);

    testTypeOf(t, 'ipv4');

    t.equal(isit.ipv4('198.12.3.142'), true);
    t.equal(isit.ipv4('8:::::::7'), false);
    t.equal(isit.ipv4('1.2..5'), false);

    t.equal(isit.all.ipv4('198.12.3.142', '192.168.1.1'), true);
    t.equal(isit.all.ipv4('198.12.3.142', '8:::::::7'), false);
    t.equal(isit.any.ipv4('198.12.3.142', '8:::::::7'), true);
    t.equal(isit.any.ipv4('1.2..5', '8:::::::7'), false);
    t.equal(isit.not.ipv4('1.2..5'), true);
    t.equal(isit.not.ipv4('198.12.3.142'), false);
});

test('isitIpv6', (t) => {
    t.plan(11);

    testTypeOf(t, 'ipv6');

    t.equal(isit.ipv6('198.156.23.5'), false);
    t.equal(isit.ipv6('2001:DB8:0:0:1::1'), true);
    t.equal(isit.ipv6('8:::::::7'), false);
    t.equal(isit.ipv6('1.2..5'), false);

    t.equal(isit.all.ipv6('2001:DB8:0:0:1::1', '2001:DB8:0:0:1::1'), true);
    t.equal(isit.all.ipv6('2001:DB8:0:0:1::1', '8:::::::7'), false);
    t.equal(isit.any.ipv6('2001:DB8:0:0:1::1', '8:::::::7'), true);
    t.equal(isit.any.ipv6('1.2..5', '8:::::::7'), false);
    t.equal(isit.not.ipv6('1.2..5'), true);
    t.equal(isit.not.ipv6('2001:DB8:0:0:1::1'), false);
});

test('isitIsoDateString', (t) => {
    t.plan(14);

    testTypeOf(t, 'isoDateString');

    t.equal(isit.isoDateString('2014'), true);
    t.equal(isit.isoDateString('2014-02'), true);
    t.equal(isit.isoDateString('2014-02-14'), true);
    t.equal(isit.isoDateString('2014-02-14T12:34+01:00'), true);
    t.equal(isit.isoDateString('2014-02-14T12:34:56+01:00'), true);
    t.equal(isit.isoDateString('123'), false);
    t.equal(isit.isoDateString('February 14, 2014'), false);

    t.equal(isit.all.isoDateString('2014', '2014-02', '2014-02-13'), true);
    t.equal(isit.all.isoDateString('2014', '2014-02', 'foo'), false);
    t.equal(isit.any.isoDateString('2014', '2014-02', 'foo'), true);
    t.equal(isit.any.isoDateString('123', 'asdfadfaf', 'foo'), false);
    t.equal(isit.not.isoDateString('123'), true);
    t.equal(isit.not.isoDateString('2014'), false);
});

test('isitNanpPhone', (t) => {
    t.plan(9);

    testTypeOf(t, 'nanpPhone');

    t.equal(isit.nanpPhone('609-555-0175'), true);
    t.equal(isit.nanpPhone('123'), false);

    t.equal(isit.all.nanpPhone('609-555-0175', '408-555-1234'), true);
    t.equal(isit.all.nanpPhone('609-555-0175', '456'), false);
    t.equal(isit.any.nanpPhone('609-555-0175', '456'), true);
    t.equal(isit.any.nanpPhone('123', '456'), false);
    t.equal(isit.not.nanpPhone('123'), true);
    t.equal(isit.not.nanpPhone('408-555-1234'), false);
});

test('socialSecurityNumber', (t) => {
    t.plan(9);

    testTypeOf(t, 'socialSecurityNumber');

    t.equal(isit.socialSecurityNumber('017-90-7890'), true);
    t.equal(isit.socialSecurityNumber('123'), false);

    t.equal(isit.all.socialSecurityNumber('017-90-7890', '123-45-6789'), true);
    t.equal(isit.all.socialSecurityNumber('017-90-7890', '456'), false);
    t.equal(isit.any.socialSecurityNumber('017-90-7890', '456'), true);
    t.equal(isit.any.socialSecurityNumber('123', '456'), false);
    t.equal(isit.not.socialSecurityNumber('123'), true);
    t.equal(isit.not.socialSecurityNumber('017-90-7890'), false);
});

test('isitTimeString', (t) => {
    t.plan(9);

    testTypeOf(t, 'timeString');

    t.equal(isit.timeString('13:45:30'), true);
    t.equal(isit.timeString('90:90:90'), false);

    t.equal(isit.all.timeString('13:45:30', '00:01:15'), true);
    t.equal(isit.all.timeString('13:45:30', '90:1230:00'), false);
    t.equal(isit.any.timeString('13:45:30', '90:1230:00'), true);
    t.equal(isit.any.timeString('90aaf', '90:1230:00'), false);
    t.equal(isit.not.timeString('90aaf'), true);
    t.equal(isit.not.timeString('13:45:30'), false);
});

test('isitUkPostCode', (t) => {
    t.plan(9);

    testTypeOf(t, 'ukPostCode');

    t.equal(isit.ukPostCode('B184BJ'), true);
    t.equal(isit.ukPostCode('123'), false);

    t.equal(isit.all.ukPostCode('B184BJ', 'B196BJ'), true);
    t.equal(isit.all.ukPostCode('B184BJ', '123'), false);
    t.equal(isit.any.ukPostCode('B184BJ', '123'), true);
    t.equal(isit.any.ukPostCode('456', '123'), false);
    t.equal(isit.not.ukPostCode('456'), true);
    t.equal(isit.not.ukPostCode('B184BJ'), false);
});

test('isitUrl', (t) => {
    t.plan(9);

    testTypeOf(t, 'url');

    t.equal(isit.url('http://www.test.com'), true);
    t.equal(isit.url('foo'), false);

    t.equal(isit.all.url('http://www.test.com', 'https://www.secure.com'), true);
    t.equal(isit.all.url('http://www.test.com', 'foo'), false);
    t.equal(isit.any.url('http://www.test.com', 'foo'), true);
    t.equal(isit.any.url('bar', 'foo'), false);
    t.equal(isit.not.url('bar'), true);
    t.equal(isit.not.url('http://www.test.com'), false);
});

test('isitUsZipCode', (t) => {
    t.plan(11);

    testTypeOf(t, 'usZipCode');

    t.equal(isit.usZipCode('zip code'), false);
    t.equal(isit.usZipCode('95050'), true);
    t.equal(isit.usZipCode('950505116'), false);
    t.equal(isit.usZipCode('95050-5116'), true);

    t.equal(isit.all.usZipCode('02118', '95050-5116'), true);
    t.equal(isit.all.usZipCode('02118', '950505116'), false);
    t.equal(isit.any.usZipCode('02118', '950505116'), true);
    t.equal(isit.any.usZipCode('zip code', '950505116'), false);
    t.equal(isit.not.usZipCode('zip code'), true);
    t.equal(isit.not.usZipCode('02118'), false);
});

test('setRegExp', (t) => {
    t.plan(3);

    testTypeOf(t, 'setRegExp');

    t.equal(isit.usZipCode('test'), false);

    isit.setRegExp(/test/i, 'usZipCode');

    t.equal(isit.usZipCode('test'), true);
});