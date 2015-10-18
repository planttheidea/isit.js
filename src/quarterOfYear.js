// is obj a date and is it in quarter quarterNumber?

import isitDate from "date";
import isitNumber from "number";

export default function isitQuarterOfYear(obj, quarterNumber) {
    return isitDate(obj) && isitNumber(quarterNumber) && quarterNumber === Math.floor((obj.getMonth() + 3) / 3);
}