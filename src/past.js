

import _isDate from "date";

export default function _isPast(obj) {
    return _isDate(obj) && obj.getTime() < (new Date()).getTime();
}