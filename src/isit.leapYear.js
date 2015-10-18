

import isNumber from "isit.number";

export default function isLeapYear(obj) {
    return isNumber(obj) && ((obj % 4 === 0 && obj % 100 !== 0) || obj % 400 === 0);
}