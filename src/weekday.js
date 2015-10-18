

import {not} from "helpers";
import isitDate from "date";

export default function isitWeekday(obj) {
    if (not(isitDate)(obj)) {
        return false;
    }

    let day = obj.getDay();

    return day !== 6 && day !== 0;
}