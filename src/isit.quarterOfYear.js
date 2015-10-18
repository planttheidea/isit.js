

import isDate from "isit.date";
import isNumber from "isit.number";

export default function isQuarterOfYear(obj, quarterNumber) {
    return isDate(obj) && isNumber(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
}