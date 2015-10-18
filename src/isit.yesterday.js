

import isDate from "isit.date";

export default function isYesterday(obj) {
    let now = new Date(),
        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());

    return isDate(obj) && obj.toDateString() === yesterdayString;
}