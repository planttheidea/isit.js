

import _isNumber from "number";

export default function _isLeapYear(obj) {
    return _isNumber(obj) && ((obj % 4 === 0 && obj % 100 !== 0) || obj % 400 === 0);
}