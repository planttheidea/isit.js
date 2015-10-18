

import isDate from "isit.date";

export default function isFuture(obj) {
    return isDate(obj) && obj.getTime() > (new Date()).getTime();
}