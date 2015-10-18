// is obj a date and year a number, and is obj in year year?

import isitDate from "./date";
import isitNumber from "./number";

export default function isitYear(obj, year) {
    return isitDate(obj) && isitNumber(year) && year === obj.getFullYear();
}