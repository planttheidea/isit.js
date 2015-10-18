

import {days} from "dateNames";
import isitDate from "date";
import isitString from "string";

export default function isitDay(obj, dayString) {
    return isitDate(obj) && isitString(dayString) && dayString.toLowerCase() === days[obj.getDay()];
}