

import isDate from "isit.date";

export default function isTomorrow(obj) {
    let now = new Date(),
        tomorrowString = new Date(now.setDate(now.getDate() + 1).toDateString());

    return isDate(obj) && obj.toDateString() === tomorrowString;
}