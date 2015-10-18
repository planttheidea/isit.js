

import _isDate from "date";

export default function _isToday(obj) {
    return _isDate(obj) && obj.toDateString() === (new Date()).toDateString();
}