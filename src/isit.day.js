

import isDate from "isit.date";
import {days} from "dateNames";

export default function isDay(obj, dayString) {
    return isDate(obj) && isString(dayString) && dayString.toLowerCase() === days[obj.getDay()];
}