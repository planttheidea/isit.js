

import _isDate from "date";

export default function _isTomorrow(obj) {
    if (!_isDate(obj)) {
        return false;
    }

    let now = new Date(),
        tomorrowString = new Date(now.setDate(now.getDate() + 1).toDateString());

    return obj.toDateString() === tomorrowString;
}