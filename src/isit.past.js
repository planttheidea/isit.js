

import isDate from "isit.date";

export default function isPast(obj) {
    return isDate(obj) && obj.getTime() < (new Date()).getTime();
}