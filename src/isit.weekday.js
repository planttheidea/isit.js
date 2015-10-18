

import isDate from "isit.date";

export default function isWeekday(obj) {
    if (!isDate(obj)) {
        return false;
    }

    let day = obj.getDay();

    return day !== 6 && day !== 0;
}