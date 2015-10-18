

import isitNumber from "number";

export default function isitLeapYear(obj) {
    return isitNumber(obj) && ((obj % 4 === 0 && obj % 100 !== 0) || obj % 400 === 0);
}