

import isDate from "isit.date";

export default function isDaylightSavingTime(obj) {
    if (!isDate(obj)) {
        return false;
    }

    let objYear = obj.getFullYear(),
        jan = new Date(objYear, 0, 1),
        jul = new Date(objYear, 6, 1);

    return obj.getTimezoneOffset() < Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}