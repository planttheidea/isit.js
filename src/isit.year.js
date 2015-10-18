

import isDate from "isit.date";
import isNumber from "isit.number";

export default function isYear(obj, year) {
    return isDate(obj) && isNumber(year) && year === obj.getFullYear();
}