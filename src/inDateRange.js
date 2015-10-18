

import _isDate from "date";

export default function _isInDateRange(obj, startObj, endObj) {
    if (!_isDate(obj) || !_isDate(startObj) || !_isDate(endObj)) {
        return false;
    }

    let objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}