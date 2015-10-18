

import {months} from "dateNames";
import _isDate from "date";
import _isString from "string";

export default function _isMonth(obj, monthString) {
    return _isDate(obj) && _isString(monthString) && monthString.toLowerCase() === months[obj.getMonth()];
}