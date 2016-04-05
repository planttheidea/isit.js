// is obj a date, and does it match monthString?

import {months} from "./_dateNames";
import isitDate from "./date";
import isitString from "./string";
import isitUndefined from "./undefined";

export default function isitMonth(obj, monthString) {
    if (isitUndefined(monthString)) {
        monthString = months[(new Date()).getMonth()];
    }

    return isitDate(obj) && isitString(monthString) && monthString.toLowerCase() === months[obj.getMonth()];
}