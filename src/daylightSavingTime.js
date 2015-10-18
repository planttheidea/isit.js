

import _isDate from "date";

export default function _isDaylightSavingTime(obj) {
    if (!_isDate(obj)) {
        return false;
    }

    let objYear = obj.getFullYear(),
        jan = new Date(objYear, 0, 1),
        jul = new Date(objYear, 6, 1);

    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}