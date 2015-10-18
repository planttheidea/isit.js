

import _isDate from "date";

export default function _isWeekday(obj) {
    if (!_isDate(obj)) {
        return false;
    }

    let day = obj.getDay();

    return day !== 6 && day !== 0;
}