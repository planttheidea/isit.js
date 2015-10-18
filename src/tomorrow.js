// is obj a date and is it tomorrow?

import {not} from "./helpers";
import isitDate from "./date";

export default function isitTomorrow(obj) {
    if (not(isitDate)(obj)) {
        return false;
    }

    let now = new Date(),
        tomorrowString = new Date(now.setDate(now.getDate() + 1).toDateString());

    return obj.toDateString() === tomorrowString;
}