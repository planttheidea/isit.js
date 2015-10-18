

import isDate from "isit.date";
import {months} from "dateNames";

export default function isMonth(obj, monthString) {
    return isDate(obj) && isString(monthString) && monthString.toLowerCase() === months[obj.getMonth()];
}