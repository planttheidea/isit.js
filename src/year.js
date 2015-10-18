

import isitDate from "date";
import isitNumber from "number";

export default function isitYear(obj, year) {
    return isitDate(obj) && isitNumber(year) && year === obj.getFullYear();
}