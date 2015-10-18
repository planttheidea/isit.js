// are obj, startObj, and endObj all date values, and does obj exist in the range created by
// startObj and endObj?

import {
    all,
    not
} from "helpers";
import isitDate from "date";

export default function isitInDateRange(obj, startObj, endObj) {
    if (all(not(isitDate))(obj, startObj, endObj)) {
        return false;
    }

    let objTime = obj.getTime();

    return objTime > startObj.getTime() && objTime < endObj.getTime();
}