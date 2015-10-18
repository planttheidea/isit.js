

import _isDate from "date";
import _isNumber from "number";

export default function _isQuarterOfYear(obj, quarterNumber) {
    return _isDate(obj) && _isNumber(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
}