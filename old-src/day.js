// is obj a date value and does it match the day string?

import {days} from "./_dateNames";
import isitDate from "./date";
import isitString from "./string";
import isitUndefined from "./undefined";

export default function isitDay(obj, dayString) {
    if (isitUndefined(dayString)) {
        dayString = days[(new Date()).getDay()];
    }

    return isitDate(obj) && isitString(dayString) && dayString.toLowerCase() === days[obj.getDay()];
}