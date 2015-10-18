

import {days} from "dateNames";
import _isDate from "date";
import _isString from "string";

export default function _isDay(obj, dayString) {
    return _isDate(obj) && _isString(dayString) && dayString.toLowerCase() === days[obj.getDay()];
}