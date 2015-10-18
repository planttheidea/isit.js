

import isitDate from "date";

export default function isitInDateRange(obj, startObj, endObj) {
    if (!isitDate(obj) || !isitDate(startObj) || !isitDate(endObj)) {
        return false;
    }

    let objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}