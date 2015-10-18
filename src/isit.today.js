

import isDate from "isit.date";

export default function isToday(obj) {
    return isDate(obj) && obj.toDateString() === (new Date()).toDateString();
}