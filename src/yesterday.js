// is obj a date and is it yesterday?

import isitDate from "date";

export default function isitYesterday(obj) {
    let now = new Date(),
        yesterdayString = new Date(now.setDate(now.getDate() - 1).toDateString());

    return isitDate(obj) && obj.toDateString() === yesterdayString;
}