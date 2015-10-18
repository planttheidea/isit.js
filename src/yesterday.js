

import _isDate from "date";

export default function _isYesterday(obj) {
    let now = new Date(),
        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());

    return _isDate(obj) && obj.toDateString() === yesterdayString;
}