// is obj a date value and does it match the day string?

import {days} from "./_dateNames";
import isitDate from "./date";
import isitString from "./string";

export default function isitDay(obj, dayString) {
    return isitDate(obj) && isitString(dayString) && dayString.toLowerCase() === days[obj.getDay()];
}