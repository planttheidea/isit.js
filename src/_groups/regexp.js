// regexp
import * as affirmative from '../affirmative';
import * as alphaNumeric from '../alphaNumeric';
import * as caPostalCode from '../caPostalCode';
import * as creditCard from '../creditCard';
import * as dateString from '../dateString';
import * as email from '../email';
import * as eppPhone from '../eppPhone';
import * as hexadecimal from '../hexadecimal';
import * as hexColor from '../hexColor';
import * as ip from '../ip';
import * as ipv4 from '../ipv4';
import * as ipv6 from '../ipv6';
import * as isoDateString from '../isoDateString';
import * as nanpPhone from '../nanpPhone';
import * as socialSecurityNumber from '../socialSecurityNumber';
import * as timeString from '../timeString';
import * as ukPostalCode from '../ukPostalCode';
import * as url from '../url';
import * as usZipCode from '../usZipCode';

export const all = {
  affirmative: affirmative.isAllAffirmative,
  alphaNumeric: alphaNumeric.isAllAlphaNumeric,
  caPostalCode: caPostalCode.isAllCaPostalCode,
  creditCard: creditCard.isAllCreditCard,
  dateString: dateString.isAllDateString,
  email: email.isAllEmail,
  eppPhone: eppPhone.isAllEppPhone,
  hexadecimal: hexadecimal.isAllHexadecimal,
  hexColor: hexColor.isAllHexColor,
  ip: ip.isAllIp,
  ipv4: ipv4.isAllIpv4,
  ipv6: ipv6.isAllIpv6,
  isoDateString: isoDateString.isAllIsoDateString,
  nanpPhone: nanpPhone.isAllNanpPhone,
  socialSecurityNumber: socialSecurityNumber.isAllSocialSecurityNumber,
  timeString: timeString.isAllTimeString,
  ukPostalCode: ukPostalCode.isAllUkPostalCode,
  url: url.isAllUrl,
  usZipCode: usZipCode.isAllUsZipCode
};

export const any = {
  affirmative: affirmative.isAnyAffirmative,
  alphaNumeric: alphaNumeric.isAnyAlphaNumeric,
  caPostalCode: caPostalCode.isAnyCaPostalCode,
  creditCard: creditCard.isAnyCreditCard,
  dateString: dateString.isAnyDateString,
  email: email.isAnyEmail,
  eppPhone: eppPhone.isAnyEppPhone,
  hexadecimal: hexadecimal.isAnyHexadecimal,
  hexColor: hexColor.isAnyHexColor,
  ip: ip.isAnyIp,
  ipv4: ipv4.isAnyIpv4,
  ipv6: ipv6.isAnyIpv6,
  isoDateString: isoDateString.isAnyIsoDateString,
  nanpPhone: nanpPhone.isAnyNanpPhone,
  socialSecurityNumber: socialSecurityNumber.isAnySocialSecurityNumber,
  timeString: timeString.isAnyTimeString,
  ukPostalCode: ukPostalCode.isAnyUkPostalCode,
  url: url.isAnyUrl,
  usZipCode: usZipCode.isAnyUsZipCode
};

export const not = {
  affirmative: affirmative.isNotAffirmative,
  alphaNumeric: alphaNumeric.isNotAlphaNumeric,
  caPostalCode: caPostalCode.isNotCaPostalCode,
  creditCard: creditCard.isNotCreditCard,
  dateString: dateString.isNotDateString,
  email: email.isNotEmail,
  eppPhone: eppPhone.isNotEppPhone,
  hexadecimal: hexadecimal.isNotHexadecimal,
  hexColor: hexColor.isNotHexColor,
  ip: ip.isNotIp,
  ipv4: ipv4.isNotIpv4,
  ipv6: ipv6.isNotIpv6,
  isoDateString: isoDateString.isNotIsoDateString,
  nanpPhone: nanpPhone.isNotNanpPhone,
  socialSecurityNumber: socialSecurityNumber.isNotSocialSecurityNumber,
  timeString: timeString.isNotTimeString,
  ukPostalCode: ukPostalCode.isNotUkPostalCode,
  url: url.isNotUrl,
  usZipCode: usZipCode.isNotUsZipCode
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
