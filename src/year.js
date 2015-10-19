// is obj a date and year a number, and is obj in year year?

import isitDate from "./date";
import isitNumber from "./number";
import isitString from "./string";
import isitUndefined from "./undefined";

export default function isitYear(obj, yearNumber) {
    if (isitUndefined(yearNumber)) {
        yearNumber = (new Date()).getFullYear();
    }

    if (isitString(yearNumber)) {
        yearNumber = parseInt(yearNumber, 10);
    }

    return isitDate(obj) && isitNumber(yearNumber) && yearNumber === obj.getFullYear();
}