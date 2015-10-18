

import _isDate from "date";
import _isNumber from "number";

export default function _isYear(obj, year) {
    return _isDate(obj) && _isNumber(year) && year === obj.getFullYear();
}