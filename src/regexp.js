// regexp
import * as affirmative from './isitAffirmative';
import * as alphaNumeric from './isitAlphaNumeric';
import * as caPostalCode from './isitCaPostalCode';
import * as creditCard from './isitCreditCard';
import * as dateString from './isitDateString';
import * as email from './isitEmail';
import * as eppPhone from './isitEppPhone';
import * as hexadecimal from './isitHexadecimal';
import * as hexColor from './isitHexColor';
import * as ip from './isitIp';
import * as ipv4 from './isitIpv4';
import * as ipv6 from './isitIpv6';
import * as isoDateString from './isitIsoDateString';
import * as nanpPhone from './isitNanpPhone';
import * as socialSecurityNumber from './isitSocialSecurityNumber';
import * as timeString from './isitTimeString';
import * as ukPostalCode from './isitUkPostalCode';
import * as url from './isitUrl';
import * as usZipCode from './isitUsZipCode';

export const all = {
  affirmative: affirmative.isitAllAffirmative,
  alphaNumeric: alphaNumeric.isitAllAlphaNumeric,
  caPostalCode: caPostalCode.isitAllCaPostalCode,
  creditCard: creditCard.isitAllCreditCard,
  dateString: dateString.isitAllDateString,
  email: email.isitAllEmail,
  eppPhone: eppPhone.isitAllEppPhone,
  hexadecimal: hexadecimal.isitAllHexadecimal,
  hexColor: hexColor.isitAllHexColor,
  ip: ip.isitAllIp,
  ipv4: ipv4.isitAllIpv4,
  ipv6: ipv6.isitAllIpv6,
  isoDateString: isoDateString.isitAllIsoDateString,
  nanpPhone: nanpPhone.isitAllNanpPhone,
  socialSecurityNumber: socialSecurityNumber.isitAllSocialSecurityNumber,
  timeString: timeString.isitAllTimeString,
  ukPostalCode: ukPostalCode.isitAllUkPostalCode,
  url: url.isitAllUrl,
  usZipCode: usZipCode.isitAllUsZipCode
};

export const any = {
  affirmative: affirmative.isitAnyAffirmative,
  alphaNumeric: alphaNumeric.isitAnyAlphaNumeric,
  caPostalCode: caPostalCode.isitAnyCaPostalCode,
  creditCard: creditCard.isitAnyCreditCard,
  dateString: dateString.isitAnyDateString,
  email: email.isitAnyEmail,
  eppPhone: eppPhone.isitAnyEppPhone,
  hexadecimal: hexadecimal.isitAnyHexadecimal,
  hexColor: hexColor.isitAnyHexColor,
  ip: ip.isitAnyIp,
  ipv4: ipv4.isitAnyIpv4,
  ipv6: ipv6.isitAnyIpv6,
  isoDateString: isoDateString.isitAnyIsoDateString,
  nanpPhone: nanpPhone.isitAnyNanpPhone,
  socialSecurityNumber: socialSecurityNumber.isitAnySocialSecurityNumber,
  timeString: timeString.isitAnyTimeString,
  ukPostalCode: ukPostalCode.isitAnyUkPostalCode,
  url: url.isitAnyUrl,
  usZipCode: usZipCode.isitAnyUsZipCode
};

export const not = {
  affirmative: affirmative.isitNotAffirmative,
  alphaNumeric: alphaNumeric.isitNotAlphaNumeric,
  caPostalCode: caPostalCode.isitNotCaPostalCode,
  creditCard: creditCard.isitNotCreditCard,
  dateString: dateString.isitNotDateString,
  email: email.isitNotEmail,
  eppPhone: eppPhone.isitNotEppPhone,
  hexadecimal: hexadecimal.isitNotHexadecimal,
  hexColor: hexColor.isitNotHexColor,
  ip: ip.isitNotIp,
  ipv4: ipv4.isitNotIpv4,
  ipv6: ipv6.isitNotIpv6,
  isoDateString: isoDateString.isitNotIsoDateString,
  nanpPhone: nanpPhone.isitNotNanpPhone,
  socialSecurityNumber: socialSecurityNumber.isitNotSocialSecurityNumber,
  timeString: timeString.isitNotTimeString,
  ukPostalCode: ukPostalCode.isitNotUkPostalCode,
  url: url.isitNotUrl,
  usZipCode: usZipCode.isitNotUsZipCode
};

export default {
  affirmative: affirmative.default,
  alphaNumeric: alphaNumeric.default,
  caPostalCode: caPostalCode.default,
  creditCard: creditCard.default,
  dateString: dateString.default,
  email: email.default,
  eppPhone: eppPhone.default,
  hexadecimal: hexadecimal.default,
  hexColor: hexColor.default,
  ip: ip.default,
  ipv4: ipv4.default,
  ipv6: ipv6.default,
  isoDateString: isoDateString.default,
  nanpPhone: nanpPhone.default,
  socialSecurityNumber: socialSecurityNumber.default,
  timeString: timeString.default,
  ukPostalCode: ukPostalCode.default,
  url: url.default,
  usZipCode: usZipCode.default
};
