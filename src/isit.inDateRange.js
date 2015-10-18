

import isDate from "isit.date";

export default function isInDateRange(obj, startObj, endObj) {
    if (!isDate(obj) || !isDate(startObj) || !isDate(endObj)) {
        return false;
    }

    let objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}